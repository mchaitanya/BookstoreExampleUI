import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Book } from "app/models/book.model";

@Component({
  selector: 'book-grid-view',
  templateUrl: './grid-view.component.html'
})
export class GridViewComponent {
  @Input() books: Book[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  loadBookDetails(book: Book) {
    this.router.navigate([book.product.skuId], {relativeTo: this.route});
  }
}
