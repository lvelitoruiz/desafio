import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent implements OnInit {
  public currency: string;
  public title: string;
  public values = [];
  public begin: number = 0;
  public limitSet: number = 40;
  public valuePag = [];
  public elementHeight;
  public getElements: Observable<string>;
  public element: string;

  @ViewChild('elementsContainer') elementView: ElementRef;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.element = params['element'];
      this.showElements();
    });
    console.log(this.element);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const positionY = window.pageYOffset;
    const heightTotal = window.innerHeight;
    if (positionY == this.elementHeight - heightTotal) {
      this.showValues(this.begin, this.limitSet);
    }
  }

  ngAfterViewInit() {}

  ngAfterViewChecked() {
    this.elementHeight =
      this.elementView.nativeElement.clientHeight +
      this.elementView.nativeElement.offsetTop;
  }

  showElements(): void {
    console.log(this.element);
    this.apiService.sendGetRequest(this.element).subscribe((res: any) => {
      console.log('any working', res);
      if (res && res.values) {
        this.currency = res.unit;
        this.title = res.name;
        this.values = Object.entries(res.values);
        this.showValues(this.begin, this.limitSet);
      } else {
        alert('You are searching for a category we do not have.');
        this.router.navigate(['values'], { queryParams: { element: 'oro' } });
      }
    });
  }

  showValues(beginning: number, limit: number): void {
    if (beginning < this.values.length) {
      if (limit > this.values.length) {
        const restant = this.values.length - beginning;
        const finalLimit = beginning + restant;
        for (let i = beginning; i < finalLimit; i++) {
          this.valuePag.push(this.values[i]);
        }
        this.begin = beginning + 40;
        this.limitSet = limit + 40;
      } else {
        for (let i = beginning; i < limit; i++) {
          this.valuePag.push(this.values[i]);
        }
        this.begin = beginning + 40;
        this.limitSet = limit + 40;
      }
    }
  }
}
