import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelItemsService {
  data: any[] = []
  constructor() {
    this.data = [
      {
        "first": "Cloud Storage Solutions: Facilitate remote access to important files and data.",
        "second": "James Gillighan, Software Engineer",
        "third": "In progress",
        "fourth": "4/5/2024"
      },
      {
        "first": "Project Management Tools: Organize our internal tasks and ensure timely project delivery to our clients.",
        "second": "Carlos Martinez, Project Lead",
        "third": "Active",
        "fourth": "14/2/2024"
      }
      ,
      {
        "first": "Customer Relationship Management (CRM) Software: Manage customer interactions and data throughout the customer lifecycle.",
        "second": "Samantha Johnson, Customer Service",
        "third": "In progress",
        "fourth": "9/1/2023"
      },
      {
        "first": "Data Analytics Tools: Analyze and visualize data to make informed business decisions.",
        "second": "Liam O'Connell, Data Analyst",
        "third": "Active",
        "fourth": "4/5/2024"
      }
    ]
  }

  async getItems() {
    return this.data;
  }
}
