import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { BacklogComponent } from './components/backlog/backlog.component'; 
import { RoutingErrorPageComponent } from './error-pages/routing-error-page/routing-error-page.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'show-list', component: ShowsListComponent},
  {path: 'show-list/:id/edit', component: EditPageComponent},
  {path: 'show-list/:id', component: ShowDetailsComponent},
  {path: 'create-show', component: CreatePageComponent},
  {path: 'backlog', component: BacklogComponent},
  {path: 'seasons',
    children: [
      {path: 'winter', component: WelcomePageComponent},
      {path: 'summer', component: WelcomePageComponent},
      {path: 'fall', component: WelcomePageComponent},
    ]
  },
  {path: '**', component: RoutingErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Note:
/*
When we want to pass in a parater to the route just add the  /:<paramname>
to the route and go into the template and the routerlink would be:
[routerLink]="['/show-list', show.id]" =-> notice the second paramter

now to grab that parameter in the target class,
go into the target class and pass in a 
ActivatedRoute object to the constructor

*/