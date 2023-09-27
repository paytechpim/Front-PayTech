import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-box-password',
  templateUrl: './text-box-password.component.html',
  styleUrls: ['./text-box-password.component.css']
})
export class TextBoxPasswordComponent {
  @Input() control = new FormControl('');

  @Input() appModel: string = "";
  @Output() appModelChange = new EventEmitter<string>();
  alterouModel(value: string){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appDisabled: boolean = false;

  hide = true;

  constructor() { }

}
