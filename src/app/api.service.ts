import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    
   }
   getPostData(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
};
