import { Component, Input } from '@angular/core';

import { Book } from "app/models/book.model";

@Component({
  selector: 'book-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent {
  @Input() books: Book[];

}
