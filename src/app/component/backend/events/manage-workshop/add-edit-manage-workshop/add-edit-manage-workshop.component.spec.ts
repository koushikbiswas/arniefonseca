import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditManageWorkshopComponent } from './add-edit-manage-workshop.component';

describe('AddEditManageWorkshopComponent', () => {
  let component: AddEditManageWorkshopComponent;
  let fixture: ComponentFixture<AddEditManageWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditManageWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditManageWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
