import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendindDitilsComponent } from './lendind-ditils.component';

describe('LendindDitilsComponent', () => {
  let component: LendindDitilsComponent;
  let fixture: ComponentFixture<LendindDitilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendindDitilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendindDitilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
