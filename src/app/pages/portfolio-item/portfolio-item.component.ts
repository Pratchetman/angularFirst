import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent {

  producto: any;
  id: any;

  

  constructor(private route: ActivatedRoute, public productoService: ProductosService){ }

    ngOnInit() {
      this.route.params.subscribe(parametros=>{
        // console.log(parametros["id"]);

        this.productoService.getProducto(parametros["id"])
        .subscribe( (producto: any) => {
          
          this.producto = producto;
          this.id = parametros["id"]
        });

      })
      
      
    }

 
}
