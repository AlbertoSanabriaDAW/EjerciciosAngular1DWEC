import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component {
  comentario: string = '';
  @Output() comentarioEnviado = new EventEmitter<string>();

  enviarComentario() {
    if (this.comentario.trim()) {
      this.comentarioEnviado.emit(this.comentario);
      this.comentario = '';
    }
  }
}
