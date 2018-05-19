import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFieldSchemaComponent } from './create-field-schema.component';

describe('CreateFieldSchemaComponent', () => {
  let component: CreateFieldSchemaComponent;
  let fixture: ComponentFixture<CreateFieldSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFieldSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFieldSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
