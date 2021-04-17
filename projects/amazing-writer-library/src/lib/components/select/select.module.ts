import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AwSelectComponent} from './aw-select.component';
import {FormsModule} from '@angular/forms';
import {AwSelectDirective} from './aw-select.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AwSelectComponent, AwSelectDirective],
  declarations: [AwSelectComponent, AwSelectDirective]
})
export class SelectModule {
}
