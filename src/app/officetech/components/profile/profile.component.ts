import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {UserService} from "../../services/user/user.service.entity";
import {UserEntity} from "../../models/user-entity";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {

  userData: UserEntity | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params);
      const id = +params['id'];
      console.log('ID de usuario:', id);
      if (!isNaN(id)) {
         this.loadUser(id);
      }else{
        console.error('ID de usuario no válido:', id);
      }
    });
  }
    private loadUser(id: number) {
      try{
        this.userService.getUserData().subscribe(
          (result) => {
            this.userData = result.find(user => user.id === id);
          }
        )
      } catch(error) {
        console.error('Error al cargar datos de usuario:', error);
      }
    }
  }


