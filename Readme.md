# React Facebook Emoji
Easy to use facebook animated Emojis

## How to use it

### Install the npm package
```sh
$ npm i --save react-facebook-emoji
```

### Use it in your component
```javascript
import React from 'react';
import FacebookEmoji from 'react-facebook-emoji';

export const sampleComponent = () => (
    <FacebookEmoji />
);
```
### Preview
![preview](https://raw.githubusercontent.com/asfandiyark7/react-facebook-emoji/master/docs/images/single.png)


Property | Values | Default Value
-------- | ------ | -------------
type | like, love, yay, wow, angry, haha, sad | like
size | xxs, xs, sm, md, lg, xl, xxl, xxl | md


### Using different types
```javascript
import React from 'react';
import FacebookEmoji from 'react-facebook-emoji';

export const sampleComponent = () => (
    <div>
        <FacebookEmoji type="like"/>
        <FacebookEmoji type="love"/>
        <FacebookEmoji type="wow"/>
        <FacebookEmoji type="yay"/>
        <FacebookEmoji type="angry"/>
        <FacebookEmoji type="haha"/>
        <FacebookEmoji type="sad"/>
    </div>
);
```
### Preview
![Types](https://raw.githubusercontent.com/asfandiyark7/react-facebook-emoji/master/docs/images/types.png)


### Using different sizes
```javascript
import React from 'react';
import FacebookEmoji from 'react-facebook-emoji';

export const sampleComponent = () => (
    <div>
        <FacebookEmoji type="like" size="xxs"/>
        <FacebookEmoji type="like" size="xs"/>
        <FacebookEmoji type="like" size="sm"/>
        <FacebookEmoji type="like" size="md"/>
        <FacebookEmoji type="like" size="lg"/>
        <FacebookEmoji type="like" size="xl"/>
        <FacebookEmoji type="like" size="xxl"/>
        <FacebookEmoji type="like" size="xxxl"/>
    </div>
);
```
### Preview
![Sizes](https://raw.githubusercontent.com/asfandiyark7/react-facebook-emoji/master/docs/images/sizes.png)


Please feel free to contact if you have any problem while using this package, I always like to help and solve the problems of other people.

Email:  asfand.dev@gmail.com
Website:  [asfand.info](https://asfand.info)