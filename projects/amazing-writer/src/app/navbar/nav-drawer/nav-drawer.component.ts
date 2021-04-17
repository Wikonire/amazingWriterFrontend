import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {INavRoute} from '../../shared/interfaces/inav-route';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {

  @Input() @HostBinding('class.drawer-open') isDrawerOpen: boolean;

  @Output() drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() navItems: INavRoute[];

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
  }

  onNavLinkClicked($event: MouseEvent, navItem: INavRoute): void {
    this.isDrawerOpen = false;
    this.setTitle(navItem.title);
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
