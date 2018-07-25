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

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
