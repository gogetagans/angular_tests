import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from 'components/header/header.component';
import  MainComponent from 'components/main/main.component';
import NavComponent from 'components/nav/nav.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tests';

}
