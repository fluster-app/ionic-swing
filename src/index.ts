import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SwingStackComponent} from './angular2-swing/swing-stack-component';
import {SwingCardComponent} from './angular2-swing/swing-card-component';

export * from './angular2-swing/swing-stack-component';
export * from './angular2-swing/swing-card-component';

export * from './angular2-swing/swing';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SwingStackComponent,
    SwingCardComponent
  ],
  exports: [
    SwingStackComponent,
    SwingCardComponent
  ]
})
export class IonicSwingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicSwingModule
    };
  }
}
