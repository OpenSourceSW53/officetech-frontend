import { Component } from '@angular/core';
import {ServicesCcompanyComponent} from "../../components/services-ccompany/services-ccompany.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServicesCcompanyComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
