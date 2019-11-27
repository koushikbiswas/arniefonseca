import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSendersComponent } from './add-edit-senders.component';

describe('AddEditSendersComponent', () => {
  let component: AddEditSendersComponent;
  let fixture: ComponentFixture<AddEditSendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
