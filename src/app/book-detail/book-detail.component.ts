import { Component, OnInit } from '@angular/core';

import { BooksService } from "app/books.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBook(0)
      .subscribe(book => this.book = book);
  }

}
