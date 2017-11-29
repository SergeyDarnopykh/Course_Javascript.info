# JavaScript Fundamentals

## 2.4 Variables
If we know the value of the constant before runtime - it should be
uppercase. Otherwise - camelCase. 

## 2.5 Data types
### A number
The script cannot "die" because of Math. The worst we can get is `NaN`. <br>

### A string
Backticks create a special string, where you can embed variables 
and expressions into a string by wrapping them in `${...}` <br>
For example: 
```js
const name = 'Sergey';
let str = `hello ${name}`;
```

## 2.6 Type Conversions
### ToString
Use `String(value)` to convert value to a string. <br>
```js
Number(null) = 0;
Number(undefined) = NaN;
```

### ToNumber
Use `Number(value)` or `+` to convert value to a number. <br> 
`+` does not always convert a value to a number. <br>
For example: <br>
```javascript
3 + '1' = '31';
```

### ToBoolean
Use `Boolean(value)` to convert value to a boolean. <br> 
Only `0`, `false`, `''` , `null`, `undefined`, `NaN` = false <br>
```js
Boolean('0') = true; 
Boolean(' ') = true;
```

## 2.7 Operators
### Assignment
All operators return a value. Even operator `=`. <br>
For example: <br>
The call `x = value` writes the `value` into `x` and then returns it.

### Exponentiation
`a ** b` equals `a` multiplied by itself `b` times.

### Increment/decrement
Increment/decrement can be applied only to a variable. <br>
`5++` gives error.

### Comma
You can divide expressions by `,`, and only the last one
will be returned. <br>
For example: 
```js
let a = (10 + 17, 3 + 4);
```
`a` is equal to `7`.

## 2.8 Comparisons
### Comparison of different types
When compared values belong to different types, they are 
converted to numbers. <br>
For example: <br>
`'2' > 1;` <br>
true, string `'2'` becomes a number `2` 

### Comparison with `null` and `undefined`

`null` and `undefined` are a "sweet couple": they equal only
each other (in the sense of `==`), but not any other value.

### `>` and `<` comparisons with `null` and `undefined`

Do not compare `null` and `undefined` using `<` and `>`. 
They behave really strange this way. <br>

It is a good idea to make a separate check for `null`
and `undefined` while using operators `<` and `>`.

## 2.12 Loops: `while` and `for`
### Labels for break/continue

```javascript
outer: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        if (!input) break outer; // (*)
    }
}  
```

## 2.14 Functions
### Default values
If we want to use a “default” value, then we can specify it after `=`:

```js
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```
