import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import {PostListComponent} from "./post-list.component";
import {PostItemModule} from "../post-item/post-item.module";


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    PostItemModule
  ],
  exports: [
    PostListComponent
  ],
})
export class PostListModule { }
