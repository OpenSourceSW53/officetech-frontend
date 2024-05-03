import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {UserEntity} from "../../models/user-entity";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    FormsModule,
    MatCardContent,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    NgIf,
    MatCardFooter
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  uId: number = 0;
  userData: UserEntity | undefined;
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.uId = 1;
      this.loadUser();
    });
  }
  loadUser(){
    this.userService.getUserData().subscribe(data => {
      this.userData =data.find(user => user.id === this.uId);
    });
  }
  saveChanges() {
    if (this.userData) {
      if (this.currentPassword !== this.userData.password) {
        // Mostrar mensaje de error o manejar de alguna otra manera
        return;
      }

      // Validar que la nueva contraseña y la confirmación de contraseña coincidan
      if (this.newPassword !== this.confirmPassword) {
        // Mostrar mensaje de error o manejar de alguna otra manera
        return;
      }
      this.userService.updateUserProfile(this.userData).subscribe(updateUser => {

      }, error =>{
        console.error('Error al actualizar el perfil:', error);
      });
    } else{
      console.error('Error al actualizar el perfil:AAAAAAAAAAAA');
    }
  }
  goBack(){
    const url = `/profile/${this.userData?.id}`; // Suponiendo que tienes userId definido en el componente
    this.router.navigateByUrl(url);
  }

}
