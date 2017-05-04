

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { FormsModule } from "@angular/forms";
import { ContactService } from "../../services/contact.service";




@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ContactComponent],
  exports:[ContactComponent],
  providers:[ContactService]
})
export class ContactModule {}
