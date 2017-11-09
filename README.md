# ionic-swing

ionic-swing is a fork of the following projects intended to add the swipeable cards capatibilies to Ionic (>= 2)

- swing.js (version 4.3.0, https://github.com/gajus/swing)
- angular2-swing (version 0.11.0, https://github.com/ksachdeva/angular2-swing)

The main reason behind this fork is that I was facing a problem with hammerjs, which was freezing the scrolling of my application on iOS and Android devices when I was using (swipe) on a list or on an ion-scroll.

After having unsuccessfully tried many solutions I was thinking, after all, that Ionic already include is own version of hammer.

Therefore I decided to create this fork with the goal to make a version of swing.js which doesn't embed any external hammerjs.

## Current status

This fork project is in version beta but seems to work (tested with Ionic 3.1.0).

Possible improvements not yet done:

- Improve typescripting and remove class swing.ts
- The fork special dependencies are, inherited from swing.js, raf, rebound, sister, vendor-prefix. To spare size of my application (smaller bundle = faster boot), it should be checked if these can't be replaced with native code or smaller libs.

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

To implement a card stack, follow the example provided by angular2-swing

See https://github.com/ksachdeva/angular2-swing

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

## Side notes

Struture of the project created following the tutorial of Nikolas LeBlanc

https://medium.com/@ngl817/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
