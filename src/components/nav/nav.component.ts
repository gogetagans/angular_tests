import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'services/users.service';

@Component({
  selector: 'dgl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [ReactiveFormsModule],
  providers: [UsersService],
  standalone: true
})
export default class NavComponent implements OnInit {
  userForm = new FormGroup({
    user: new FormControl(''),
  });
  constructor(private usersService: UsersService) { 

  }
  ngOnInit(): void {
    this.userForm.valueChanges.subscribe(({user}) => {
     user && this.usersService.findUser(user);
    });
  }


}
