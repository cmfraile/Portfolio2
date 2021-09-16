import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdatosdeinteresComponent } from './pdatosdeinteres.component';

describe('PdatosdeinteresComponent', () => {
  let component: PdatosdeinteresComponent;
  let fixture: ComponentFixture<PdatosdeinteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdatosdeinteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdatosdeinteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
