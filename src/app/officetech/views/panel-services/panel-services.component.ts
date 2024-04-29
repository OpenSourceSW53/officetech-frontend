import {Component, Input, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {CardHeaderComponent} from "../../components/card-header/card-header.component";
import {PanelItemsService} from "../../services/panel-items.service";
import {NgForOf} from "@angular/common";

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
  @Input() header_titles: string[] = []
  data: any[] = []

  constructor(private panelService: PanelItemsService) {

  }

  async ngOnInit() {
    await this.getItems();
    console.log(this.data)
  }

  async getItems() {
    this.data = await this.panelService.getItems();
  }
}
