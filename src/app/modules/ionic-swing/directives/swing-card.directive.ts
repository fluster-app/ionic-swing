import {Directive, ElementRef, OnInit} from '@angular/core';

import {SwingStackDirective} from './swing-stack.directive';
import {Card} from '../interfaces/swing';

@Directive({
  selector: '[swingCard]'
})
export class SwingCardDirective implements OnInit {
  private card: Card;

  constructor(
    private elementRef: ElementRef,
    private swingStack: SwingStackDirective) {
  }

  ngOnInit() {
    this.card = this.swingStack.addCard(this);
  }

  getElementRef() {
    return this.elementRef;
  }

  getNativeElement() {
    return this.elementRef.nativeElement;
  }

  getCard(): Card {
    return this.card;
  }
}
