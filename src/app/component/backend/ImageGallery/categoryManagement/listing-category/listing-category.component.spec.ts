import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCategoryComponent } from './listing-category.component';

describe('ListingCategoryComponent', () => {
  let component: ListingCategoryComponent;
  let fixture: ComponentFixture<ListingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
