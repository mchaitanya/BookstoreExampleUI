import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
    constructor(private http: Http) { }

    getBooks() {
        return this.http.get("assets/books.json")
            .map(response => response.json());
    }

    getBook(id: number) {
        return this.http.get("assets/book.json")
            .map(response => response.json());
    }

}