import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PrivateDrive';
  menuLinks = new Map<String, String>();

  constructor(){
    this.initLinksMap();
  }

  private initLinksMap(){
    this.menuLinks.set("All Photos", "/gallery");
    this.menuLinks.set("Albums", "/albums");
    this.menuLinks.set("Upload", "/upload");
  }
}
