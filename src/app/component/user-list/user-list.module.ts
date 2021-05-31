import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import {UserListComponent} from "./user-list.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserListComponent,
  ]
})
export class UserListModule { }
