import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AuthorComponent } from './components/author/author.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CopiecComponent } from './components/copiec/copiec.component';
import { CrowdComponent } from './components/crowd/crowd.component';
import { LendindDitilsComponent } from './components/lendind-ditils/lendind-ditils.component';
import { LendingComponent } from './components/lending/lending.component';
import { SubcriptionTypesComponent } from './components/subcription-types/subcription-types.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { WorkesComponent } from './components/workes/workes.component';


const routes: Routes = [
  {path:'author',component:AuthorComponent },
  {path:'books',component:BooksComponent },
  {path:'categories',component:CategoriesComponent },
  {path:'copiec/:id',component:CopiecComponent },
  {path:'copiec',component:CopiecComponent },
  {path:'crowd',component:CrowdComponent },
  {path:'lendind ditils',component:LendindDitilsComponent },
  {path:'lending',component:LendingComponent },
  {path:'subcription types',component:SubcriptionTypesComponent },
  {path:'subscribers',component:SubscribersComponent },
  {path:'workes',component:WorkesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
