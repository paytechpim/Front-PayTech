import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  @Input() control = new FormControl();
  
  selectedColor: string = "";
  @Input() appModel: string;
  @Output() appModelChange = new EventEmitter<string>();
  alterouModel(value: string){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appDisabled: boolean = false;
  @Input() appShow: boolean = true;
  @Input() appVazio: boolean = false;
  
  selectImage(cor: string){
    this.selectedColor = cor;
    this.control.setValue(cor);
    this.alterouModel(cor)  ;
  }
}
