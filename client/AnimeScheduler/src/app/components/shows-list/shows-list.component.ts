import { Component, OnDestroy, OnInit } from '@angular/core';
import { Season } from '../../models/seasons';
import { Weekday } from '../../models/weekday';
import {Show, ShowView} from '../../models/shows';
import { ShowListService } from '../../services/shows-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit, OnDestroy {

    shows : Show[] = [];
    filteredShows! : Show[];
    listFilter: string = "";
    pageTitle: string = "All shows";
    seeEditorName: boolean = false;
    subscription!: Subscription | undefined;
    //! tells typscript assignment will be handled later

    constructor(private showListService : ShowListService){
      //see notes below - we have injected the service ^^
    }

    ngOnInit() : void{
      this.loadShows();
    }
    
    ngOnDestroy(): void{
      //Here we unsubscribe 
      this.subscription?.unsubscribe();
    }

    loadShows(): void{
      this.subscription = this.showListService.getShows().subscribe({
        next : showlist => {
          this.shows = showlist; 
          this.filteredShows = [ ...this.shows];
        },
        error: err => console.log(err)
      });
    }

    displayCompleted(show: Show) : string{
      if(show.completed){
        return "Yes";
      }
      return "No";
    }

    searchShows(){
      if(this.listFilter == ""){
        this.ngOnInit();
      }
      else{
        this.shows = this.shows.filter(show =>{
            return show.name.toLocaleLowerCase().match(this.listFilter.toLocaleLowerCase());
        });
      }
    }

    deleteShow(id: number){
      this.showListService.deleteShowById(id);
      if(this.subscription != null){
        console.log("It is not null");
        this.subscription.unsubscribe();
        this.shows = [];
        this.subscription = this.showListService.getShows().subscribe({
          next : showlist => {
            this.shows = showlist; 
            this.filteredShows = [ ...this.shows];
          },
          error: err => console.log(err)
        });
      }
    }
}

//dependencies such as instances of a service
//is injected in constructor as parameters

/*
Notes
for the constructor you can make a private variable
of type showlistservice and declare it above the constructor
then the parameter can be an object of the same type
then as usual just assign the class property to that passed
in object.
Or... you can do what we did in the constructor. declare the 
private object to an object of that type. that is shorthand
syntax

*/