import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { BacklogComponent } from './components/backlog/backlog.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RoutingErrorPageComponent } from './error-pages/routing-error-page/routing-error-page.component';
import { CreationErrorPageComponent } from './error-pages/creation-error-page/creation-error-page.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    BacklogComponent,
    ShowsListComponent,
    WelcomePageComponent,
    RoutingErrorPageComponent,
    CreationErrorPageComponent,
    ShowDetailsComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//declarations - for declaring app's 
//components, pipes, directives

//imports - for bringing in modules the component
// and its children will need like the routing module
// and the httpclient module