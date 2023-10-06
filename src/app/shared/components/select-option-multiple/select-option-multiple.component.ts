import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-option-multiple',
  templateUrl: './select-option-multiple.component.html',
  styleUrls: ['./select-option-multiple.component.scss']
})
export class SelectOptionMultipleComponent {

  @Input() control = new FormControl();
  
  @Input() appModel: string[] = [""];
  @Output() appModelChange = new EventEmitter<string[]>();
  alterouModel(value: string[]){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appListValue: string[] = [""];
  @Input() appDisabled: boolean = false;

  toppings = new FormControl('');
}
