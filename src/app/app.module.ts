import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './component/blog/blog.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './component/home/home.component';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component';
import { AppareilComponent } from './component/appareil/appareil.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'posts', component: BlogComponent },
  { path: 'devices', component: AppareilViewComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostListComponent,
    BlogComponent,
    HomeComponent,
    AppareilViewComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
