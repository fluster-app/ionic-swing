<a name="2.2.0"></a>
## [2.2.0](https://github.com/peterpeterparker/ionic-swing/compare/v2.1.0...v2.2.0) (2018-08-16)
* **feature**: Cards' position in the stack is not modified per default anymore. This is now optional, use `StackConfig.sortCards` if you wish to do so
* **refactor**: The `prepend` option as been moved to  `StackConfig.prependCards`
* **lib**: Update all libs dependencies

<a name="2.1.0"></a>
## [2.1.0](https://github.com/peterpeterparker/ionic-swing/compare/v2.0.1...v2.1.0) (2018-08-04)
* **lib**: Revert, `hammerjs` will not be shipped with `ionic-swing` as it was previously the case

<a name="2.0.1"></a>
## [2.0.1](https://github.com/peterpeterparker/ionic-swing/compare/v0.2.0...v2.0.1) (2018-07-25)
* **breaking changes**: Update project to Angular v6
* **lib**: From now on, `ionic-swing` is shipped with a reference to `hammerjs`

p.s.: v2.0.1 instead of v2.0.0 in order to publish correctly to npm

<a name="0.2.0"></a>
## [0.2.0](https://github.com/peterpeterparker/ionic-swing/compare/v0.0.10...v0.2.0) (2017-12-21)
* **feat:** Avoid potential cpu load problem

<a name="0.1.0"></a>
## [0.1.0](https://github.com/peterpeterparker/ionic-swing/compare/v0.0.10...v0.1.0) (2017-11-09)
* **project:** Migration of the project structure to use Angular CLI
* **project:** Introduction of ng-packagr to build the module
* **lib:** Update angular 5.0.0 and rjxs 5.5.2

<a name="0.0.7"></a>
## [0.0.7](https://github.com/peterpeterparker/ionic-swing/compare/v0.0.6...v0.0.10) (2017-06-18)
* **lib:** Update angular, rjxs and zone.js

<a name="0.0.6"></a>
## [0.0.6](https://github.com/peterpeterparker/ionic-swing/compare/v0.0.5...v0.0.6) (2017-05-11)
* **lib:** Update to zonejs
* fix publish on npm

<a name="0.0.5"></a>
## [0.0.5](https://github.com/peterpeterparker/ionic-swing/compare/v0.0.4...v0.0.5) (2017-05-11)
* **lib:** Update to angular 4.1.0

<a name="0.0.4"></a>
## [0.0.4](https://github.com/peterpeterparker/ionic-swing/compare/v0.0.3...v0.0.4) (2017-04-26)

### Features

* **lib:** Lodash replaced by underscore.js ([#1]https://github.com/peterpeterparker/ionic-swing/issues/1)
* **lib:** Angular, rxjs and zone updated to reflect Ionic 3.1.0 dependencies ([#3]https://github.com/peterpeterparker/ionic-swing/issues/3)

### Comments

The main reason behind the replacement of lodash by underscore is the size of the library. In an Ionic app the size of the bundle is a major factor regarding the boot time, therefore, smaller the libs are, faster the app boot will be.
