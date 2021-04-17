import {Directive, ElementRef, Host, Input, Renderer2, SkipSelf, TemplateRef, ViewContainerRef} from '@angular/core';
import {AwSelectComponent} from './aw-select.component';
import {Observable} from 'rxjs';


export interface IOptionList {
  groups: {
    label: string;
    options: string[];
  }[];
}
export interface IOptions {
  options: {
    name: string,
    value: string,
    icon?: string
  }[];
}
export interface IOptionListType {
  types: Observable<IOptionList|IOptions|string[]>[];
}

export interface IListOptionContext<IOptionListType> {
  $implicit: IOptionListType;
  index: number;
}

@Directive({
  selector: '[aw-select]'
})
export class AwSelectDirective<IOptionListType> {

  @Input() public useTypeFrom: IOptionListType;

  constructor( @Host() @SkipSelf() private parent: AwSelectComponent<IOptionListType>,
               private templateRef: TemplateRef<IListOptionContext<IOptionListType>>) {
    this.parent.setItemTemplate(this.templateRef);
  }
}
