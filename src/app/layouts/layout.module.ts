import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../module.import.guard';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
    FooterComponent,
    ControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
    FooterComponent,
    ControlComponent
  ]
})
export class LayoutModule {
  constructor( @Optional() @SkipSelf() parentModule: LayoutModule) {
    throwIfAlreadyLoaded(parentModule, 'LayoutModule');
  }
}
