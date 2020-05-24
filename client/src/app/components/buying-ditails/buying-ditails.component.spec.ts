import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingDitailsComponent } from './buying-ditails.component';

describe('BuyingDitailsComponent', () => {
  let component: BuyingDitailsComponent;
  let fixture: ComponentFixture<BuyingDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
