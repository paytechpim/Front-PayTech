import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent {
  @Input() control = new FormControl();
  
  @Input() appModel: string = "";
  @Output() appModelChange = new EventEmitter<string>();
  alterouModel(value: string){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appDisabled: boolean = false;
  @Input() appRequired: boolean = false;
  @Input() appMaxLength: string = "255";

  constructor() { }

}
