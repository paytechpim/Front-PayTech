import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOptionModel } from 'src/app/models/select-option.models';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent {
  @Input() control: FormControl;

  @Input() appModel: string = "";
  @Output() appModelChange = new EventEmitter<string>();
  alterouModel(value: string){
    this.appModelChange.emit(value);
  }

  @Output() appChange = new EventEmitter<any>();
  onChangeSelect(){
    this.appChange.emit();
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appListValue: SelectOptionModel[] = [];
  @Input() appDisabled: boolean = false;
  @Input() appShow: boolean = true;
  @Input() appVazio: boolean = false;

  constructor(){
  }
}
