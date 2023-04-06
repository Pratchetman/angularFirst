import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosInterface } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductosInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos()

   }

  private cargarProductos(){
    this.http.get("https://angular-html-1d206-default-rtdb.firebaseio.com/productos_idx.json")
    .subscribe( (resp: any) => {
      console.log(resp)
      this.productos = resp;
    

      setTimeout(()=>{
        this.cargando = false
      }, 1000);
    });
  }
}
