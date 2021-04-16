import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ProfileComponent} from '../profile/profile.component';
import {SettingsComponent} from '../settings/settings.component';
import {INavRoute} from '../shared/interfaces/inav-route';

export const navbarRoutesConfig: Routes = [
  { path: 'profile', component: ProfileComponent, data: {title: 'Profile'}},
  { path: 'settings', component: SettingsComponent, data: {title: 'Settings'}},
  { path: '**', component: HomeComponent, data: {title: 'Home'}},
];

export const navbarMenuConfig: INavRoute[] = [
  {title: 'Home', href: 'home', description: 'Here is your home sweet home'},
  {title: 'Profile', href: 'profile', description: 'Here is your personal landing page'},
  {title: 'Settings', href: 'settings', description: 'Here could you switch the buttons'},
];

