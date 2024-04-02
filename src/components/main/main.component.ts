import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'models/user';
import { Observable } from 'rxjs';
import { UsersService } from 'services/users.service';
import CardComponent from 'ui/card/card.component';

@Component({
  selector: 'dgl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [HttpClientModule, CardComponent, NgFor, AsyncPipe],
  providers: [UsersService],
  standalone: true,
})
export default class MainComponent {
  users$: Observable<User[]>;
  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers$;
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}
