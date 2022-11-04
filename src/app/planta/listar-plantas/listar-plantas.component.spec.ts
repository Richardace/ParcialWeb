/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListarPlantasComponent } from './listar-plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../model/planta.model';

describe('ListarPlantasComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.name.firstName(),
        faker.name.firstName(),
        faker.name.firstName(),
        parseInt(faker.random.numeric()),
        faker.name.firstName(),
        faker.name.firstName()
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el nombre  de la pagina', () => {
    const tituloContenido = fixture.debugElement.nativeElement.querySelector('strong');
    expect(tituloContenido.textContent).toContain('Vivero El Otoño');
  });

  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });
});
