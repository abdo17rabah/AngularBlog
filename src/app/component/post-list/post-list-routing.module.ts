import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./post-list.component";
import {PostItemModule} from "../post-item/post-item.module";

const routes: Routes = [
  { path: '', component: PostListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PostItemModule,
  ],
  exports: [RouterModule]
})
export class PostListRoutingModule { }
