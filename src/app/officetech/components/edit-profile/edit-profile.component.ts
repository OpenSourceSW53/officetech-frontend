import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  firstName: string= "";
  lastName: string= "";
  email: string= "";
  phone: string= "";
  password: string= "";

  constructor() { }

  ngOnInit(): void {

    this.firstName = "John";
    this.lastName = "Doe";
    this.email = "john.doe@example.com";
    this.phone = "123456789";
    this.password = "";
  }
}
