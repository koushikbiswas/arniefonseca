import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditManageSeminarComponent } from './add-edit-manage-seminar.component';

describe('AddEditManageSeminarComponent', () => {
  let component: AddEditManageSeminarComponent;
  let fixture: ComponentFixture<AddEditManageSeminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditManageSeminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditManageSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
