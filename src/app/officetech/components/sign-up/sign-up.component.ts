import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    MatRadioGroup,
    MatRadioButton,
    MatAnchor,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  hide = true;
  constructor(private router: Router) {
    this.hide=true;
  }

  goToSubscription() {
    this.router.navigate(["sign-up", "subscription"]);
  }

  goToSignIn() {
    this.router.navigate(["sign-in"]);
  }
}
