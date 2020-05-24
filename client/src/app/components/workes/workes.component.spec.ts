import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkesComponent } from './workes.component';

describe('WorkesComponent', () => {
  let component: WorkesComponent;
  let fixture: ComponentFixture<WorkesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
