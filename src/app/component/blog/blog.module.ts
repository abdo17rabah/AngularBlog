import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./blog.component";
import {BlogRoutingModule} from "./blog-routing.module";
import {PostListModule} from "../post-list/post-list.module";



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    PostListModule,
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
