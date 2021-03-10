import { Component, OnInit, Input } from '@angular/core';
import { MONTHS } from '../shared/constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() priceData: string;
  @Input() unit: string;
  @Input() info: string;
  @Input() elemento: string;

  public date: string;
  public price: string;
  public dateToUse: number;

  ngOnInit(): void {
    console.log('this is the name used', typeof this.priceData);
    this.dateToUse = parseInt(this.priceData[0]);
    this.separateValue();
  }

  separateValue(): void {
    let d = new Date(0);
    let seconds = d.setUTCSeconds(this.dateToUse);
    let actualDate = new Date(seconds);
    let day = actualDate.getDate();
    let monthIndex = actualDate.getMonth();
    let month = MONTHS[monthIndex];
    let year = actualDate.getFullYear();
    this.date = `${day} of ${month} of ${year}`;
    this.price = this.priceData[1];
  }

  copyToClipboard(event): void {
    const targetted = event.target;
    const range = document.createRange();
    range.selectNode(targetted.parentNode.parentNode);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert('Text has been copied succesfully');
  }
}
