import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CoursListeComponent } from "./cours.component";
import { CoursService } from "../../services/cours.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoursDetailComponent } from "./cours-detail.component";
import { RouterModule } from "@angular/router";
import { CoursFiltrePipe } from "./cours-filtre.pipe";
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports:      [ GrowlModule,FormsModule,RouterModule,CommonModule ],
  declarations: [CoursFiltrePipe,CoursListeComponent,CoursDetailComponent],
  exports:[CoursListeComponent],
  providers:[CoursService]
})
export class CoursModule {}
