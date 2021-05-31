import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleAppareilComponent} from "./single-appareil.component";

const appRoutes: Routes = [
  { path: '', component: SingleAppareilComponent },
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class SingleAppareilRoutingModule { }
