import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Show, ShowView} from '../../models/shows';
import { ShowListService } from '../../services/shows-list.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  subscription! : Subscription;
  id: number;
  show! : Show;
  constructor(
    private showService: ShowListService,
    private route: ActivatedRoute)
  { 
     this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.subscription = this.showService.getShow(this.id).subscribe({
      next: show => this.show = show,
      error: err => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displayCompleted(show: Show) : string{
    if(show.completed){
      return "Yes";
    }
    return "No";
  }
}
