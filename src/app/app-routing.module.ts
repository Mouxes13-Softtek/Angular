import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { UnicornsComponent } from "src/app/entities/unicorns/unicorns.component"

const routes: Routes = [

{

  path: "unicorns",

  loadChildren: () => import('./entities/unicorns/unicorns.module').then(m => m.UnicornsModule)



},

{

  path: "login",

  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)



},

{

  path: "welcome",

  loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)



},

{

  path: "",

  redirectTo: 'welcome',

  pathMatch: 'full'

},

{

  path: "**",

  redirectTo: 'login',

 

}



];



@NgModule({

  imports: [

    RouterModule.forRoot(routes, {

      scrollPositionRestoration: 'enabled'

    })],

  exports: [RouterModule]

})

export class AppRoutingModule { }