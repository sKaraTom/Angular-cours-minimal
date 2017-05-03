import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursModule } from "./components/cours/cours.module";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeModule } from "./components/home/home.module";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { CoursListeComponent } from "./components/cours/cours.component";
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { CoursDetailComponent } from "./components/cours/cours-detail.component";


const routes : Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'cours', component: CoursListeComponent },
  { path:'cours/:id', component: CoursDetailComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports:      [ HttpModule,BrowserModule, CoursModule, HomeModule, RouterModule.forRoot(routes)  ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

