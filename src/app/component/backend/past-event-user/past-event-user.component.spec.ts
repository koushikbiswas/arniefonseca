import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEventUserComponent } from './past-event-user.component';

describe('PastEventUserComponent', () => {
  let component: PastEventUserComponent;
  let fixture: ComponentFixture<PastEventUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastEventUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEventUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
