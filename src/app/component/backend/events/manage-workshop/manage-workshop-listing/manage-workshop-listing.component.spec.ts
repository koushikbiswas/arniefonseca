import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkshopListingComponent } from './manage-workshop-listing.component';

describe('ManageWorkshopListingComponent', () => {
  let component: ManageWorkshopListingComponent;
  let fixture: ComponentFixture<ManageWorkshopListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWorkshopListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkshopListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
