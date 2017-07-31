import { Component, Input } from '@angular/core';

/**
 * Component that displays the comments for a given book
 */
@Component({
  selector: 'book-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent {
  /**
   * Comments about the book
   * 
   * This input property is passed down from the parent {@link BookDetailComponent}
   * to this component.
   */
  @Input() comments: string[];
  
}
