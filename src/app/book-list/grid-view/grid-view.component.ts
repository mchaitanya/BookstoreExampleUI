import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Book } from "app/models/book.model";

/**
 * Component that displays all the books arranged in a grid
 */
@Component({
  selector: 'book-grid-view',
  templateUrl: './grid-view.component.html'
})
export class GridViewComponent {
  /**
   * Array of all the books displayed in this component
   * 
   * This input property is passed down from the parent {@link BookListComponent} 
   * to this component.
   */
  @Input() books: Book[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  /**
   * Routes the app to the page displaying the details of the selected book
   * 
   * This is the handler that reacts to the `bookSelected` event 
   * passed up from the child component {@link GridItemComponent}.
   * 
   * @param {Book} book the book that was selected in the grid 
   */
  loadBookDetails(book: Book) {
    this.router.navigate([book.product.skuId], {relativeTo: this.route});
  }
}
