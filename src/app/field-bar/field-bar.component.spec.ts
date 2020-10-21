import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBarComponent } from './field-bar.component';

describe('FieldBarComponent', () => {
  let component: FieldBarComponent;
  let fixture: ComponentFixture<FieldBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
