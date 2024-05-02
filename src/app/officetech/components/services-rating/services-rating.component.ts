import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {RequestServiceService} from "../../services/request-service/request-service.service";
import {DatePipe, NgForOf} from "@angular/common";

interface Service {
  id: number;
  first: string;
  second: string;
  third: string;
  fourth: number;
}

@Component({
  selector: 'app-services-rating',
  templateUrl: './services-rating.component.html',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  styleUrls: ['./services-rating.component.css']
})
export class ServicesRatingComponent implements OnInit {
  services: Service[] = [];
  type_user: string;
  id: string;

  constructor(
    private requestServiceRating: RequestServiceService,
    private router: Router
  ) {
    // Retrieve type_user and id from the URL
    this.type_user = this.router.url.split('/')[2];
    this.id = this.router.url.split('/')[3];
  }

  ngOnInit() {
    this.loadServicesRating();
  }

  loadServicesRating() {
    this.requestServiceRating.getItems().subscribe({
      next: (data: Service[]) => {
        console.log(data);
        this.services = data.filter((service: Service) => service.id === 9 || service.id === 10);
        console.log(this.services);
      },
      error: (error: any) => {
        console.error('Error fetching services', error);
      }
    });
  }

}
