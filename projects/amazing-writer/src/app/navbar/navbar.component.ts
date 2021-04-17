import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {INavRoute} from '../shared/interfaces/inav-route';
import {navbarMenuConfig} from './navbarRoutesConfig';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title: string;
  menuItems: INavRoute[] = navbarMenuConfig;

  // @ViewChild('navbar') navElement: HTMLElement;
  isDrawerOpen: boolean;
  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private titleService: Title, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isDrawerOpen = false;
    this.setTitle();
  }

  toggleNavDrawer(isDrawerOpen: boolean): void {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);

  }

  private setTitle(): void {
    if (this.title) {
      this.titleService.getTitle();
    }
  }

}
