import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  @Input() control = new FormControl('');

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

  getErrorMessage() {
    return this.control.hasError('email') ? 'E-mail não é valido' : '';
  }

}
