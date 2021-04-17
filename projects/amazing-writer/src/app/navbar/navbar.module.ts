import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {NavDrawerModule} from './nav-drawer/nav-drawer.module';
import {ScrollColorDirective} from '../shared/directives/scroll-color/scroll-color.directive';


@NgModule({
  declarations: [NavbarComponent, ScrollColorDirective],
  imports: [
    CommonModule,
    NavDrawerModule,

  ],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
