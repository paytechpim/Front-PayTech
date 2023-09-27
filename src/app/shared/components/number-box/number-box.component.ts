import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css']
})
export class NumberBoxComponent{
  @Input() control = new FormControl();

  @Input() appModel: number;
  @Output() appModelChange = new EventEmitter<number>();
  alterouModel(value: number){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appDisabled: boolean = false;

  constructor() { }

}
