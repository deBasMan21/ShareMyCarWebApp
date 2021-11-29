import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../pages/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  baseurl: string = 'https://sharemycar.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  getAllFriends(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}/user/friends/all`);
  }

  getAllFriendRecommendations(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}/user/friends/recommendations`);
  }

  createFriend(friendId: String): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/user/${friendId}/friend`, {});
  }
}
