import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidsComponent } from './valids.component';

describe('ValidsComponent', () => {
  let component: ValidsComponent;
  let fixture: ComponentFixture<ValidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
