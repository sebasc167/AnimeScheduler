import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Show } from "../models/shows";
import { Season } from '../models/seasons';
import { Weekday } from '../models/weekday';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ShowListService{
    private showsURL : string = environment.baseApiUrl + '/api/shows';
    //this URL can be a real one or from a file we have in the project
    
    constructor(private http : HttpClient){

    }
    
    //second way - with get requests
    getShows() : Observable<Show[]>{
        return this.http.get<Show[]>(this.showsURL);
        //Here we do not get back the list of shows DIRECTLY
        //WE RETURN an observable that emits the list of shows
        //observable is of a specific type seen above
        // THIS DOES NOT send the http get request yet
        //until we subscribe
    }

    getShow(id: number) : Observable<Show>{
        return this.http.get<Show>(this.showsURL + '/' + id);
    }

    deleteShowById(id: number){
        return this.http.delete(this.showsURL + '/' + id).subscribe(
            show => console.log('Show eliminated: ', show)
        );
    }
}

//export the class for use and 
//attach with the injectable decorator to class
//register the service with the corresponding injector in our case: root
//service is available to the whole application

//for a specific component and its children. Go to that component,
// and type in the component decroator: providers: [ProductService]
// we do not mess with Injectable(). we keep it as you see on left

//the methods are accessible to any class that uses it

//now we inject in our component. see that ts file :)