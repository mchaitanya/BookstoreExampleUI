import { Component, Input } from '@angular/core';

import { Price } from "app/models/price.model";

@Component({
  selector: 'book-price',
  templateUrl: './price.component.html'
})
export class PriceComponent {
  @Input() price: Price;

}
