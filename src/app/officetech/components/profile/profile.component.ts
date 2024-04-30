import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  name: string = "";
  email: string = "";
  phone: string = "";
  imgUrl: string = "";

  constructor() { }

  ngOnInit(): void {

    this.name = "Nombre del Usuario";
    this.email = "usuario@example.com";
    this.phone = "123456789";
    this.imgUrl = "url_de_la_imagen";
  }
}
