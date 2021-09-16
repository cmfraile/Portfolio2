import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexperienciaComponent } from './pexperiencia.component';

describe('PexperienciaComponent', () => {
  let component: PexperienciaComponent;
  let fixture: ComponentFixture<PexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PexperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
