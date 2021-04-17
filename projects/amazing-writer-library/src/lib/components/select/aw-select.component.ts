import {Component, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {IListOptionContext, IOptionList, IOptions} from './aw-select.directive';
import {Observable} from 'rxjs';

@Component({
  selector: 'aw-select [limit] [options]',
  styleUrls: ['./aw-select.component.scss'],
  templateUrl: './aw-select.component.html',
})
export class AwSelectComponent<IOptionListType> implements OnInit {
  public template: TemplateRef<IListOptionContext<IOptionListType>>;

  @Input() public data: IOptionList|IOptions|string[];

  @Input()
  size?: number;

  ngOnInit(): void {
   console.log(this.data);
   console.log(typeof this.data);
   console.log(typeof this.data)
  }

  setItemTemplate(templateRef: TemplateRef<IListOptionContext<IOptionListType>>): void {
    this.template = templateRef;
  }
}
