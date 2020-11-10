import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIDComponent } from './chat-id.component';

describe('ChatIDComponent', () => {
  let component: ChatIDComponent;
  let fixture: ComponentFixture<ChatIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
