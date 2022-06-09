import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Comic } from '@core/models/comic.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {


  @Input()
  searchSubmission!: FormGroup;


  comics: Comic[] = [
    new Comic({
      title: 'Dinastía de M',
      description:
        'Ad exercitation non esse enim ea officia quis minim do do amet exercitation officia velit.',
      images: [{ path: 'https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg?w=2000', extension: '' }],
    }),
  ];
  page: number =1;
  constructor() { }

  ngOnInit(): void {
  }

  fetchApi(){
    console.log("hola")
  }

}
