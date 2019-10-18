import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSpeakerEngagementsComponent } from './manage-speaker-engagements.component';

describe('ManageSpeakerEngagementsComponent', () => {
  let component: ManageSpeakerEngagementsComponent;
  let fixture: ComponentFixture<ManageSpeakerEngagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSpeakerEngagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSpeakerEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
