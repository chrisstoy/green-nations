import { IMenuItem } from '../fw/menus/menu-item.interface';

export let initialMenuItems: Array<IMenuItem> = [
  {
    text: 'Dashboard',
    icon: 'glyphicon-dashboard',
    route: 'authenticated/dashboard',
    submenu: null,
  },
  {
    text: 'Countries',
    icon: 'glyphicon-flag',
    route: null,
    submenu: [
      {
        text: 'Select',
        icon: 'glyphicon-expand',
        route: null,
        submenu: [
          {
            text: 'USA',
            icon: 'glyphicon-flag',
            route: 'authenticated/country-detail/USA',
            submenu: null,
          },
          {
            text: 'India',
            icon: 'glyphicon-flag',
            route: 'authenticated/country-detail/India',
            submenu: null,
          },
          {
            text: 'Switzerland',
            icon: 'glyphicon-flag',
            route: 'authenticated/country-detail/Switzerland',
            submenu: null,
          },
        ]
      },
      {
        text: 'Top 3',
        icon: 'glyphicon-flag',
        route: 'authenticated/country-list/3',
        submenu: null,
      },
      {
        text: 'Top 5',
        icon: 'glyphicon-flag',
        route: 'authenticated/country-list/5',
        submenu: null,
      },
      {
        text: 'All',
        icon: 'glyphicon-flag',
        route: 'authenticated/country-list/0',
        submenu: null,
      },
    ],
  },
  {
    text: 'Maintenance',
    icon: 'glyphicon-wrench',
    route: null,
    submenu: [
      {
        text: 'Country List',
        icon: 'glyphicon-th-list',
        route: 'authenticated/country-maint',
        submenu: null,
      },
      {
        text: 'Settings',
        icon: 'glyphicon-cog',
        route: 'authenticated/settings',
        submenu: null,
      },
    ],
  },
];
