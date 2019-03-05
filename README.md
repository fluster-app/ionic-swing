# ionic-swing

ionic-swing is a fork of the following projects intended to add the swipeable cards capatibilies to Ionic (>= 2)

- [swing.js](https://github.com/gajus/swing)
- [angular2-swing](https://github.com/ksachdeva/angular2-swing)

## Installation

To install this library, run:

```bash
$ npm install ionic-swing --save
```

## Usage

### 1. Import the IonicSwingModule

In your app.module.ts, import the library like following:

    import {IonicSwingModule} from 'ionic-swing';

and add it to your imports:

    imports: [
        ...
        IonicSwingModule
        ...
    ]

### 2. To implement a card stack

To implement a card stack, follow the example provided by angular2-swing [https://github.com/ksachdeva/angular2-swing](https://github.com/ksachdeva/angular2-swing)

Or you could find also another example in my mobile application [Fluster](https://fluster.io), see the following page and module [https://github.com/fluster/fluster-app/tree/master/src/app/pages/browse/items/items](https://github.com/fluster/fluster-app/tree/master/src/app/pages/browse/items/items)

### 3. ViewChild and ViewChildren in Ionic v4

In Ionic v4, in order to access the stack and cards as `ViewChild` and `ViewChildren`, it's mandatory to use the keyword `read` to identify correctly the elements 

Html:

    <div swingStack #swingStack>
         <ion-card swingCard #swingCards>
         </ion-card>
    </div>

Ts:

    @ViewChild('swingStack', {read: SwingStackDirective}) swingStack: SwingStackDirective;
    @ViewChildren('swingCards', {read: SwingCardDirective}) swingCards: QueryList<SwingCardDirective>;

## Notes regarding hammerjs

This library need `hammerjs` but isn't shipped with it because some framework, like `Ionic v3`, already include it in their own resources. If it isn't your case, you would need to install `hammerjs` in your project 

```bash
$ npm install hammerjs --save
```

and add the following line to your `app.component.ts`

    import 'hammerjs';

## Note regarding global

If you would face the error `ReferenceError: global is not defined at ionic-swing.js` at runtime, this could be fixed by declaring the `window` to the global scope. To do so add you could add the following to your `polyfill.ts`:  

```
(window as any).global = window;
```

## Development

To generate the library using ng-packagr (https://github.com/dherges/ng-packagr)

```bash
$ npm run packagr
```

To test locally

```bash
$ cd dist
$ npm pack
$ cd /your-project-path/
$ npm install /relative-path-to-local-ionic-swing/dist/ionic-swing-0.0.0.tgz
```

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
