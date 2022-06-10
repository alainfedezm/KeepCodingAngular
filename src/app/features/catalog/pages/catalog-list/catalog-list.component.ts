import { Component, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  comics: Comic[] = [];
  page: number = 1;
  totalPages:number = 1;
  actualFilters: { [term: string]: any } = {};
  limit: number = 20;
  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {}

  search(search: { [term: string]: any }) {
    console.warn('Búsqueda', search);
    this.actualFilters = search;
    this.catalogService.searchComic(search).subscribe((resp) => {
      this.comics = resp.results;
      //offset limite de comics para anadir a la pagina
      this.page = resp.offset/resp.limit + 1;
      this.totalPages = Math.ceil((resp.total/resp.limit));
      this.limit = resp.limit;

    });
  }

  pageChange(){
    this.actualFilters = {...this.actualFilters, offset: (this.page -1) * this.limit}; //20 es el limite
    this.search(this.actualFilters);
  }
}
