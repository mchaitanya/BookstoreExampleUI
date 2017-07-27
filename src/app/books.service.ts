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

    getBook(id: string) {
        // this first gets all the books, then maps that observable to one 
        // that contains the book whose id matches the argument
        return this.getBooks()
            .map((books: Book[]) => {
                return books.find(book => {
                    return book.product.skuId === id;
                });
            });
    }

}