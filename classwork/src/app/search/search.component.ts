import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  gifs: Array<object>
  constructor(private gifService: GifService) { }

  //searchGifs(){
    //this.gifService.gifsByQuery(this.searchString).subscribe(gifResponse => this.gifs = gifResponse)
  //}

  ngOnInit(): void {
    const searchInput = document.getElementById("searchField");
  }

}
