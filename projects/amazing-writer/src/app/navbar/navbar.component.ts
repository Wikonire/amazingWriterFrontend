import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
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

  constructor(private titleService: Title, private activeRoute: ActivatedRoute) { }

  public title: string;

 // @ViewChild('navbar') navElement: HTMLElement;

  menuItems: INavRoute[] = navbarMenuConfig;
  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private setTitle(): void {
    if (this.title) {
      this.titleService.getTitle();
    }
  }

  ngOnInit(): void {
    this.isDrawerOpen = false;
    this.setTitle();
  }
  toggleNavDrawer(isDrawerOpen: boolean): void {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);

  }

}
