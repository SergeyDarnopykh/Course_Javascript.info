# Objects: the basics

## 4.1 Objects
### Square brackets
Object properties can consist of multiple words, 
but then you should use square brackets to access them.
```js
const user = {
    name: 'Vasya',
    'likes apple': true
}

console.log(user.likes apple); // syntax error
console.log(user['likes apple']); // true
```

### Computed properties
We can use square brackets in an object literal.
That’s called computed properties.

For instance: 
```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

### Property value shorthand
When properties have the same name as variables, there's a short way to write that:
```js
const name = 'John', 
    age = 16;

const user = {
    name,
    age
}
```

It's the same as:
```js
const name = 'John', 
    age = 16;

const user = {
    name: name,
    age: age
}
```

### Ordered like an object
Integer properties are sorted, others appear in creation order. 
```js
const codes = {
  "41.9": "Germany",
  "41.1": "Switzerland",
  "40": "Great Britain",
  // ..,
  "1": "USA",
  name: 'Sherlock',
  age: 31
};

for (const code in codes) {
  alert(code); // 1, 40, 41.9, 41.1, name, age
}
```

### Object assign and deep cloning
```js
Object.assign(dest[, src1, src2, src3...])
```

- Arguments `dest`, and `src1`, ..., `srcN` (can be as many as needed) are objects.
- It copies the properties of all objects `src1`, ..., `srcN` into `dest`. 
In other words, properties of all arguments starting from the 2nd are copied into the 1st. Then it returns dest.

For instance:
```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```

For Deep cloning use the method `_.cloneDeep(obj)` from the library `lodash`.