import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditManageSpeakerEngagementComponent } from './add-edit-manage-speaker-engagement.component';

describe('AddEditManageSpeakerEngagementComponent', () => {
  let component: AddEditManageSpeakerEngagementComponent;
  let fixture: ComponentFixture<AddEditManageSpeakerEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditManageSpeakerEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditManageSpeakerEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
