import { Component, OnInit } from "@angular/core";

import { BooksService } from "app/books.service";
import { Book } from "app/models/book.model";

/**
 * Enum that defines all possible view types
 */
enum ViewType {
    List, 
    Grid
}

/**
 * Component that displays an overview of all the books in either a list/grid view
 */
@Component({
    selector: "app-book-list", 
    templateUrl: "./book-list.component.html"
})
export class BookListComponent implements OnInit {
    /**
     * Array of all the books displayed in this component
     */
    books: Book[];
    /**
     * Reference to the ViewType enum so that it can be used in the template
     * 
     * See: https://stackoverflow.com/a/35835985, {@link ViewType}
     */
    viewType = ViewType;
    /**
     * Current view type
     */
    view: ViewType = ViewType.List;

    /**
     * Auto-initialize a private reference in this component 
     * to the BooksService instance provided by Angular's dependency injector
     * 
     * @param {BooksService} booksService the BooksService instance that Angular will inject
     */
    constructor(private booksService: BooksService) { }

    /**
     * OnInit lifecycle hook to fetch all the books right after Angular creates this component
     * 
     * See: {@link BooksService#getBooks}
     */
    ngOnInit() {
        this.booksService.getBooks()
            .subscribe(books => this.books = books);
    }

    /**
     * Sets the current view type to _List_
     */
    switchToListView() {
        this.view = ViewType.List;
    }

    /**
     * Sets the current view type to _Grid_
     */
    switchToGridView() {
        this.view = ViewType.Grid;
    }


}