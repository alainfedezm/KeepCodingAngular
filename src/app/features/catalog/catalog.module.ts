import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './pages/catalog-list/catalog-list.component';
import { SharedModule } from '@shared/shared.module';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogListComponent,
    CatalogItemComponent,
    CatalogFormComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CatalogModule { }
