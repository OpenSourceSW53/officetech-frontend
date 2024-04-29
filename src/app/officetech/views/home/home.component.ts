import { Component } from '@angular/core';
import {PanelComponent} from "../panel-services/panel-services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PanelComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
