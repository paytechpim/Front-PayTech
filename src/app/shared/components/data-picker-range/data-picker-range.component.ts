import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-picker-range',
  templateUrl: './data-picker-range.component.html',
  styleUrls: ['./data-picker-range.component.scss']
})
export class DataPickerRangeComponent {
  
  @Input() formGroupData: FormGroup = new FormGroup({
            inicio: new FormControl(""),
            fim: new FormControl(""),
          });

  @Input() control = new FormControl();

  @Input() appModel: Date;
  @Output() appModelChange = new EventEmitter<Date>();
  alterouModel(value: Date){
    this.appModelChange.emit(value);
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appDisabled: boolean = false;
  @Input() appRequired: boolean = false;
}
