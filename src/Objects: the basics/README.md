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

## Garbage collection
### Reachability
1. There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

    For instance:
    - Local variables and parameters of the current function.
    - Variables and parameters for other functions on the current chain of nested calls.
    - Global variables.
    - (there are some other, internal ones as well)
    
    These values are called roots.

2. Any other value is considered reachable if it’s reachable 
from a root by a reference or by a chain of references.

There’s a background process in the JavaScript engine that is called
`garbage collector`. It monitors all objects and removes those that
have become unreachable.

### Internal algorithms

The basic garbage collection algorithm is called “mark-and-sweep”.

The following “garbage collection” steps are regularly performed:

- The garbage collector takes roots and “marks” (remembers) them.
- Then it visits and “marks” all references from them.
- Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
- …And so on until there are unvisited references (reachable from the roots).
- All objects except marked ones are removed.

### Optimization

- `Generational collection` – objects are split into two sets: “new ones” and “old ones”. Many objects appear, do their job and die fast, they can be cleaned up aggressively. Those that survive for long enough, become “old” and are examined less often.
- `Incremental collection` – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine tries to split the garbage collection into pieces. Then the pieces are executed one by one, separately. That requires some extra bookkeeping between them to track changes, but we have many tiny delays instead of a big one.
- `Idle-time collection` – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.
