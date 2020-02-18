import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClientModule) { }

  gifsByQuery(searchString){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=eBaT7BwDUoL58JcMqm6aeFUYyVa4b4Ft&q=${searchString}&limit=25&offset=0&rating=R&lang=en`).pipe(
      map(res=> res["date"])
    )
  }
}
