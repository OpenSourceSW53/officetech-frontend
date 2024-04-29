import { Routes } from '@angular/router';
import {SignInComponent} from "./officetech/components/sign-in/sign-in.component";
import {SignUpComponent} from "./officetech/components/sign-up/sign-up.component";
import {SubscriptionComponent} from "./officetech/components/subscription/subscription.component";
import {PaymentDetailsComponent} from "./officetech/components/payment-details/payment-details.component";
import {HomeComponent} from "./officetech/views/home/home.component";
import {PanelComponent} from "./officetech/views/panel-services/panel-services.component";
import {ForumComponent} from "./officetech/views/forum/forum.component";
import {ServicesCcompanyComponent} from "./officetech/components/services-ccompany/services-ccompany.component";
import {CommentsComponent} from "./officetech/components/comments/comments.component";

export const routes: Routes = [
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "sign-up/subscription",
    component: SubscriptionComponent
  },
  {
    path: "sign-up/subscription/payment-details",
    component: PaymentDetailsComponent
  },
  {
    path: "home/:type_user/:id",
    component: PanelComponent
  },
  {
    path: "forum/:type_user/:id",
    component: ForumComponent
  },
  {
    path: "services/:type_user/:id",
    component: ServicesCcompanyComponent
  },
  {
    path: "services/:type_user/:id/new_comment",
    component: CommentsComponent
  }
];
