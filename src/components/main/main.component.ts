import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { UsersService } from 'services/users.service';

@Component({
  selector: 'dgl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [HttpClientModule],
  providers: [UsersService],
  standalone: true
})
export default class MainComponent implements OnInit{
  constructor(private usersService: UsersService) { }
  users = new Array<User>();

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {  
      console.log(users);
      this.users = users;
    });  
  }
}
    

