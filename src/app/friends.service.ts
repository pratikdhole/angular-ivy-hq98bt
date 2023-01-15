import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FriendsService {
  constructor(private http: HttpClient) {}
  
  
  
  getJSON(): Observable<any> {
    return this.http.get('./assets/friends.json');
  }
}
