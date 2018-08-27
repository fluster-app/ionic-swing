import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SwingComponent} from './components/swing.component';
import {SwingStackComponent} from './components/swing-stack.component';

export * from './components/swing.component';
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
    SwingComponent,
    SwingStackComponent
  ],
  exports: [
    SwingComponent,
    SwingStackComponent
  ]
})
export class IonicSwingModule {
}
