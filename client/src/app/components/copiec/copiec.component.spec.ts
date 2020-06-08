import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiecComponent } from './copiec.component';

describe('CopiecComponent', () => {
  let component: CopiecComponent;
  let fixture: ComponentFixture<CopiecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
