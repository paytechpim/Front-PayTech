import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  @Input() appText: string = "";
  @Input() appTamanho: string = "width-medio";
  @Input() appCor: string = "sales-laranja";
  @Input() appPesquisa: boolean = false;
  @Input() appPesquisando: boolean = false;
  @Input() appDisabled: boolean = false;

  constructor() { }

}
