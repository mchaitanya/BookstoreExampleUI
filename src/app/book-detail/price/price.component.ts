import { Component, Input } from '@angular/core';

import { Price } from "app/models/price.model";

/**
 * Component that displays the price for a given book
 * 
 * If a discount is offered, the original price is crossed out and 
 * the discounted price is shown next to it.
 */
@Component({
  selector: 'book-price',
  templateUrl: './price.component.html'
})
export class PriceComponent {
  /**
   * Pricing information for the book
   * 
   * This input property is passed down from the parent {@link BookDetailComponent}
   * to this component.
   */
  @Input() price: Price;

}
