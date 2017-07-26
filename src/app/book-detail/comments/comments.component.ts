import { Component, Input } from '@angular/core';

@Component({
  selector: 'book-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent {
  @Input() comments: string[];
  
}
