import {
  Input,
  AfterContentInit, EventEmitter, Output, Directive
} from '@angular/core';

import {SwingCardDirective} from './swing-card.directive';

import {StackConfig, ThrowEvent, DragEvent} from '../interfaces/swing';

import Stack from '../swing/stack';

@Directive({
  selector: '[swingStack]'
})
export class SwingStackDirective implements AfterContentInit {

  @Input() stackConfig: StackConfig;

  @Output() throwout: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  @Output() throwoutend: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  @Output() throwoutleft: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  @Output() throwoutright: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  @Output() throwoutup: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  @Output() throwoutdown: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  @Output() throwin: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();
  @Output() throwinend: EventEmitter<ThrowEvent> = new EventEmitter<ThrowEvent>();

  @Output() dragstart: EventEmitter<DragEvent> = new EventEmitter<DragEvent>();
  @Output() dragmove: EventEmitter<DragEvent> = new EventEmitter<DragEvent>();
  @Output() dragend: EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  cards: SwingCardDirective[];
  stack: any;

  constructor() {
    this.cards = [];
  }

  addCard(card: SwingCardDirective) {
    this.cards.push(card);
    if (this.stack) {
      return this.stack.createCard(card.getNativeElement());
    }
  }

  ngAfterContentInit() {
    this.stack = Stack(this.stackConfig || {});
    this.cards.forEach((c) => this.stack.createCard(c.getNativeElement()));

    // Hook various events
    this.stack.on('throwout', $event => this.throwout.emit($event));
    this.stack.on('throwoutend', $event => this.throwoutend.emit($event));
    this.stack.on('throwoutleft', $event => this.throwoutleft.emit($event));
    this.stack.on('throwoutright', $event => this.throwoutright.emit($event));
    this.stack.on('throwin', $event => this.throwin.emit($event));
    this.stack.on('throwinend', $event => this.throwinend.emit($event));
    this.stack.on('dragstart', $event => this.dragstart.emit($event));
    this.stack.on('dragmove', $event => this.dragmove.emit($event));
    this.stack.on('dragend', $event => this.dragend.emit($event));
    this.stack.on('throwoutup', $event => this.throwoutup.emit($event));
    this.stack.on('throwoutdown', $event => this.throwoutdown.emit($event));
  }
}
