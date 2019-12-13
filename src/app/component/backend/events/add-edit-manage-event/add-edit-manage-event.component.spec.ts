import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditManageEventComponent } from './add-edit-manage-event.component';

describe('AddEditManageEventComponent', () => {
  let component: AddEditManageEventComponent;
  let fixture: ComponentFixture<AddEditManageEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditManageEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditManageEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
