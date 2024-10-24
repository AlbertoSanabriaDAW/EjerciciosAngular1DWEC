import { Component } from '@angular/core';

interface Item {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio8.component.html',
  styleUrls: ['./ejercicio8.component.css']
})
export class Ejercicio8Component {
  items: Item[] = [
    { nombre: 'Artículo 1', precio: 9.99, cantidad: 0 },
    { nombre: 'Artículo 2', precio: 14.99, cantidad: 0 },
    { nombre: 'Artículo 3', precio: 4.99, cantidad: 0 },
  ];

  aumentarCantidad(item: Item) {
    item.cantidad++;
  }

  disminuirCantidad(item: Item) {
    if (item.cantidad > 0) {
      item.cantidad--;
    }
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }
}
