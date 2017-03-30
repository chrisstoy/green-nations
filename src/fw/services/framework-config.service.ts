import { Injectable } from '@angular/core';

export interface IIconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface IFrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IIconFiles>;
}

@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IIconFiles>();

  configure(settings: IFrameworkConfigSettings): void {
    Object.assign(this, settings);
  }

}
