import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnostiqueComponent } from './diagnostique.component';

describe('FormulaireComponent', () => {
  let component: DiagnostiqueComponent;
  let fixture: ComponentFixture<DiagnostiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnostiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnostiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
