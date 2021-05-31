import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppareilComponent} from "./appareil.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppareilRoutingModule} from "./appareil-routing.module";


@NgModule({
  declarations: [AppareilComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppareilRoutingModule,
  ],
  exports: [RouterModule, AppareilComponent]
})
export class AppareilModule { }
