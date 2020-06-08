import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionTypesComponent } from './subcription-types.component';

describe('SubcriptionTypesComponent', () => {
  let component: SubcriptionTypesComponent;
  let fixture: ComponentFixture<SubcriptionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcriptionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
