import { Component, OnInit, Query } from '@angular/core';
import { GifService } from '../services/gif.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  gifs: Array<object>
  constructor(private gifService: GifService) { }

  //searchGifs(){
    //this.gifService.gifsByQuery(this.searchString).subscribe(gif => this.gifs = gif)
  //}

  ngOnInit(): void {
    const searchField = document.getElementById("searchField");
    const searchObservable = fromEvent(searchField, "keyup").pipe(
      map(e=>e.target['value']),
      filter(searchString => searchString.length > 3),
      debounceTime(400),
      distinctUntilChanged()
    );
    searchObservable.subscribe(query => this.gifService.gifsByQuery(query).subscribe(gif => this.gifs = gif));
  }

}
