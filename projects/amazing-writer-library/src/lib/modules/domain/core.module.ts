import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AmazingWriterLibraryComponent} from '../../amazing-writer-library.component';
import {SelectModule} from '../../components/select/select.module';
import {BrowserModule} from '@angular/platform-browser';
import {AwSelectComponent} from '../../components/select/aw-select.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SelectModule],
  exports: [AmazingWriterLibraryComponent, AwSelectComponent],
  declarations: [AmazingWriterLibraryComponent]
})
export class CoreModule {
}

