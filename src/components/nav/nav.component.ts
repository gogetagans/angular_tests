import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from 'services/users.service';

@Component({
  selector: 'dgl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [ReactiveFormsModule],
  providers: [UsersService],
  standalone: true,
})
export default class NavComponent implements OnDestroy {
  subscription = new Subscription();
  userForm = new FormGroup({
    user: new FormControl(''),
  });
  constructor(private usersService: UsersService) {
    this.subscription.add(
      this.userForm.valueChanges.subscribe(
        ({ user }) => user && this.usersService.findUser(user)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
