import { Component } from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {CardHeaderComponent} from "../../components/card-header/card-header.component";

@Component({
  selector: 'app-panel-services',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent
  ],
  templateUrl: './panel-services.component.html',
  styleUrl: './panel-services.component.css'
})
export class PanelServicesComponent {

}
