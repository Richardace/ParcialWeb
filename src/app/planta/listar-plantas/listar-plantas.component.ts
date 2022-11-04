import { Component, OnInit } from '@angular/core';
import { Planta } from '../model/planta.model';
import { PlantaService } from '../service/planta.service';

@Component({
  selector: 'app-listar-plantas',
  templateUrl: './listar-plantas.component.html',
  styleUrls: ['./listar-plantas.component.css']
})
export class ListarPlantasComponent implements OnInit {

  plantas: Array<Planta> = [];
  public tipos = new Map<string, any>();

  constructor(private service: PlantaService) { }

  ngOnInit() {
    this.obtenerPlantas();
  }

  protected obtenerPlantas(){
    this.service.getPlantas().subscribe((respuesta) => {
      this.plantas = respuesta;
      this.plantasPorAmbiente(this.plantas)
    })
  }

  protected plantasPorAmbiente(plantas: Array<Planta>){
    for (let i = 0; i < plantas.length; i++) {
      if (this.tipos.get(plantas[i].tipo) == undefined) {
        this.tipos.set(plantas[i].tipo, 1);
      }
      else {
        var tiposCantidad: number = 0;
        tiposCantidad = parseInt(this.tipos.get(plantas[i].tipo))
        tiposCantidad = tiposCantidad + 1;
        this.tipos.set(plantas[i].tipo, tiposCantidad);

      }
    }
  }
}
