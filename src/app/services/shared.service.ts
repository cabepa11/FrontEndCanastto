import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  login() {

  }

  getCategory() {
    return this.http.get(this.url + "5ed0b4443500005b00ff9e02").toPromise();
  }
}
