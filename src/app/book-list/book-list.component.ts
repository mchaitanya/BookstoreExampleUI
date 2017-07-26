import { Component, OnInit } from "@angular/core";

import { BooksService } from "app/books.service";

@Component({
    selector: "app-book-list", 
    templateUrl: "./book-list.component.html"
})
export class BookListComponent implements OnInit {
    books: any[];
    view: string = "list";

    constructor(private booksService: BooksService) { }

    ngOnInit() {
        this.booksService.getBooks()
            .subscribe(books => this.books = books);
    }

    switchToListView() {
        this.view = "list";
    }

    switchToGridView() {
        this.view = "grid";
    }


}