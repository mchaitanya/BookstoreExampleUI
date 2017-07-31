import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookDetailComponent } from './book-detail.component';
import { PriceComponent } from './price/price.component';
import { RatingComponent } from './rating/rating.component';
import { CommentsComponent } from './comments/comments.component';

import { DiscountPipe } from "./discount.pipe";

/**
 * Module that encapsulates all the features 
 * related to the display of a single book's details
 */
@NgModule({
  imports: [
    CommonModule, // this is required for common directives like *ngIf, *ngFor etc.
    RouterModule // this is required for the routerLink directive
  ],
  declarations: [
    BookDetailComponent, 
    PriceComponent, 
    RatingComponent, 
    CommentsComponent, 
    DiscountPipe
  ]
})
export class BookDetailModule { }
