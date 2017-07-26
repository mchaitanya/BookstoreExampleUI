import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "app/app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { ListViewComponent } from './book-list/list-view/list-view.component';
import { GridViewComponent } from './book-list/grid-view/grid-view.component';
import { GridItemComponent } from './book-list/grid-view/grid-item/grid-item.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { DiscountPipe } from "app/discount.pipe";
import { BooksService } from "app/books.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    BookListComponent, 
    ListViewComponent, 
    GridViewComponent, 
    GridItemComponent, 
    BookDetailComponent, 
    DiscountPipe 
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
