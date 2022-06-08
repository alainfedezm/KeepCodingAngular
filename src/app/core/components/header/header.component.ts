import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MenuElement } from '@core/interfaces/menu-element.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Oneway
  //Decorador input para asociarlo a una variable de entrada (de padre a hijo) header.component -> app.component
  @Input()
  menuElements: MenuElement[] = [];

  @Output()
  rightElementClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  //twoway
  @Input()
  tema:string = 'claro';
  @Output()
  temaChange : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log("oninit");
  }

  rightElementClick(){
    this.temaChange.emit('oscuro');
    this.rightElementClicked.emit(true);
  }

}
