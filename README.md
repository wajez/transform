# Wajez Transform

[![Build Status](https://travis-ci.org/wajez/transform.svg?branch=master)](https://travis-ci.org/wajez/transform)
[![Coverage Status](https://coveralls.io/repos/github/wajez/transform/badge.svg)](https://coveralls.io/github/wajez/transform)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/wajez/transform/blob/master/LICENSE)

Transforming data to object made easy.

# Installation

```
npm i wajez-transform --save
```

# Usage

```js
const transform = require('wajez-transform')

const numbers = [1, -5, 2, 7, -1, 0, -4]

transform({
    positive: _ => _.filter(n => n >= 0),
    negative: _ => _.filter(n => n <= 0)
}, numbers)
//=> {
//   positive: [1, 2, 7, 0],
//   negative: [-5, -1, 0, -4]
// }

const users = [{
    firstName: 'Amine',
    lastName: 'Ben hammou',
    birthDay: new Date('1990-05-05'),
    job: 'Developer',
    links: {
        github: 'https://github.com/webNeat',
        twitter: 'https://twitter.com/WebNeat'
    }
} //,...
]

const format = transform({
    name: _ => _.firstName + ' ' + _.lastName, // apply a function to the object
    profession: 'job', // get the attribute `job`
    age: ['birthDay', _ => 2017 - _.getFullYear()], // apply function to attribute
    github: 'links.github' // get an inner attribute
}) // a function which can be applied to transform mutiple objects

users.map(format) //=> [
// {
//   name: 'Amine Ben hammou',
//   profession: 'Developer',
//   age: 27,
//   github: 'https://github.com/webNeat'
// }
// , ...
// ]

```

# Contribution

Feedback and Pull Requests are welcome!
