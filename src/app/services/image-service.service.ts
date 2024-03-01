import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModule } from '../models/image/image.module';
import { ResponseObjectModule } from '../models/response-object/response-object.module';

const api = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) { }

  uploadImage(formdata: FormData) {
      let headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
      return this.http.post(`${api}/file/upload-lesson-img`, formdata, { headers });
  }

  upadteImage(formdata: FormData) {
    //Khai báo cho api biết nhận về đối tượng formdata multipart/form-data:
    let headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    this.http.put(`${api}/file/update`, formdata, { headers }).subscribe(resp => {
       var image = (resp as ResponseObjectModule).data;
      console.log(image);
    })
  }
}
