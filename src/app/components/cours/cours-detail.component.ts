
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "../../objets-metiers/course";


@Component({
    moduleId:module.id,
    selector:'cours-detail',
    templateUrl:'cours-detail.component.html'
})
export class CoursDetailComponent implements OnInit {
      
    listeCours:Course[];

    title:string;

    recherche:Course[];

      constructor(private router:ActivatedRoute,
      private route:Router) {


      }
      
        ngOnInit(): void {
            
            let id = this.router.snapshot.params['id'];
            
            this.title = `Détail du cours ${id}`;
        }


public goBack() {
    this.route.navigate(['/cours']);

}


}
