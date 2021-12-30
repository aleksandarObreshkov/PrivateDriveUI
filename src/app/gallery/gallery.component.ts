import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { FetchService } from '../fetch.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit{

  constructor(public dialog: MatDialog, 
              private fetchService: FetchService, 
              private domSanitizer: DomSanitizer,
              private route: ActivatedRoute) {}

  images = [];
  albumName:any;

  ngOnInit(): void {
    this.getAlbumName();
    this.fetchImages(this.albumName);
  }

  private getAlbumName(){
    this.route.paramMap.subscribe(e => {
      this.albumName=e.get("album_id");
    });
  }

  private fetchImages(albumId:string){
    this.fetchService.getImageCount(albumId).subscribe(e => {
      var imageCount = Number.parseInt(e.toString());
      for(var i =0; i<imageCount; i++){
        this.fetchService.getImage(albumId, i).subscribe(element =>{
          this.images.push(this.parseBuffer(element));
        });
      };
    });
  }

  private parseBuffer(buffer: ArrayBuffer) : SafeUrl{
    let typedArray = new Uint8Array(buffer);
    const string_char = typedArray.reduce((data, byte)=> {
      return data + String.fromCharCode(byte);
      }, '');
    let base64String = btoa(string_char);
    return this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg; base64,'+base64String)
  }

  toggle(url: SafeUrl){
    this.dialog.open(DialogComponent, {
      data: url
    });
  }
}