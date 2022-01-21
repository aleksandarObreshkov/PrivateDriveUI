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
  apiUrl = environment.backendUrl;

  onFileSelected(event) {

    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        this.readAndUploadFile(file)        
    }
  }

  sendFile(file){
    const upload$ = this.http.post(`${this.apiUrl}/upload`, file);
    upload$.subscribe();
  }

  readAndUploadFile(file) {
    return new Promise((resolve, reject) => {
      // Create file reader
      let reader = new FileReader()
  
      // Register event listeners
      reader.addEventListener("loadend", e => {
        resolve(e.target.result)
        this.sendFile(e.target.result)
      })
      reader.addEventListener("error", reject)
  
      // Read file
      reader.readAsArrayBuffer(file)
    })
  }
}
