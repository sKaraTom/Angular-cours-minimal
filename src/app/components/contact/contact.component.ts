
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactService } from "../../services/contact.service";
import { Course } from "../../objets-metiers/course";

@Component({
    moduleId:module.id,
    templateUrl:'contact.component.html',
    styleUrls: ['contact.component.css'],
})
export class ContactComponent implements OnInit {
       
       
     



       constructor(private contactService: ContactService) {

       }
        
        
        ngOnInit(): void {
       


        }


        public envoyerMessage(form:NgForm) {
            this.contactService.envoyerContactForm(form.value);
        }   


}
