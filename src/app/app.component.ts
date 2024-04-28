import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../public/header/header.component";
import {SignUpComponent} from "./officetech/components/sign-up/sign-up.component";
import {SignInComponent} from "./officetech/components/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SignUpComponent, SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'officetech-frontend';
}
