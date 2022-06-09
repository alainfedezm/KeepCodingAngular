import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './pages/catalog-list/catalog-list.component';

const routes: Routes = [
  {
    path:'',
    component: CatalogComponent,
    children:[
      {
        path: 'list',
        component:CatalogListComponent,
      },

      {//Ruta de redireccion
        path: '',
        redirectTo:'list',
        pathMatch: 'full', //Para asegurar que la ruta es la correcta (coincidencia 100%)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
