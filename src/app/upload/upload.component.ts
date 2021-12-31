import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fileName: any;

  onFileSelected(event) {

    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        //const formData = new FormData();
        //formData.append("thumbnail", file);
        console.log("Starting upload");
        const upload$ = this.http.post(`/${environment.backendUrl}/upload`, file);
        //upload$.subscribe();
    }
  }
}
