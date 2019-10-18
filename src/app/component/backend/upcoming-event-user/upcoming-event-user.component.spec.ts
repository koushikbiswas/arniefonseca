import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventUserComponent } from './upcoming-event-user.component';

describe('UpcomingEventUserComponent', () => {
  let component: UpcomingEventUserComponent;
  let fixture: ComponentFixture<UpcomingEventUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
