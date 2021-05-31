import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthGardService} from "../services/auth-gard.service";
import {HomeModule} from "../component/home/home.module";
import {BlogModule} from "../component/blog/blog.module";
import {AppareilViewModule} from "../component/appareil-view/appareil-view.module";
import {AuthModule} from "../component/auth/auth.module";
import {ErrorPageModule} from "../component/error-page/error-page.module";

const appRoutes: Routes = [
  { path: 'posts', canActivate:[AuthGardService], loadChildren: () =>import('../component/blog/blog.module')
      .then(m => m.BlogModule)},
  { path: 'devices', canActivate:[AuthGardService], loadChildren: () =>import('../component/appareil-view/appareil-view.module')
      .then(m => m.AppareilViewModule) },
  { path: 'devices/:id', canActivate:[AuthGardService], loadChildren: () =>import('../component/single-appareil/single-appareil.module')
      .then(m => m.SingleAppareilModule) },
  { path: '', canActivate:[AuthGardService], loadChildren: () =>import('../component/home/home.module')
      .then(m => m.HomeModule)},
  { path: 'auth', loadChildren: () =>import('../component/auth/auth.module')
      .then(m => m.AuthModule) },
  { path: '404', loadChildren: () =>import('../component/error-page/error-page.module')
      .then(m => m.ErrorPageModule) },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
    BlogModule,
    AppareilViewModule,
    AuthModule,
    ErrorPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
