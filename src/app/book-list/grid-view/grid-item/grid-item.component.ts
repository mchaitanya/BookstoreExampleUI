import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from "app/models/book.model";

/**
 * Component that displays an individual book embedded inside the grid view
 */
@Component({
  selector: 'book-grid-item',
  templateUrl: './grid-item.component.html'
})
export class GridItemComponent {
  /**
   * Book that this component displays
   * 
   * This input property is passed down from the parent {@link GridViewComponent} 
   * to this component.
   */
  @Input() book: Book;
  /**
   * Event emitted by this component when the book's title is clicked
   * 
   * A handler can be attached for this event in the parent {@link GridViewComponent}.
   */
  @Output() bookSelected = new EventEmitter<Book>();

  /**
   * Emits the `bookSelected` event when the book's title is clicked
   */
  onClick() {
    this.bookSelected.emit(this.book);
  }

}
