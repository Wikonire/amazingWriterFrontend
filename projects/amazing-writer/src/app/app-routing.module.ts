import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {navbarRoutesConfig} from './navbar/navbarRoutesConfig';

const routes: Routes = [
    ...navbarRoutesConfig,
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
