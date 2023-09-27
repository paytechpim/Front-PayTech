import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
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
