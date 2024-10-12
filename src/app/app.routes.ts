import {provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'**', redirectTo: '/home'}
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  }).catch(err => console.error(err));