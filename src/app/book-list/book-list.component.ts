import { Component, OnInit } from "@angular/core";

import { BooksService } from "app/books.service";

enum ViewType {
    List, 
    Grid
}

@Component({
    selector: "app-book-list", 
    templateUrl: "./book-list.component.html"
})
export class BookListComponent implements OnInit {
    books: any[];

    // create a reference to the enum so that it can be used in the template
    // https://stackoverflow.com/a/35835985
    viewType = ViewType;
    view: ViewType = ViewType.List;

    constructor(private booksService: BooksService) { }

    ngOnInit() {
        this.booksService.getBooks()
            .subscribe(books => this.books = books);
    }

    switchToListView() {
        this.view = ViewType.List;
    }

    switchToGridView() {
        this.view = ViewType.Grid;
    }


}