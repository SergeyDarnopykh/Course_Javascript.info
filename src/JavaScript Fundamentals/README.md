# Notes

## 2.4 Variables
If we know the value of the constant before runtime - it should be
uppercase. Otherwise - camelCase. 

## 2.5 Data types
### A number
The script cannot "die" because of Math. The worst we can get is `NaN`. <br>

### A string
Backticks create a special string, where you can embed variables 
and expressions into a string by wrapping them in `${...}` <br>
For example: <br>
`const name = 'Sergey';` <br>
`let str = *hello ${name}*;` <br>
`*` is a backtick here.

## 2.6 Type Conversions
### ToString
Use `String(value)` to convert value to a string. <br>
`Number(null) = 0;` <br>
`Number(undefined) = NaN;` 

### ToNumber
Use `Number(value)` or `+` to convert value to a number. <br> 
`+` does not always convert a value to a number. <br>
For example: <br>
`3 + '1' = '31';`

### ToBoolean
Use `Boolean(value)` to convert value to a boolean. <br> 
Only `0`, `false`, `''` , `null`, `undefined`, `NaN` = false <br>
`Boolean('0') = true;` <br> 
`Boolean(' ') = true;`

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
For example: <br>
`let a = (10 + 17, 3 + 4);` <br>
`a` is equal to `7`.

## 2.8 Comparisons
### Comparison of different types
When compared values belong to different types, they are 
converted to numbers. <br>
For example: <br>
`'2' > 1;` <br>
true, string `'2'` becomes a number `2` 


