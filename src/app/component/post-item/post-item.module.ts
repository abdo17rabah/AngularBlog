import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostItemRoutingModule } from './post-item-routing.module';
import {PostItemComponent} from "./post-item.component";


@NgModule({
  declarations: [
    PostItemComponent
  ],
  imports: [
    CommonModule,
    PostItemRoutingModule
  ],
  exports: [
    PostItemComponent,
  ],
})
export class PostItemModule { }
