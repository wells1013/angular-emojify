# angular-emojify

Angular directive to emojify unicode chars.

## Installation

`bower install angular-emojify --save`

## Usage

Inject module into you app:

```javascript
angular.module('YourApp', ['emojify']);
```

Use it at a [directive](http://docs.angularjs.org/guide/directive):

```html
<div ng-bind="unicode" emojify></div>
```

## Contributing

1. [Fork it](http://github.com/code/angular-emojify/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
