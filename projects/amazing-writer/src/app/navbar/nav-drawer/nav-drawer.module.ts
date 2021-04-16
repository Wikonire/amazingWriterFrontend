import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavDrawerComponent} from './nav-drawer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavDrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavDrawerComponent
  ]
})
export class NavDrawerModule { }
