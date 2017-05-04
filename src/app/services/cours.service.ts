

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Course } from "../objets-metiers/course";


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CoursService {

listeCours:Course[];

/*
    listeCours:Course[]=[{
  "nom":"le Framework Angular 2",
  "libelleEtablissement":"Doranco Bagnolet",
  "langage":"Javascript, TypeScript",
  "jours":3,
  "level":"élevé",
  "description":"(depuis l'API) Découvrir le célèbre framework de l'équipe Google ",
  "evaluation":[5]
},
{
  "nom":"Javascript",
  "libelleEtablissement":"Doranco Nation",
  "langage":"Javascript",
  "jours":1,
  "level":"moyen",
  "description":"(depuis l'API) langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs2 avec l'utilisation (par exemple) de Node.JS",
  "evaluation":[4]
}];
*/
    constructor(
        private http:Http
        ){
        
    }    

public obtenirListeApi() : Observable<Course[]>{

    return this.http.get("src/app/api/courses.json")
            .do(x => console.log(x))
            .map(cours => cours.json());
}


public obtenirlisteCours(): Course[] {

    return this.listeCours;

}

public obtenirListeServeur() : Observable<Course[]>{

    return this.http.get("http://localhost:4000/courses")
            .map(resultat => resultat.json());
}


public obtenirCoursNode(id:number) : Observable<Course> {
    const url = "http://localhost:4000/courseById/" + id;
    console.log("l'url :" + url);

    return this.http.get(url)
            .map(resultat => resultat.json());
}




}