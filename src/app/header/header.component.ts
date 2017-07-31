import { Component } from '@angular/core';

/**
 * Component that displays the name of the app in a banner at the top
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /**
   * Name of the app
   */
  appName = "Bob's Bookstore";

}
