import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CardComponent} from "../../../officetech/components/card/card.component";
import {CardHeaderComponent} from "../../../officetech/components/card-header/card-header.component";
import {PanelItemsService} from "../../../officetech/services/panel/panel-items.service";

@Component({
  selector: 'app-panel-services',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    NgForOf
  ],
  templateUrl: './panel-services.component.html',
  styleUrl: './panel-services.component.css'
})
export class PanelComponent implements OnInit {
  @Input() header_titles: string[] = ["Service", "Technician", "Status", "Due"]
  data: any[] = []

  constructor(private panelService: PanelItemsService) {

  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.panelService.getItems().subscribe(
      r=>{
        this.data = r
      },
      e=>{
        console.log(e)
      }
    )
  }
}
