import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./officetech/components/profile/profile.component";
import {EditProfileComponent} from "./officetech/components/edit-profile/edit-profile.component";


export const routes: Routes = [

  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path:'edit-profile/:id',
    component: EditProfileComponent
  }

];

