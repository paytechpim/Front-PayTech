import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-alert',
  templateUrl: './label-alert.component.html',
  styleUrls: ['./label-alert.component.css'],
})
export class LabelComponent implements OnInit {

  @Input() appLabel: string;
  @Input() appTamanho: string = "width-medio";
  @Input() appDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
