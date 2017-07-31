import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

import { Book } from "app/models/book.model";

/**
 * Service to fetch the book data
 */
// The `@injectable` decorator is required on a service 
// if you want to inject other services (like Angular's http service here) into it.
@Injectable()
export class BooksService {
    constructor(private http: Http) { }

    /**
     * Fetches the books array from the _books.json_ file by making an http get request
     * 
     * See: {@link Book}, {@link BookListComponent}
     * 
     * @returns {Observable<Book[]>} the observable wrapping the array of books
     */
    getBooks(): Observable<Book[]> {
        return this.http.get("assets/books.json")
            .map((response: Response) => {
                // pull out the json payload from the response 
                // and "cast" it to an array of our Book model class
                // see here: https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html
                return response.json() as Book[];
            });
    }

    /**
     * Fetches the book with the given id from the array of all books
     * 
     * See: {@link Book}, {@link BookDetailComponent}
     * 
     * @param {string} id the id of the book whose details we want
     * @returns {Observable<Book>} the observable wrapping the book
     */
    getBook(id: string): Observable<Book> {
        // get all the books with the getBooks method
        // then map the resulting observable to one that contains 
        // only the book whose id matches the given argument
        return this.getBooks()
            .map((books: Book[]) => {
                return books.find(book => {
                    return book.product.skuId === id;
                });
            });
    }

}