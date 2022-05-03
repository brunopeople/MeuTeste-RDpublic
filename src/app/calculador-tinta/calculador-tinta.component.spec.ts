import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadorTintaComponent } from './calculador-tinta.component';

describe('CalculadorTintaComponent', () => {
  let component: CalculadorTintaComponent;
  let fixture: ComponentFixture<CalculadorTintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadorTintaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadorTintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
