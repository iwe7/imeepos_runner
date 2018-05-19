import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPickerComponent } from './link-picker.component';

describe('LinkPickerComponent', () => {
  let component: LinkPickerComponent;
  let fixture: ComponentFixture<LinkPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
