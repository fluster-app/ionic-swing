import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SwingCardComponent} from './components/swing-card.component';
import {SwingStackComponent} from './components/swing-stack.component';

export * from './components/swing-card.component';
export * from './components/swing-stack.component';

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
    SwingCardComponent,
    SwingStackComponent
  ],
  exports: [
    SwingCardComponent,
    SwingStackComponent
  ]
})
export class IonicSwingModule {
}
