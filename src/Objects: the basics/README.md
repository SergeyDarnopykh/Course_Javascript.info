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

## Symbol type

### Symbol
“Symbol” value represents a unique identifier.
```js
let id = Symbol();
```

We can also give symbol a description (also called a symbol name), 
mostly useful for debugging purposes:

```js
let id = Symbol("id");
```

### Symbols don't auto convert to string
This will give an error:
```js
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
```

If we really want to show a symbol,
 we need to call .toString() on it, like here:

```js
let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works
```

### “Hidden” properties
Symbols allow us to create “hidden” properties of an object,
that no other part of code can occasionally access or overwrite.

For instance, if we want to store an “identifier” 
for the object user, we can use a symbol as a key for it:
```js
let user = { name: "John" };
let id = Symbol("id");

user[id] = "ID Value";
alert( user[id] ); // we can access the data using the symbol as the key
```

If there's another script, that needs to set its own id,
then that script can create its own Symbol("id"), like this:

```js
let id = Symbol("id");
user[id] = "Their id value";
```

There will be no conflict, because symbols are always different, 
even if they have the same name.

### Symbols in a literal
If we want to use a symbol in an object literal, we need square brackets 
(because we need the value from variable id as the the key, not the string "id"):
```js
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not just "id: 123"
};
```

### Symbols in `for…in`
Symbols are skipped in `for...in` loop, but they are copied by `Object.assign` method.

### Other types as the keys in objects
Property keys of other types are coerced to strings.

### Global symbols
In order to create or read a symbol in the registry, use `Symbol.for(key)`.

That call checks the global registry, and if there’s a symbol described as `key`, 
then returns it, otherwise creates a new symbol `Symbol(key)`
and stores it in the registry by the given `key`.

For instance:
```js
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true
```

### Symbol.keyFor

For global symbols, not only Symbol.for(key) returns a symbol by name, 
but there’s a reverse call: Symbol.keyFor(sym), that does the reverse: 
returns a name by a global symbol.

For instance:
```js
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name from symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```

### System symbols
They are listed in the specification in the Well-known symbols table:
- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- …and so on.

For instance, `Symbol.toPrimitive` allows us to describe object 
to primitive conversion.