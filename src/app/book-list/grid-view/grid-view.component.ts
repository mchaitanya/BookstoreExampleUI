import { Component, Input } from '@angular/core';

import { Book } from "app/models/book.model";

@Component({
  selector: 'book-grid-view',
  templateUrl: './grid-view.component.html'
})
export class GridViewComponent {
  @Input() books: Book[]

}
