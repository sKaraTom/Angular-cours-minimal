

import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../../objets-metiers/course";

@Pipe({

    name:'coursFiltre'

})
export class CoursFiltrePipe implements PipeTransform {
        transform(value:Course[],recherche:string='') {
            if(recherche !='') {
            let result =
             value.filter((cours:Course) => cours.description.toLowerCase().includes(recherche)
             || cours.name.toLowerCase().includes(recherche)
             || cours.libelleEtablissement.toLowerCase().includes(recherche)
             || cours.language.toLowerCase().includes(recherche));
             return result;
             } else {
                 return value;
             }
        }


}