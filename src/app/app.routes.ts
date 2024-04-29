import { Routes } from '@angular/router';
import {SignInComponent} from "./officetech/components/sign-in/sign-in.component";
import {SignUpComponent} from "./officetech/components/sign-up/sign-up.component";
import {SubscriptionComponent} from "./officetech/components/subscription/subscription.component";
import {PaymentDetailsComponent} from "./officetech/components/payment-details/payment-details.component";
import {HomeComponent} from "./officetech/views/home/home.component";

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
    path: "home",
    component: HomeComponent
  }
];
