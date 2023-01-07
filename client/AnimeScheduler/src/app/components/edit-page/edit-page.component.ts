import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/shows';
import { EditService } from 'src/app/services/edit-page.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit, OnDestroy{
  newshowInput! : Show;
  seasonTypes: Observable<string[]> | undefined;
  weekdayTypes : Observable<string[]> | undefined;
  showStart! : Show;
  updateId!: number;
  constructor(private editService: EditService,
              private route: ActivatedRoute){
    this.updateId = Number(this.route.snapshot.paramMap.get('id'));
    this.editService.getShow(this.updateId).subscribe({
      next: element => {
        this.showStart = element;
        this.newshowInput = { ...this.showStart};
      }
    });
  }

  ngOnInit(): void {
    this.seasonTypes = this.editService.getSeasonTypes();
    this.weekdayTypes = this.editService.getWeekday();
  }

  ngOnDestroy(): void {
  }

  onSubmit(form: NgForm){
    this.updateShow();
  }

  updateCompleted(){
    this.newshowInput.completed = !this.newshowInput.completed;
  }

  updateShow(){
    console.log(this.newshowInput);
    this.editService.updateShowById(this.updateId,this.newshowInput);
  }
}
