import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AmazingWriterLibraryComponent} from '../amazing-writer-library.component';

describe('AmazingWriterLibraryComponent', () => {
  let component: AmazingWriterLibraryComponent;
  let fixture: ComponentFixture<AmazingWriterLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmazingWriterLibraryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingWriterLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
