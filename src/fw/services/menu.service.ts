import { Injectable } from '@angular/core';
import { IMenuItem } from '../menus/menu-item.interface';

@Injectable()
export class MenuService {

  items: Array<IMenuItem>;
  isVertical = false;
  showingLeftSideMenu = false;

  toggleLeftSideMenu(): void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }

  toggleOrientation(): void {
    this.isVertical = !this.isVertical;
  }

}
