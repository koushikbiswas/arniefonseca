import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventListingComponent } from './manage-event-listing.component';

describe('ManageEventListingComponent', () => {
  let component: ManageEventListingComponent;
  let fixture: ComponentFixture<ManageEventListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
