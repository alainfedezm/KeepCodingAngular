import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss']
})
export class CatalogFormComponent implements OnInit {


  searchForm: FormGroup = new FormGroup({
    titleStartsWith: new FormControl<string | null>(null, [Validators.minLength(4)]),
    startYear: new FormControl<number | null>(null, [
      Validators.min(1900),
      Validators.max(2022),
    ]),
  });

  get titleStartsWith() {
    return this.searchForm.get('titleStartsWith');
  }
  get startYear() {
    return this.searchForm.get('startYear');
  }

  @Output()
  searchChange: EventEmitter<{ [term: string]: any }> = new EventEmitter<{
    [term: string]: any;
  }>();
  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.searchForm.valid) {
      const filter = Object.fromEntries(Object.entries(this.searchForm.value).filter(([i,v]) => v != null));
      this.searchChange.emit(filter);
    }
  }
}
