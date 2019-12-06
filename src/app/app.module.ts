import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PnfComponent } from './pnf.component';
import { routingModule,  appRoutingProviders} from './app.routing';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, routingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, LoginComponent, PnfComponent, SignupComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
