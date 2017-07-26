import { Component, Input } from '@angular/core';

import { Book } from "app/models/book.model";

@Component({
  selector: 'book-grid-item',
  templateUrl: './grid-item.component.html'
})
export class GridItemComponent {
  @Input() book: Book;

}
