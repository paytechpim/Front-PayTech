import { Component } from '@angular/core';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  opened = true;

  toggle() {
    this.opened = !this.opened;
  }
}
