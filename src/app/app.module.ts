import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "app/app-routing.module";
import { BookDetailModule } from './book-detail/book-detail.module';
import { BookListModule } from './book-list/book-list.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BooksService } from "app/books.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    AppRoutingModule, 
    BookDetailModule, 
    BookListModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
