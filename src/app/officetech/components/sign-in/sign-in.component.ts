import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardTitle } from "@angular/material/card";
import {MatFormField, MatHint, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatFormField,
    MatInput,
    MatCardTitle,
    MatLabel,
    MatIconButton,
    MatIcon,
    MatSuffix,
    MatHint,
    FormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  hide = true;
  email: string = "";
  pass: string = "";
  constructor(private router: Router, private authService: AuthService) {
    this.hide=true;
  }

  goToSignUp() {
    this.router.navigate(["sign-up"]);
  }

  signIn() {
    console.log(this.email, this.pass);
    const response = this.authService.signIn(this.email, this.pass);
    if (response) {

    }else{
      console.log('No se encontro el usuario');
    }
  }
}
