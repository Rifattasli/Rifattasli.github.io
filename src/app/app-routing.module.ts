import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 {
  path: 'auth',
  loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule)
 },
 {
  path: 'app',
  loadChildren: () => import('../app/modules/layout/layout.module').then(m => m.LayoutModule)
 }, 
 {
  path: '',
  redirectTo: 'auth/sign-in',
  pathMatch: 'full'
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }