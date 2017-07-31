import { Component, Input } from '@angular/core';

import { Rating } from "app/models/rating.model";

/**
 * Component that displays the rating for a given book
 * 
 * The rating is displayed on a scale of 0-5 stars. 
 */
@Component({
  selector: 'book-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  /**
   * Rating information for the book
   * 
   * This input property is passed down from the parent {@link BookDetailComponent}
   * to this component.
   */
  @Input() rating: Rating;
  /**
   * Reference to the JavaScript Math object so that it can be used in the template
   */
  math = Math;
  
}
