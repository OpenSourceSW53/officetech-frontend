import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardTitle } from "@angular/material/card";
import {MatFormField, MatHint, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

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
    MatHint
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  hide = true;
  constructor() {
    this.hide=true;
  }

}
