import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { GridItemComponent } from './grid-view/grid-item/grid-item.component';

/**
 * Module that encapsulates all the features 
 * related to the display of an overview of all the books
 */
@NgModule({
  imports: [
    CommonModule, // for *ngIf, *ngFor etc. 
    RouterModule // for routerLink
  ],
  declarations: [
    BookListComponent, 
    ListViewComponent, 
    GridViewComponent, 
    GridItemComponent
  ]
})
export class BookListModule { }
