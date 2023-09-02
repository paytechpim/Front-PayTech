import { Component, OnInit } from '@angular/core';

import { MenuBar } from '../../@support/interfaces/menubar.interface';
import { MenubarService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menubar?: MenuBar;

  constructor(private menubarService: MenubarService) {}

  ngOnInit() {
    this.menubar = this.menubarService.menu;
  }
}
