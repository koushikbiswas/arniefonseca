import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomersAffiliateComponent } from './my-customers-affiliate.component';

describe('MyCustomersAffiliateComponent', () => {
  let component: MyCustomersAffiliateComponent;
  let fixture: ComponentFixture<MyCustomersAffiliateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomersAffiliateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomersAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
