import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {RequestServiceService} from "../../services/request-service/request-service.service";
import {DatePipe, NgForOf} from "@angular/common";
import {PanelItemsService} from "../../services/panel/panel-items.service";
import {UserService} from "../../services/user/user.service";  // Adjust the path accordingly

interface Service {
  first: string;
  second: string;
  third: string;
  fourth: number;
}

@Component({
  selector: 'app-services-ccompany',
  templateUrl: './services-ccompany.component.html',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  styleUrls: ['./services-ccompany.component.css']
})
export class ServicesCompanyComponent implements OnInit {
  services: Service[] = [];
  type_user: string;
  id: string;

  constructor(
    private requestService: RequestServiceService,
    private panelService: PanelItemsService,
    private userService: UserService,
    private router: Router
  ) {
    // Retrieve type_user and id from the URL
    this.type_user = this.router.url.split('/')[2];
    this.id = this.router.url.split('/')[3];
  }

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    console.log("Type user:", this.type_user, "ID:", this.id);
    this.panelService.getItemsCompleted(this.type_user, parseInt(this.id)).subscribe(
      r=> {
        console.log(r);
        if(r) {
          for(let i of r) {
            this.userService.getUserDataByIdServices(i.technicianId).subscribe(
              res=>{
                this.services.push({
                  first: i.title,
                  second : res.name,
                  third: i.createdAt.split("T")[0],
                  fourth: i.rating
                })
              },
              e=>{
                console.log("Error to obtain user id", e)
              }
            )

          }
        }
      }
    )
    /*
    this.requestService.getItems().subscribe({
      next: (data: Service[]) => {
        console.log("Datos recibidos:", data);
        this.services = data.filter((service: Service) => service.id === 9 || service.id === 10);
        console.log("Servicios filtrados:", this.services);
      },
      error: (error: any) => {
        console.error('Error fetching services', error);
      }
    });
    */

  }

  newComment() {
    this.router.navigate(["services", this.type_user, this.id, "new_comment"]);
  }

  newRequestService() {
    // Use dynamic routing based on type_user and id
    this.router.navigate(["services", this.type_user, this.id, "new_tech_requirement"]);
  }
}
