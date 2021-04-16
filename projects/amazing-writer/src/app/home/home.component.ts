import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public title = 'HOME';
  public select = new Promise<string[]>((resolve, reject) => {
    resolve(['option1', 'option1', 'option1', 'option1', 'option1']);
    reject('cannot find Options');
  });
  constructor() { }

  ngOnInit(): void {
  }

}
