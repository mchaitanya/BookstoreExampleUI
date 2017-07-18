import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "app/app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { DiscountPipe } from "app/discount.pipe";
import { BooksService } from "app/books.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    BookListComponent, 
    BookDetailComponent, 
    DiscountPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
