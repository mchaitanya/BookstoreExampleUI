import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Book } from "app/models/book.model";

// this decorator is needed so that we can inject the Http service into the BooksService
@Injectable()
export class BooksService {
    constructor(private http: Http) { }

    getBooks() {
        // "cast" the json to an array of our Book model class
        // see here: https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html
        return this.http.get("assets/books.json")
            .map(response => response.json() as Book[]);
    }

    getBook(id: number) {
        return this.http.get("assets/book.json")
            .map(response => response.json() as Book);
    }

}