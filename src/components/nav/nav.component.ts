import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dgl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [ReactiveFormsModule ],
  standalone: true
})
export default class NavComponent {
  userForm = new FormGroup({
    user: new FormControl(''),
  });
  constructor() { }

}
