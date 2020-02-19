import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) { }

  gifsByQuery(searchString){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=DtwTkZwAIfcbYylnIlpb5tczU7Y3MH8n&q=${searchString}&limit=25&offset=0&rating=R&lang=en`)
    .pipe(
      map(res => res["data"])
    )
  }

}