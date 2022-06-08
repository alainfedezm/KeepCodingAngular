import { Component } from '@angular/core';
import {Model} from '@core/interfaces/model.interface'
import {Image} from '@core/interfaces/image.interface'
import { MenuElement } from '@core/interfaces/menu-element.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'claro';
  menuElements: MenuElement[] = [
    {
      title:'Catalogo',
      path:'catalog',
    },
    {
      title:'Coleccion',
      path: 'collection',
    },
  ]

  saludar(){
    console.log("holaaaa");
  }
}
