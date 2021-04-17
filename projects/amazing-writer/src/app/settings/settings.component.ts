import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public numbers = [];

  constructor() {
  }

  ngOnInit(): void {

    for (let i = 1; i <= 40; i++) {
      this.numbers.push(i);
    }
  }

}
