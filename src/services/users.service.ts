import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from 'models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient) {
  this.getUsersFromApi();
 }

url = 'https://jsonplaceholder.typicode.com/users';

users$ = new BehaviorSubject<User[]>([]);
users = this.users$.asObservable();


getUsersFromApi():void {
 this.http.get<User[]>(this.url).subscribe(users=> this.users$.next(users));
}

getUsers(): Observable<User[]>{ 
  return this.users$.asObservable();
}

find(search: string): void{
  const filteredUsers = this.users$.value.filter(user => user.name.includes(search));
  this.users$.next(filteredUsers);
}
}
