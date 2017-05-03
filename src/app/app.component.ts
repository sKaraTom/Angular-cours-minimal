import { Component } from '@angular/core';
import { Course } from './objets-metiers/course';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html'
})
export class AppComponent {

name = 'Angular';

listeMot:string[];
courses:Course[];

estAffiche:boolean = false;

constructor() {

this.listeMot = ["mot1","mot2","mot3"];

}

public toggle():void{
    if(this.estAffiche) {
      this.estAffiche = false;
    }
  else {this.estAffiche = true; }

}



}
