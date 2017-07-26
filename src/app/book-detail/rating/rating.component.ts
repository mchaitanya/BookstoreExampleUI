import { Component, Input } from '@angular/core';

import { Rating } from "app/models/rating.model";

@Component({
  selector: 'book-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  @Input() rating: Rating;
  
}
