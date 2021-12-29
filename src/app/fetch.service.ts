import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Byte } from '@angular/compiler/src/util';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  private api = environment.backendUrl;

  getImage(imageNum:number) : Observable<ArrayBuffer>{
    this.getImageCount();
    return this.http.get(`${this.api}/gallery/${imageNum}`, {responseType:'arraybuffer'});
  }

  getImageCount(){
    return this.http.get(`${this.api}/gallery/count`);
  }

  getAlbumNames(){
    return this.http.get(`${this.api}/albums/all`);
  }
}
