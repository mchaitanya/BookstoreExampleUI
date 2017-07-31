import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BookListComponent } from "app/book-list/book-list.component";
import { BookDetailComponent } from "app/book-detail/book-detail.component";

const appRoutes: Routes = [
    {path: '', redirectTo: "/books", pathMatch: "full"}, 
    {path: "books", component: BookListComponent}, 
    {path: "books/:id", component: BookDetailComponent}
];

/**
 * Module that defines all the routes at the root level
 */
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ], 
    exports: [RouterModule]
})
export class AppRoutingModule {

}