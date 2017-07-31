import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { BooksService } from "app/books.service";
import { Book } from "app/models/book.model";

/**
 * Component that displays the details of the selected book
 */
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  /**
   * Selected book
   */
  book: Book;

  /**
   * Auto-initialize private references in this component 
   * to the BooksService instance and the ActivatedRoute instance 
   * provided by Angular's dependency injector
   * 
   * @param {BooksService} booksService the BooksService instance that Angular will inject
   * @param {ActivatedRoute} route the route that led to the loading of this component. Angular will inject this too.
   */
  constructor(
    private booksService: BooksService, 
    private route: ActivatedRoute
  ) { }

  /**
   * OnInit lifecycle hook to fetch the book's data right after Angular creates this component
   * 
   * See: {@link BooksService#getBook}
   */
  ngOnInit() { 
    // extract the id param from the current route
    const bookId: string = this.route.snapshot.params['id'];
    // since fetching the book is an async operation, subscribe to the observable
    // when the data arrives, the callback will assign it to the book property
    this.booksService.getBook(bookId)
      .subscribe(book => this.book = book);
  }

}
