import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

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
export class HeaderComponent{
  /*
  * cuando la view cambie, se emitirá un evento para conocer en qué tipo de sección está
  * y así cambiar los titulos del navbar
  */
  navbar_list: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.titlesNavbar();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  titlesNavbar(navbar_list: string[] = ["Home", "Forum", "Services", "Profile", "Sign Out"]) {
    this.navbar_list = navbar_list;
  }

  isActualRoute(title: string) {
    return this.router.url === title
  }

  toggleNavbar() {
    const navbar = document.querySelector('#toolbar__content-list');
    const navbar_toggleIcon = document.querySelector('.toolbar__content-toggle i');

    if (navbar && navbar_toggleIcon) {
      if (navbar.classList.contains('toolbar__content-list-active')) {
        navbar.classList.remove('toolbar__content-list-active');
        navbar.classList.add('toolbar__content-list')
        navbar_toggleIcon.classList.remove('fa-times');
        navbar_toggleIcon.classList.add('fa-bars');
      } else {
        navbar.classList.remove('toolbar__content-list');
        navbar.classList.add('toolbar__content-list-active');
        navbar_toggleIcon.classList.remove('fa-bars');
        navbar_toggleIcon.classList.add('fa-times');
      }
    }
  }

}
