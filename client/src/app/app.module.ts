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
import { WorkesComponent } from './components/workes/workes.component';
import { CopiecComponent } from './components/copiec/copiec.component';
import { SubcriptionTypesComponent } from './components/subcription-types/subcription-types.component';
import { AuthorComponent } from './components/author/author.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CategoriesComponent,
    SubscribersComponent,
    LendingComponent,
    CrowdComponent,
    LendindDitilsComponent,
    WorkesComponent,
    CopiecComponent,
    SubcriptionTypesComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
