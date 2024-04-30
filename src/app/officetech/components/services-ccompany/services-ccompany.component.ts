import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-services-ccompany',
  standalone: true,
  imports: [],
  templateUrl: './services-ccompany.component.html',
  styleUrl: './services-ccompany.component.css'
})
export class ServicesCompanyComponent {
  constructor(private router: Router){}

  newComment() {
    console.log('ola')
    this.router.navigate(["new_comment"])
  }
}
