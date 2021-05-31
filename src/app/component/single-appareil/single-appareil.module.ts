import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleAppareilComponent} from "./single-appareil.component";
import {FormsModule} from "@angular/forms";
import {SingleAppareilRoutingModule} from "./single-appareil-routing.module";



@NgModule({
  declarations: [
    SingleAppareilComponent
  ],
  imports: [
    CommonModule,
    SingleAppareilRoutingModule,
    FormsModule,
  ],
  exports: [
    SingleAppareilComponent,
  ]
})
export class SingleAppareilModule { }
