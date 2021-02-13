import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
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
import { ReturnsComponent } from './components/returns/returns.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import {AuthGuard} from './auth.guard';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'author', component: AuthorComponent, canActivate:[AuthGuard]},
  { path: 'addAuthor/:id', component: AddAuthorComponent, canActivate:[AuthGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'books', component: BooksComponent, canActivate:[AuthGuard]},
  { path: 'addBook', component: AddBookComponent, canActivate:[AuthGuard] },
  { path: 'categories', component: CategoriesComponent, canActivate:[AuthGuard] },
  { path: 'return', component: ReturnsComponent , canActivate:[AuthGuard]},
  { path: 'copiec/:id', component: CopiecComponent, canActivate:[AuthGuard] },
  { path: 'copiec', component: CopiecComponent, canActivate:[AuthGuard] },
  { path: 'crowd', component: CrowdComponent, canActivate:[AuthGuard] },
  { path: 'lendind ditils', component: LendindDitilsComponent, canActivate:[AuthGuard] },
  { path: 'lending', component: LendingComponent, canActivate:[AuthGuard] },
  { path: 'subcription types', component: SubcriptionTypesComponent, canActivate:[AuthGuard] },
  { path: 'addSubscribers/:id', component: AddSubscriberComponent, canActivate:[AuthGuard] },
  { path: 'subscribers', component: SubscribersComponent, canActivate:[AuthGuard] },
  // { path: 'addSubscribers', component: AddSubscriberComponent },
  { path: 'workes', component: WorkesComponent , canActivate:[AuthGuard]},
  {path:'addWorker/:id', component:AddWorkerComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
