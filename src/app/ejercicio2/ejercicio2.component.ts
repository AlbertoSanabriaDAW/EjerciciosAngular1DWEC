import { Component, OnDestroy } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnDestroy {
  horaActual: Date = new Date();
  intervalo: any;

  constructor() {
    this.iniciarReloj();
  }

  iniciarReloj() {
    this.intervalo = setInterval(() => {
      this.horaActual = new Date();
    }, 1000);
  }

  detenerReloj() {
    clearInterval(this.intervalo);
  }

  ngOnDestroy() {
    this.detenerReloj();
  }
}
