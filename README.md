# Wajez Transform

Transforming data to object made easy.

# Installation

```
npm i wajez-transform --save
```

# Usage

```
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
    job: 'Developer'
} //,...
]

const format = transform({
    name: _ => _.firstName + ' ' + _.lastName, // apply a function to the object
    profession: 'job', // get the attribute `job`
    age: ['birthDay', _ => 2017 - _.getFullYear()] // apply function to attribute
}) // a function which can be applied to transform mutiple objects

users.map(format) //=> [
// {
//   name: 'Amine Ben hammou',   
//   profession: 'Developer',   
//   age: 27   
// }
// , ...
// ]

```

