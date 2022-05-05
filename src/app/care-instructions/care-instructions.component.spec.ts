import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareInstructionsComponent } from './care-instructions.component';

describe('CareInstructionsComponent', () => {
  let component: CareInstructionsComponent;
  let fixture: ComponentFixture<CareInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
