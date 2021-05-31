import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppareilViewComponent} from "./appareil-view.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SingleAppareilModule} from "../single-appareil/single-appareil.module";
import {AppareilModule} from "../appareil/appareil.module";
import {AppareilViewRoutingModule} from "./appareil-view-routing.module";

@NgModule({
  declarations: [
    AppareilViewComponent,
  ],
  imports: [
    CommonModule,
    AppareilViewRoutingModule,
    FormsModule,
    SingleAppareilModule,
    AppareilModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppareilViewModule { }
