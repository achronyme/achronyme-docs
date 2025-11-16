---
title: "Achronyme Language Reference"
description: "Welcome to the Achronyme programming language - a functional, expression-oriented language for mathematical computing"
section: "getting-started"
order: 1
---

Welcome to the Achronyme programming language documentation. Achronyme is a functional, expression-oriented language designed for mathematical computations, numerical analysis, and scientific computing.

## What is Achronyme?

Achronyme (also known as SOC - Scientific Operations Calculator) is a domain-specific language that combines:
- **Functional programming** with first-class functions and closures
- **Mathematical notation** familiar to scientists and engineers
- **Powerful built-in libraries** for numerical analysis, DSP, linear algebra, and graph theory
- **Tensor operations** with support for multi-dimensional arrays
- **Interactive REPL** for rapid prototyping and exploration

## File Extension

Achronyme source files use the `.soc` extension (Scientific Operations Calculator).

## Quick Example

```javascript
// Import from modules
import { mean, std } from "stats"
import { sin, cos } from "math"

// Define a function
let square = x => x^2

// Use higher-order functions
let numbers = [1, 2, 3, 4, 5]
let squared = map(square, numbers)

// Numerical integration
let area = integral(x => x^2, 0, 10)

// Records with mutable fields
let counter = {
    mut value: 0,
    increment: () => do { self.value = self.value + 1 },
    get: () => self.value
}

// Statistical analysis
let data = [10, 20, 30, 40, 50]
let average = mean(data)
let stdDev = std(data)
```

## Language Philosophy

### Expression-Oriented
Everything in Achronyme is an expression that returns a value. There are no statements that don't produce values.

```javascript
let result = if(x > 0, 1, -1)  // if() is a function that returns a value
```

### Immutable by Default, Mutable When Needed
Variables are immutable by default but can be declared mutable with `mut`:

```javascript
// Immutable (default)
let x = 10
let x = x + 5  // New binding, shadows the old one

// Mutable (explicit)
mut counter = 0
counter = counter + 1  // Reassignment allowed
```

### First-Class Functions
Functions are values that can be passed around, stored in variables, and returned from other functions:

```javascript
let operation = if(mode == "add", (a, b) => a + b, (a, b) => a * b)
operation(3, 4)
```

### Type Inference
The language automatically infers types based on usage. Arrays of numbers become tensors, supporting efficient mathematical operations.

## Feature Highlights

### Mathematical Computing
- Built-in support for complex numbers: `2 + 3i`
- Tensor operations with broadcasting
- Comprehensive math library (trig, exp, log, etc.)

### Numerical Analysis
- Automatic differentiation
- Numerical integration (trapezoid, Simpson, Romberg)
- Root finding (bisection, Newton-Raphson, secant)

### Signal Processing
- Fast Fourier Transform (FFT)
- Convolution (direct and FFT-based)
- Window functions (Hanning, Hamming, Blackman)

### Graph Algorithms
- BFS, DFS, Dijkstra
- Minimum Spanning Trees (Kruskal, Prim)
- Topological sort
- PERT/CPM for project management

### Modern Syntax
- Lambda functions: `x => x^2`
- Higher-order functions: `map`, `filter`, `reduce`
- Spread operator: `[...array1, ...array2]`
- Records with methods and `self` reference

## Community and Support

- **GitHub**: [Achronyme Repository](https://github.com/anthropics/achronyme-core)
- **Issues**: Report bugs or request features
- **Examples**: See the `examples/soc/` directory

## Next Steps

1. Start with [Getting Started](installation.md) to set up your environment
2. Learn the [Syntax Basics](syntax-basics.md)
3. Explore [Data Types](../core-language/data-types.md)
4. Try the [Examples](../advanced-topics/examples.md)

---

**Note**: This is an evolving language. Some features may be experimental or subject to change.
