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

  getImage(album: string, imageNum:number) : Observable<ArrayBuffer>{
    return this.http.get(`${this.api}/albums/${album}/${imageNum}`, {responseType:'arraybuffer'});
  }

  getImageCount(album:string){
    return this.http.get(`${this.api}/albums/${album}/count`);
  }

  getAlbumNames(){
    return this.http.get(`${this.api}/albums/all`);
  }

}
