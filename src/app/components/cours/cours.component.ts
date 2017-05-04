import { Component, OnInit } from "@angular/core";
import { Course } from "../../objets-metiers/course";
import { CoursService } from "../../services/cours.service";
import { Message } from "primeng/primeng";

@Component({
    moduleId:module.id,
    selector:'cours-liste',
    templateUrl:'cours.component.html'
})
export class CoursListeComponent implements OnInit {



    listeCours:Course[];
    erreurHttp : string;

    coursParId:Course;
    idCours:number;

    msgs: Message[] = [];


    cestFini:string;

    constructor(private coursService:CoursService) {

    }

    ngOnInit(): void {
       /*
        this.coursService.obtenirListeApi()
                        .subscribe(
                            liste => this.listeCours = liste,
                            err => this.erreurHttp = err.status,
                            function() { this.cestFini = "cool c'est fini"; 
                            console.log(this.cestFini);
                            console.log("c'est encore + fini !");}
                            );
        
        this.listeCours.forEach(function(cours) {
                    console.log(cours.nom + " - " + cours.libelleEtablissement)
        });
        */
        
        this.coursService.obtenirListeServeur()
                        .subscribe( liste => this.listeCours = liste,
                        err => this.erreurHttp = err.status );
       
     


     }


     public testerComplete() {

         console.log("subscribe complet");
     }

     public testerComplete2() {

         console.log("subscribe complet2");
     }

     public obtenirCours(id:number) {
          
          this.coursService.obtenirCoursNode(id)
                        .subscribe(res => this.coursParId = res,
                        err =>  this.showError(),
                        () => this.showSuccess());
     }

     showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'cours inexistant', detail:'l\'id est peut-être erroné.'});
    }

    showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Cours trouvé !', detail:'bien joué mec.'});
    }


}

