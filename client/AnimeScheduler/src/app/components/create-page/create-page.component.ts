import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/shows';
import { DataService } from '../../services/create-page.service';
import { Weekday } from 'src/app/models/weekday';
import { Season } from 'src/app/models/seasons';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit, OnDestroy {

  showInput! : Show;
  newshowInput : Show = { ...this.showInput};
  seasonTypes: Observable<string[]> | undefined;
  weekdayTypes : Observable<string[]> | undefined;
  //here we take each property of the showInput
  // and assign it to this newShowInput copy
  //with spread operator

  constructor(private dataService : DataService){

  }

  ngOnInit(): void {
    this.seasonTypes = this.dataService.getSeasonTypes();
    this.weekdayTypes = this.dataService.getWeekday();
  }

  ngOnDestroy(): void {
  }

  onSubmit(form: NgForm){
    console.log("Yay!! Submitting");
    this.dataService.postForm(this.newshowInput).subscribe({
      next: result => console.log('success: ', result),
      error: err => console.log(err)
    });
  }

  updateCompleted(){
    this.newshowInput.completed = !this.newshowInput.completed;
   
  }
}