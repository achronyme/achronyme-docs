---
title: "String Manipulation"
description: "String literals, escape sequences, concatenation, case conversion, trimming, searching, splitting, joining, and padding operations"
section: "data-structures"
order: 4
---

Strings in Achronyme are a fundamental data type for text processing. This guide covers string literals, functions, operations, and advanced features including case conversion, trimming, searching, and padding.

## String Literals

### Basic String Syntax

String literals are enclosed in double quotes:

```javascript
let greeting = "Hello"
let name = "Achronyme"
let empty = ""
```

### Escape Sequences

Achronyme supports the following escape sequences within string literals:

| Escape Sequence | Result | Description |
|---|---|---|
| \n | Newline | Line break |
| \t | Tab | Horizontal tab |
| \r | Carriage Return | Carriage return character |
| \\ | Backslash | Literal backslash character |
| \" | Double Quote | Literal double quote character |

### Unicode Support

Strings fully support Unicode characters, including emoji and international characters.

## String Operators

### String Concatenation with +

Strings can be concatenated using the `+` operator:

```javascript
"hello" + " " + "world"  // "hello world"
"a" + "b" + "c"          // "abc"

let greeting = "Hello"
let name = "Alice"
greeting + ", " + name + "!"  // "Hello, Alice!"
```

### String Equality

Strings support equality and inequality comparison operators.

**Operators:** ==, !=

**Examples:**
```javascript
"hello" == "hello"  // true
"hello" != "world"  // true
```

**Case Sensitivity:** String comparison is case-sensitive.

## String Functions

### Basic Functions

#### concat(s1, s2)

Concatenates two strings.

**Signature:** concat(String, String) -> String

**Note:** String concatenation is now also available via the `+` operator.

**Examples:**
```javascript
concat("Hello", " World")      // "Hello World"
concat("Achronyme", " Language")

// Equivalent using + operator
"Hello" + " World"             // "Hello World"
```

#### length(s)

Returns the length of a string in characters.

**Signature:** length(String) -> Number

**Examples:**
```javascript
length("hello")    // 5
length("testing")  // 7
length("")         // 0
```

### Case Conversion

#### upper(s)

Converts a string to uppercase.

**Signature:** upper(String) -> String

**Examples:**
```javascript
upper("hello")         // "HELLO"
upper("Hello World")   // "HELLO WORLD"
upper("ALREADY UPPER") // "ALREADY UPPER"
```

#### lower(s)

Converts a string to lowercase.

**Signature:** lower(String) -> String

**Examples:**
```javascript
lower("HELLO")        // "hello"
lower("Hello World")  // "hello world"
lower("already lower")// "already lower"
```

### Whitespace Handling

#### trim(s)

Removes whitespace from both ends of a string.

**Signature:** trim(String) -> String

**Examples:**
```javascript
trim("  hello  ")      // "hello"
trim("\n\thello\t\n")  // "hello"
trim("hello")          // "hello"
trim("   ")            // ""
```

#### trim_start(s)

Removes whitespace from the start of a string.

**Signature:** trim_start(String) -> String

**Examples:**
```javascript
trim_start("  hello  ")  // "hello  "
trim_start("\n\thello")  // "hello"
```

#### trim_end(s)

Removes whitespace from the end of a string.

**Signature:** trim_end(String) -> String

**Examples:**
```javascript
trim_end("  hello  ")  // "  hello"
trim_end("hello\n\t")  // "hello"
```

### Search Functions

#### starts_with(s, prefix)

Checks if a string starts with a given prefix.

**Signature:** starts_with(String, String) -> Boolean

**Examples:**
```javascript
starts_with("hello world", "hello")  // true
starts_with("hello world", "world")  // false
starts_with("hello", "hello")        // true
starts_with("hello", "")             // true (empty prefix)
```

#### ends_with(s, suffix)

Checks if a string ends with a given suffix.

**Signature:** ends_with(String, String) -> Boolean

**Examples:**
```javascript
ends_with("hello world", "world")  // true
ends_with("hello world", "hello")  // false
ends_with("world", "world")        // true
```

#### contains(s, substring)

Checks if a string contains a substring.

**Signature:** contains(String, String) -> Boolean

**Note:** This function also works with arrays. See [Higher-Order Functions](../functional-programming/higher-order-functions.md) for array usage.

**Examples:**
```javascript
contains("hello world", "world")  // true
contains("hello", "bye")          // false
```

### String Manipulation

#### replace(s, pattern, replacement)

Replaces all occurrences of a pattern with a replacement string.

**Signature:** replace(String, String, String) -> String

**Examples:**
```javascript
replace("hello world", "world", "rust")  // "hello rust"
replace("aaa", "a", "b")                 // "bbb"
replace("hello", "xyz", "abc")           // "hello" (no match)
```

#### split(s, delimiter)

Splits a string by a delimiter into an array of strings.

**Signature:** split(String, String) -> Vector

**Examples:**
```javascript
split("a,b,c", ",")              // ["a", "b", "c"]
split("hello world test", " ")   // ["hello", "world", "test"]
split("hello", ",")              // ["hello"] (no delimiter found)
```

#### join(array, delimiter)

Joins an array of strings with a delimiter.

**Signature:** join(Vector, String) -> String

**Examples:**
```javascript
join(["a", "b", "c"], ",")       // "a,b,c"
join(["hello", "world"], " ")    // "hello world"
join(["a", "b", "c"], "")        // "abc"
join(["hello"], ",")             // "hello"
```

### Padding Functions

#### pad_start(s, length, fill_char?)

Pads a string at the start to reach a target length.

**Signature:** pad_start(String, Number, String?) -> String

**Default fill character:** space (' ')

**Examples:**
```javascript
pad_start("5", 3)         // "  5"
pad_start("5", 3, "0")    // "005"
pad_start("hello", 3)     // "hello" (already long enough)
pad_start("42", 10, "0")  // "0000000042"
```

#### pad_end(s, length, fill_char?)

Pads a string at the end to reach a target length.

**Signature:** pad_end(String, Number, String?) -> String

**Default fill character:** space (' ')

**Examples:**
```javascript
pad_end("5", 3)        // "5  "
pad_end("5", 3, "0")   // "500"
pad_end("hello", 3)    // "hello" (already long enough)
```

## String Indexing and Slicing

Strings support both single-character indexing and range-based slicing.

### Single Character Indexing

**Syntax:** string[index]

Returns a single character as a string.

**Examples:**
```javascript
let word = "hello"
word[0]    // "h"
word[-1]   // "o" (last character)
```

### String Slicing

**Syntax:** string[start..end], string[start..], string[..end], string[..]

Returns a substring as a string.

**Examples:**
```javascript
let message = "Hello, World!"
message[0..5]   // "Hello"
message[7..]    // "World!"
message[..5]    // "Hello"
message[-6..]   // "World!"
```

## Practical Examples

### Text Processing Pipeline

```javascript
// Clean and normalize text
let process_text = text => {
    let cleaned = trim(text);
    let normalized = lower(cleaned);
    normalized
}

process_text("  HELLO WORLD  ")  // "hello world"
```

### CSV Processing

```javascript
// Parse CSV line
let csv_line = "Alice,30,Engineer"
let fields = split(csv_line, ",")
// ["Alice", "30", "Engineer"]

// Join fields back
join(fields, "|")  // "Alice|30|Engineer"
```

### String Formatting with map

```javascript
// Format list of names
let names = ["alice", "bob", "charlie"]
let formatted = map(name => upper(name), names)
join(formatted, ", ")  // "ALICE, BOB, CHARLIE"
```

### Table Formatting

```javascript
// Create formatted table row
let name = "Alice"
let age = "25"
let city = "NYC"

let row = pad_end(name, 15) + pad_end(age, 5) + city
// "Alice          25   NYC"
```

### Text Transformation

```javascript
// Convert semicolon-separated to comma-separated
let text = "a;b;c;d"
let normalized = replace(text, ";", ",")
split(normalized, ",")  // ["a", "b", "c", "d"]
```

### Case-Insensitive Comparison

```javascript
let compare_ignore_case = (s1, s2) => lower(s1) == lower(s2)

compare_ignore_case("HELLO", "hello")  // true
compare_ignore_case("World", "WORLD")  // true
```

## Limitations

### No Regex Support

Pattern matching and regular expressions are not supported. Use `contains`, `starts_with`, `ends_with`, and `replace` for basic pattern operations.

### No Direct String Iteration

Higher-order functions (map, filter, reduce) do not work with strings directly. Use `split` to convert to an array first:

```javascript
// Split into characters, transform, rejoin
let chars = split("hello", "")
let upper_chars = map(c => upper(c), chars)
join(upper_chars, "")  // "HELLO"
```

### No Printf-style Formatting

There is no formatted string interpolation. Use `+` operator or `concat()` to build strings:

```javascript
let name = "Alice"
let age = 30
let message = "Name: " + name + ", Age: " + pad_start(age, 2, "0")
```

## Summary

Achronyme provides comprehensive string manipulation capabilities:

**Operators:**
- `+` for concatenation
- `==` and `!=` for comparison

**Functions:**
- **Basic**: `concat`, `length`
- **Case**: `upper`, `lower`
- **Whitespace**: `trim`, `trim_start`, `trim_end`
- **Search**: `starts_with`, `ends_with`, `contains`
- **Manipulation**: `replace`, `split`, `join`
- **Padding**: `pad_start`, `pad_end`

**Features:**
- Unicode support
- Escape sequences
- Indexing and slicing
- Immutable operations

---

**Next**: [Higher-Order Functions](../functional-programming/higher-order-functions.md)
