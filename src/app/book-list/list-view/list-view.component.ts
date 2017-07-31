import { Component, Input } from '@angular/core';

import { Book } from "app/models/book.model";

/**
 * Component that displays all the book in a top-down list
 */
@Component({
  selector: 'book-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent {
  /**
   * Array of all the books displayed in this component
   * 
   * This input property is passed down from the parent {@link BookListComponent} 
   * to this component
   */
  @Input() books: Book[];

}
