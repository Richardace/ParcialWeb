import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from './planta.component';
import { ListarPlantasComponent } from './listar-plantas/listar-plantas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarPlantasComponent],
  declarations: [PlantaComponent, ListarPlantasComponent]
})
export class PlantaModule { }
