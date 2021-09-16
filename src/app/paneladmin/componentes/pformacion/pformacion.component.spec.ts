import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PformacionComponent } from './pformacion.component';

describe('PformacionComponent', () => {
  let component: PformacionComponent;
  let fixture: ComponentFixture<PformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
