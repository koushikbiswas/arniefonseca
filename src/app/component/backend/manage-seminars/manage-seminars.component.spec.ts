import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSeminarsComponent } from './manage-seminars.component';

describe('ManageSeminarsComponent', () => {
  let component: ManageSeminarsComponent;
  let fixture: ComponentFixture<ManageSeminarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSeminarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
