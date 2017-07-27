import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { BooksService } from "app/books.service";
import { Book } from "app/models/book.model";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private booksService: BooksService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    // extract the id param from the current route
    const bookId: string = this.route.snapshot.params['id'];
    // make an HTTP call to get the book with that id
    // since this is an async operation, subscribe to the observable
    // when the data arrives, the callback will assign it to the book property
    this.booksService.getBook(bookId)
      .subscribe(book => this.book = book);
  }

}
