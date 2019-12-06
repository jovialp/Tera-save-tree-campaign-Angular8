import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PnfComponent } from './pnf.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: PnfComponent
  }
];

export const appRoutingProviders: any[] = [];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
