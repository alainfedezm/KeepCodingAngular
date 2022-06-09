import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.sass']
})
export class CatalogFormComponent implements OnInit {


  @Output()
  searchSubmission : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  searchForm: FormGroup = new FormGroup({
    name: new FormControl<String>('', [Validators.minLength(4),]),
    year: new FormControl<number>(2022 ,[Validators.min(1900), Validators.max(2022),]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if(this.searchForm.valid){
      this.searchSubmission.emit(this.searchForm)
    }
  }
}
