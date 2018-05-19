import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFieldUiComponent } from './create-field-ui.component';

describe('CreateFieldUiComponent', () => {
  let component: CreateFieldUiComponent;
  let fixture: ComponentFixture<CreateFieldUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFieldUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFieldUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
