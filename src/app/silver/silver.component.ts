import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-silver',
  templateUrl: './silver.component.html',
  styleUrls: ['./silver.component.scss'],
})
export class SilverComponent implements OnInit {
  public currency: string;
  public title: string;
  public values = [];
  public begin: number = 0;
  public limitSet: number = 40;
  public valuePag = [];
  public elementHeight;
  public element: string = 'plata';

  @ViewChild('elementsContainer') elementView: ElementRef;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.sendGetRequest('plata').subscribe((res: any) => {
      this.currency = res.unit;
      this.title = res.name;
      this.values = Object.entries(res.values);
      this.showValues(this.begin, this.limitSet);
    });
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
