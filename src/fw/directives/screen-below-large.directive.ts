import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ScreenService } from '../services/screen.service';

@Directive({ selector: '[screenBelowLarge]' })
export class ScreenBelowLarge implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>,
    private screenService: ScreenService,
  ) {
    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  @Input()
  set screenBelowLarge(condition) {
    // ignore the passed condition and set it based on screen resize
    condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      // on a below-large screen, so inject element into DOM
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      // on a large screen, so clear element from the DOM
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  onResize() {
    // trigger the setter
    this.screenBelowLarge = false;
  }
}
