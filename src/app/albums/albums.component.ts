import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private fetchService: FetchService) { }

  albumNames:any;

  ngOnInit(): void {
    this.fetchService.getAlbumNames().subscribe(e =>{
      this.albumNames=e;
    });
  }
}
