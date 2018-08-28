import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SwingCardDirective} from './directives/swing-card.directive';
import {SwingStackDirective} from './directives/swing-stack.directive';

export * from './directives/swing-card.directive';
export * from './directives/swing-stack.directive';

export * from './interfaces/swing';

export * from './swing/card';
export * from './swing/direction';
export * from './swing/stack';
export * from './swing/utilities';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SwingCardDirective,
    SwingStackDirective
  ],
  exports: [
    SwingCardDirective,
    SwingStackDirective
  ]
})
export class IonicSwingModule {
}
