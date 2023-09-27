import { Component, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-box-percentage',
  templateUrl: './number-box-percentage.component.html',
  styleUrls: ['./number-box-percentage.component.scss']
})
export class NumberBoxPercentageComponent {
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
}
