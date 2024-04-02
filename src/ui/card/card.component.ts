import { NgClass, NgIf } from '@angular/common';
import { Component, input} from '@angular/core';
import { User } from 'models/user';


@Component({
  
  selector: 'dgl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [NgClass, NgIf],
})


export default class CardComponent {
  user = input<User>();
 
}
