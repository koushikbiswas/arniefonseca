import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSpeakerEngagementListingComponent } from './manage-speaker-engagement-listing.component';

describe('ManageSpeakerEngagementListingComponent', () => {
  let component: ManageSpeakerEngagementListingComponent;
  let fixture: ComponentFixture<ManageSpeakerEngagementListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSpeakerEngagementListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSpeakerEngagementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
