import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosInterface } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: ProductosInterface[] = [];
  productosFiltrado: ProductosInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          'https://angular-html-1d206-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: any) => {
          this.productos = resp;
          this.cargando = false;
          resolve(true);
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://angular-html-1d206-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }

    console.log(this.productosFiltrado);
  }

  
  private filtrarProductos(termino: string) {

    console.log(this.productos);
    this.productosFiltrado = [];

    this.productos.forEach( prod  => {
      if (prod.categoria!.indexOf(termino) >= 0 || prod.titulo!.toLocaleLowerCase().indexOf(termino.toLocaleLowerCase()) >= 0) {
        this.productosFiltrado.push(prod);

      }
    });
  }
}
