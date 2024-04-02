import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, inject } from '@angular/core';
import { User } from 'models/user';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnDestroy {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  subscription = new Subscription();
  url = 'https://jsonplaceholder.typicode.com/users';
  users: User[] = [];
  filteredUsers: User[] = [];
  constructor(private http: HttpClient) {
    this.getUsersFromApi();
  }

  getUsersFromApi(): void {
    this.subscription.add(
      this.http.get<User[]>(this.url).subscribe((users) => {
        this.users$.next(users);
      })
    );
  }

  get getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  findUser(search: string): void {
    this.filteredUsers = this.users$
      .getValue()
      .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
    this.users$.next(this.filteredUsers);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
