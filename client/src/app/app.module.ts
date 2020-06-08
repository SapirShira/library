import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { LendingComponent } from './components/lending/lending.component';
import { CrowdComponent } from './components/crowd/crowd.component';
import { LendindDitilsComponent } from './components/lendind-ditils/lendind-ditils.component';
import { TypesComponent } from './components/types/types.component';
import { WorkesComponent } from './components/workes/workes.component';
import { BuyingDitailsComponent } from './components/buying-ditails/buying-ditails.component';
import { BuyingComponent } from './components/buying/buying.component';
import { StorsComponent } from './components/stors/stors.component';
import { CopiecComponent } from './components/copiec/copiec.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CategoriesComponent,
    SubscribersComponent,
    LendingComponent,
    CrowdComponent,
    LendindDitilsComponent,
    TypesComponent,
    WorkesComponent,
    BuyingDitailsComponent,
    BuyingComponent,
    StorsComponent,
    CopiecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
