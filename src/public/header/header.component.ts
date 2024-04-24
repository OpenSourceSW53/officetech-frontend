import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /*
  * cuando la view cambie, se emitirá un evento para conocer en qué tipo de sección está
  * y así cambiar los titulos del navbar
  */
  navbar_list: string[] = [];

  constructor(private router: Router) {
    this.titlesNavbar();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    console.log(this.router.url);
  }
  titlesNavbar(navbar_list: string[] = ["Home", "About", "Features", "Testimonials", "Sign Up"]) {
    this.navbar_list = navbar_list;
  }

  isActualRoute(title: string) {
    console.log(this.router.url, title)
    return this.router.url === title
  }

}
