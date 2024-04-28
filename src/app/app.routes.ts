import { Routes } from '@angular/router';


import {ForumComponent} from "./officetech/views/forum/forum.component";
import {ResponsesComponent} from "./officetech/components/responses/responses.component";
import {PublishComponent} from "./officetech/components/publish/publish.component";

export const routes: Routes = [
  {path: 'home', component: ForumComponent },

  {path: 'publish/:id', component: PublishComponent},


  {path:'', pathMatch: 'full', redirectTo: 'home'},

  {path:'**', pathMatch: 'full', redirectTo: 'home'}

];
