import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent {
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
}
