import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of, map } from 'rxjs';
import { Show } from 'src/app/models/shows';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class EditService{

    constructor(private http: HttpClient){

    }

    getSeasonTypes(): Observable<string[]> {
      return of(['Winter', 'Summer', 'Fall']);
    }
    
    getWeekday(): Observable<string[]> {
        return of(['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
      }

    apiUrl: string = environment.baseApiUrl + '/api/shows';

    postForm(showInput : Show) : Observable<any>{
        return this.http.put(this.apiUrl, showInput);
    }

    getShows() : Observable<Show[]>{
        return this.http.get<Show[]>(this.apiUrl);
        //Here we do not get back the list of shows DIRECTLY
        //WE RETURN an observable that emits the list of shows
        //observable is of a specific type seen above
        // THIS DOES NOT send the http get request yet
        //until we subscribe
    }

    getShow(id: number) : Observable<Show>{
        return this.http.get<Show>(this.apiUrl + '/' + id);
    }

    updateShowById(id: number, show: Show){
        return this.http.put(this.apiUrl + '/' + id, show).subscribe(
            x => console.log('Show to be updated called: ', show.name)
        );
    }
}
