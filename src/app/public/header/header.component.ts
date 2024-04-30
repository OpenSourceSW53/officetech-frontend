import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {NgClass, NgForOf, NgIf, Location} from "@angular/common";
import {ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

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

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    this.titlesNavbar();
    console.log(location.path());
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Llama a la función que deseas ejecutar cuando la ruta cambie
      this.titlesNavbar();
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  titlesNavbar() {
    if (this.location.path()=== '/start' || this.location.path()==='/sign-in'|| this.location.path()==='/log-in'|| this.location.path()==='/sign-up') {
      this.navbar_list = ["Start","Sign-in"];
    }
    else{
      this.navbar_list = ["Home", "Forum", "Services", "Profile", "Sign Out"];
    }
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
