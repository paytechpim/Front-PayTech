import { Injectable } from '@angular/core';
import { MENU_BAR } from '../@support/constants/menubar.const';
import { MenuBar } from '../@support/interfaces/menubar.interface';

@Injectable()
export class MenubarService {
  private menubar = MENU_BAR;

  get menu(): MenuBar {
    return this.menubar;
  }
}
