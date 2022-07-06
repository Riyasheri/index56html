import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchbookAppComponent } from './searchbook-app/searchbook-app.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { DeletebookComponent } from './deletebook/deletebook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchbookAppComponent,
    ViewbooksComponent,
    DeletebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
