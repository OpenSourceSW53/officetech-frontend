import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {RequestServiceService} from "../../services/request-service/request-service.service";
import {DatePipe, NgForOf} from "@angular/common";  // Adjust the path accordingly

interface Service {
  id: number;
  first: string;
  second: string;
  third: string;
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
  }

  newComment() {
    this.router.navigate(["services", this.type_user, this.id, "new_comment"]);
  }

  newRequestService() {
    // Use dynamic routing based on type_user and id
    this.router.navigate(["services", this.type_user, this.id, "new_tech_requirement"]);
  }
}
