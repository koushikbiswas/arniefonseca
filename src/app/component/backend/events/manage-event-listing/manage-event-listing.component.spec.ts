import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSeminarListingComponent } from './manage-event-listing.component';

describe('ManageSeminarListingComponent', () => {
  let component: ManageSeminarListingComponent;
  let fixture: ComponentFixture<ManageSeminarListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSeminarListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSeminarListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
