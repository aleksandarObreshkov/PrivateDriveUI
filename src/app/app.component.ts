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

  menuLinks= [{text:"All photos", link:"/gallery"}, 
              {text:"Albums", link:"/albums"},
              {text:"Upload", link:"/upload"}];
}
