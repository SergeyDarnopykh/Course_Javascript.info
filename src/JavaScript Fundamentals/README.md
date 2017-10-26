# Notes

## 2.4 Variables
If we know the value of the constant before runtime - it should be
uppercase. Otherwise - camelCase. 

## 2.5 Data types
### A number
The script cannot "die" because of Math. The worst we can get is `NaN`. <br>

### A string
Backticks `` create a special string, where you can embed variables 
and expressions into a string by wrapping them in `${...}` <br>
For example: <br>
`const name = 'Sergey'` <br>
`let str = *hello ${name}*` <br>
`*` is a backtick here.

## 2.6 Type Conversions
### ToString
Use `String(value)` to convert value to a string. <br>
`Number(null) = 0` <br>
`Number(undefined) = NaN` 

### ToNumber
Use `Number(value)` or `+` to convert value to a number. <br> 
`+` does not always convert a value to a number. <br>
For example: <br>
`3 + '1' = '31'`

### ToBoolean
Use `Boolean(value)` to convert value to a boolean. <br> 
Only `0`, `false`, `''` , `null`, `undefined`, `NaN` = false <br>
`Boolean('0') = true` <br> 
`Boolean(' ') = true`





