import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoEquipo } from './interfaces/info-equipo.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  constructor(public _infoPaginaService: InfoPaginaService){}
  
}
