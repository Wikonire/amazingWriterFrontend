import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavDrawerModule} from './navbar/nav-drawer/nav-drawer.module';
import {NavbarModule} from './navbar/navbar.module';
import {SettingsComponent} from './settings/settings.component';
import {ProfileComponent} from './profile/profile.component';
import {CoreModule} from '../../../amazing-writer-library/src/lib/modules/domain/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavDrawerModule,
    NavbarModule,
    CoreModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
