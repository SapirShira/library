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
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddSubscriberComponent } from './components/add-subscriber/add-subscriber.component';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';



const routes: Routes = [
  { path: 'author', component: AuthorComponent },
  { path: 'books', component: BooksComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'copiec/:id', component: CopiecComponent },
  { path: 'copiec', component: CopiecComponent },
  { path: 'crowd', component: CrowdComponent },
  { path: 'lendind ditils', component: LendindDitilsComponent },
  { path: 'lending', component: LendingComponent },
  { path: 'subcription types', component: SubcriptionTypesComponent },
  { path: 'addSubscribers/:id', component: AddSubscriberComponent },
  { path: 'subscribers', component: SubscribersComponent },
  // { path: 'addSubscribers', component: AddSubscriberComponent },
  { path: 'workes', component: WorkesComponent },
  {path:'addWorker/:id', component:AddWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
