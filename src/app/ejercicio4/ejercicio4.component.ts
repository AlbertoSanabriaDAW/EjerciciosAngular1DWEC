import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component {
  tiempo: number = 0;
  intervalo: any;

  iniciarTemporizador() {
    this.intervalo = setInterval(() => {
      if (this.tiempo > 0) {
        this.tiempo--;
      } else {
        clearInterval(this.intervalo);
      }
    }, 1000);
  }

  detenerTemporizador() {
    clearInterval(this.intervalo);
  }
}
