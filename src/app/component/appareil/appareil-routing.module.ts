import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppareilComponent} from "./appareil.component";

const appRoutes: Routes = [
  { path: '', component: AppareilComponent },
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppareilRoutingModule { }
