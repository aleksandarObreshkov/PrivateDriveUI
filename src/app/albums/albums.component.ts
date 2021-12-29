import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { SafeUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private fetchService: FetchService,
              private router: Router) { }

  albumNames:any;

  ngOnInit(): void {
    this.fetchAlbumNamesFromApi();
  }

  private fetchAlbumNamesFromApi(){
    this.fetchService.getAlbumNames().subscribe(e =>{
      this.albumNames=e;
    });
  }

  openAlbum(albumName:string){
    this.router.navigate(['/gallery', albumName]);
  }

}
