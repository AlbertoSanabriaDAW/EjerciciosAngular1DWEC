import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio5Component } from './ejercicio5.component';
import { FormsModule } from '@angular/forms';

describe('Ejercicio5Component', () => {
  let component: Ejercicio5Component;
  let fixture: ComponentFixture<Ejercicio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio5Component, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Ejercicio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
