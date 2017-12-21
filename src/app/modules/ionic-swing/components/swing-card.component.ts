import {Component, ElementRef, OnInit} from '@angular/core';

import {SwingStackComponent} from './swing-stack.component';
import {Card} from '../interfaces/swing';

@Component({
    selector: '[swing-card]',
    template: `
        <ng-content></ng-content>
    `
})
export class SwingCardComponent implements OnInit {
    private card:Card;
    constructor(
        private elmentRef: ElementRef,
        private swingStack: SwingStackComponent) {
    }

    ngOnInit() {
        this.card = this.swingStack.addCard(this);
    }

    getElementRef() {
        return this.elmentRef;
    }

    getNativeElement() {
        return this.elmentRef.nativeElement;
    }

    getCard(): Card {
        return this.card;
    }
}
