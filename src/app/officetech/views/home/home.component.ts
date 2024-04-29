import { Component } from '@angular/core';
import {PanelComponent} from "../panel-services/panel-services.component";
import {ForumComponent} from "../forum/forum.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PanelComponent,
    ForumComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
