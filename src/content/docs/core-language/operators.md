---
title: "Operators"
description: "Complete guide to Achronyme's operators including arithmetic, comparison, logical, and special operators with precedence rules"
section: "core-language"
order: 2
---

Achronyme provides a comprehensive set of operators for arithmetic, comparison, logical operations, and more.

## Arithmetic Operators

### Basic Arithmetic

```javascript
// Addition
2 + 3          // 5
1.5 + 2.5      // 4.0

// Subtraction
10 - 3         // 7
5.5 - 1.5      // 4.0

// Multiplication
4 * 5          // 20
2.5 * 2        // 5.0

// Division
10 / 2         // 5
7 / 2          // 3.5

// Modulo (remainder)
10 % 3         // 1
7 % 2          // 1
```

### Power Operator

```javascript
// Exponentiation (right-associative)
2^3            // 8
10^2           // 100
2^10           // 1024

// Right-associative
2^3^2          // 2^(3^2) = 2^9 = 512
```

### Unary Minus

```javascript
// Negation
-5             // -5
-(10 + 5)      // -15
-x             // Negative of x
```

## Comparison Operators

All comparison operators return boolean values.

```javascript
// Equal to
5 == 5         // true
3 == 4         // false

// Not equal to
5 != 3         // true
2 != 2         // false

// Less than
3 < 5          // true
10 < 5         // false

// Greater than
10 > 5         // true
3 > 10         // false

// Less than or equal
5 <= 5         // true
3 <= 5         // true
10 <= 5        // false

// Greater than or equal
10 >= 5        // true
5 >= 5         // true
3 >= 10        // false
```

## Logical Operators

### AND Operator (&&)

Returns `true` only if both operands are `true`.

```javascript
true && true      // true
true && false     // false
false && true     // false
false && false    // false

// With expressions
(x > 0) && (y > 0)        // Both must be positive
(age >= 18) && (age < 65) // Age between 18 and 64
```

### OR Operator (||)

Returns `true` if at least one operand is `true`.

```javascript
true || false     // true
false || true     // true
true || true      // true
false || false    // false

// With expressions
(x < 0) || (x > 100)      // Outside range [0, 100]
(score >= 90) || (bonus)  // High score or bonus
```

### NOT Operator (!)

Negates a boolean value.

```javascript
!true          // false
!false         // true
!(5 > 3)       // false
!(x < 0)       // true if x >= 0

// Double negation
!!true         // true
!!false        // false
```

### Short-Circuit Evaluation

Logical operators use short-circuit evaluation:

```javascript
// AND: if first is false, second is not evaluated
false && (1/0)    // false (no division by zero error)

// OR: if first is true, second is not evaluated
true || (1/0)     // true (no division by zero error)
```

## Operator Precedence

From highest to lowest precedence:

| Level | Operators | Description | Associativity |
|-------|-----------|-------------|---------------|
| 1 | `()` `[]` `.` | Function call, indexing, field access | Left |
| 2 | `^` | Power/exponentiation | Right |
| 3 | `-` `!` | Unary minus, logical NOT | Right |
| 4 | `*` `/` `%` | Multiplication, division, modulo | Left |
| 5 | `+` `-` | Addition, subtraction | Left |
| 6 | `->` `<>` | Graph edges | Left |
| 7 | `==` `!=` `<` `>` `<=` `>=` | Comparison | Left |
| 8 | `&&` | Logical AND | Left |
| 9 | `||` | Logical OR | Left |

### Precedence Examples

```javascript
// Multiplication before addition
2 + 3 * 4          // 2 + 12 = 14
(2 + 3) * 4        // 5 * 4 = 20

// Power before multiplication
2 * 3^2            // 2 * 9 = 18
(2 * 3)^2          // 6^2 = 36

// Comparison before logical
x > 0 && y > 0     // Parsed as: (x > 0) && (y > 0)

// Right-associative power
2^3^2              // 2^(3^2) = 2^9 = 512
```

## Associativity

### Left-Associative Operators

Most operators are left-associative:

```javascript
// Subtraction
10 - 5 - 2         // (10 - 5) - 2 = 3

// Division
100 / 10 / 2       // (100 / 10) / 2 = 5

// Addition
1 + 2 + 3          // (1 + 2) + 3 = 6
```

### Right-Associative Operators

Power operator is right-associative:

```javascript
// Power
2^3^2              // 2^(3^2) = 2^9 = 512
NOT: (2^3)^2       // Would be 8^2 = 64

// Why? Mathematical convention
a^b^c = a^(b^c)
```

## Operator Overloading

Some operators work with multiple types.

### Addition (+)

```javascript
// Numbers
5 + 3              // 8

// Tensors (element-wise)
[1, 2, 3] + [4, 5, 6]    // [5, 7, 9]

// Complex numbers
(2 + 3i) + (1 + 4i)      // 3 + 7i

// Broadcast with scalar
[1, 2, 3] + 10           // [11, 12, 13]
```

### Multiplication (*)

```javascript
// Numbers
5 * 3              // 15

// Tensors (element-wise)
[1, 2, 3] * [2, 2, 2]    // [2, 4, 6]

// Scalar multiplication
[1, 2, 3] * 2            // [2, 4, 6]

// Complex numbers
(2 + 3i) * (1 - 2i)      // 8 - i
```

### Power (^)

```javascript
// Numbers
2^10               // 1024

// Tensors (element-wise)
[2, 3, 4]^2        // [4, 9, 16]

// Complex exponentiation
(1 + i)^2          // 2i
```

## Special Operators

### Field Access (.)

Access record fields:

```javascript
let point = {x: 10, y: 20}

point.x            // 10
point.y            // 20

// Chained access
let obj = {inner: {value: 42}}
obj.inner.value    // 42
```

### Indexing ([])

Access array/tensor elements:

```javascript
// Array indexing (0-based)
let arr = [10, 20, 30, 40]
arr[0]             // 10
arr[3]             // 40

// Matrix indexing
let matrix = [[1, 2], [3, 4]]
matrix[0, 0]       // 1
matrix[1, 1]       // 4

// Slicing
arr[1..3]          // [20, 30]
arr[..2]           // [10, 20]
arr[2..]           // [30, 40]
```

### Function Call (())

Call functions:

```javascript
sin(3.14159)       // ~0
sqrt(16)           // 4

let f = x => x^2
f(5)               // 25
```

### Graph Edges (-> and <>)

Create graph edges:

```javascript
// Directed edge
A -> B

// Undirected edge
A <> B

// With metadata
A -> B : {weight: 5}
```

## Best Practices

### 1. Use Parentheses for Clarity

```javascript
// Unclear precedence
let x = a + b * c - d / e

// Clear intention
let x = a + (b * c) - (d / e)
```

### 2. Avoid Deep Nesting

```javascript
// Hard to read
let result = ((a + b) * (c - d)) / ((e + f) * (g - h))

// Better: break into steps
let sum1 = a + b
let diff1 = c - d
let sum2 = e + f
let diff2 = g - h
let result = (sum1 * diff1) / (sum2 * diff2)
```

### 3. Be Explicit with Boolean Expressions

```javascript
// Unclear
if(x && y || z) ...

// Clear
if((x && y) || z) ...
```

### 4. Use Named Constants

```javascript
// Bad: magic numbers
let area = 3.14159 * r^2

// Good: named constant
let PI = 3.14159
let area = PI * r^2
```

## Summary

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `^`
- **Comparison**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Logical**: `&&`, `||`, `!`
- **Special**: `.` (field), `[]` (index), `()` (call)
- **Graph**: `->` (directed edge), `<>` (undirected edge)
- **Precedence**: Use parentheses when in doubt
- **Associativity**: Most left-to-right, except `^` (right-to-left)
- **Overloading**: Operators work with numbers, tensors, complex numbers

---

**Next**: [Variables](variables.md)
