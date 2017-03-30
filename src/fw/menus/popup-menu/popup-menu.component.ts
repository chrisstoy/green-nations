import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { IMenuItem } from '../menu-item.interface';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu: Array<IMenuItem>;

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
  }

}
