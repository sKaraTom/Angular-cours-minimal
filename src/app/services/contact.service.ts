
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs/Observable";



@Injectable()
export class ContactService {

    
    constructor(http:Http) {

    }

    envoyerContactForm(formulaireContact:any) {
        console.log("depuis le service :");
        console.log(formulaireContact);

    }



}