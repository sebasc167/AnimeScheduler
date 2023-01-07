import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Show } from 'src/app/models/shows';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class DataService{

    getSeasonTypes(): Observable<string[]> {
      return of(['Winter', 'Summer', 'Fall']);
    }
    
    getWeekday(): Observable<string[]> {
        return of(['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
      }

    apiUrl: string = environment.baseApiUrl + '/api/shows';
    constructor(private httpClient : HttpClient){

    }

    postForm(showInput : Show) : Observable<any>{
        return this.httpClient.post(this.apiUrl, showInput);
    }
}
