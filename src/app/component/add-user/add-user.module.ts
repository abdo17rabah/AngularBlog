import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddUserComponent
  ],
})
export class AddUserModule { }
