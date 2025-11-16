# Achronyme Documentation Site - Session Context

## Estado Actual del Proyecto

### Completado
1. **Proyecto Astro inicializado** en la raíz del directorio
2. **Dependencias instaladas** (389 paquetes):
   - astro@5.15.8
   - @astrojs/alpinejs@0.4.0
   - alpinejs@3.14.9
   - tailwindcss@4.1.0 (via @tailwindcss/vite)
   - @tailwindcss/typography@0.5.16

### Pendiente Inmediato
1. **Configurar astro.config.mjs** con:
   ```javascript
   import { defineConfig } from 'astro/config';
   import tailwindcss from '@tailwindcss/vite';
   import alpinejs from '@astrojs/alpinejs';

   export default defineConfig({
     integrations: [
       alpinejs({ entrypoint: '/src/entrypoint.ts' })
     ],
     vite: {
       plugins: [tailwindcss()]
     },
     markdown: {
       shikiConfig: {
         theme: 'github-dark',
         wrap: true
       }
     }
   });
   ```

2. **Crear estructura de carpetas**:
   ```
   src/
   ├── components/
   │   ├── layout/
   │   │   ├── Header.astro
   │   │   ├── Footer.astro
   │   │   ├── Navigation.astro
   │   │   ├── MobileNav.astro
   │   │   ├── TableOfContents.astro
   │   │   └── PrevNextLinks.astro
   │   ├── content/
   │   │   ├── Callout.astro
   │   │   ├── CodeBlock.astro
   │   │   ├── QuickLinks.astro
   │   │   └── QuickLink.astro
   │   ├── home/
   │   │   ├── Hero.astro
   │   │   ├── Features.astro
   │   │   └── CodePreview.astro
   │   ├── ui/
   │   │   ├── Button.astro
   │   │   ├── Icon.astro
   │   │   ├── ThemeToggle.astro
   │   │   └── Search.astro
   │   └── changelog/
   │       └── ChangelogEntry.astro
   ├── content/
   │   ├── config.ts
   │   ├── docs/
   │   │   ├── getting-started/
   │   │   ├── core-language/
   │   │   ├── data-structures/
   │   │   ├── functional-programming/
   │   │   ├── mathematical-computing/
   │   │   ├── specialized-modules/
   │   │   ├── advanced-topics/
   │   │   └── reference/
   │   └── changelog/
   ├── layouts/
   │   ├── BaseLayout.astro
   │   ├── DocsLayout.astro
   │   ├── ChangelogLayout.astro
   │   └── HomeLayout.astro
   ├── lib/
   │   ├── navigation.ts
   │   ├── tableOfContents.ts
   │   └── search.ts
   ├── pages/
   │   ├── index.astro
   │   ├── docs/
   │   │   ├── index.astro
   │   │   └── [...slug].astro
   │   ├── changelog/
   │   │   ├── index.astro
   │   │   └── [...slug].astro
   │   └── 404.astro
   ├── styles/
   │   ├── global.css
   │   └── prism.css
   └── entrypoint.ts (Alpine.js entry)
   ```

3. **Crear Content Collections schemas** en `src/content/config.ts`

4. **Crear configuración de navegación** en `src/lib/navigation.ts`

5. **Crear estilos globales** con Tailwind 4.1+

6. **Crear layouts base**

7. **Crear componentes core**

8. **Migrar documentación** de `docs/language/` a `src/content/docs/`

---

## Información del Lenguaje Achronyme

### Identidad
- **Nombre**: Achronyme (SOC - Scientific Operations Calculator)
- **Extensión**: `.soc`
- **Paradigma**: Funcional, inmutable por defecto
- **Construido en**: Rust
- **Propósito**: Computación científica, DSP, álgebra lineal

### Tipos de Datos
- Number (64-bit float)
- Complex
- Tensor
- Vector
- Record
- Function
- Boolean
- String
- Edge (grafos)

### Características Clave
- Inmutabilidad por defecto (`mut` para mutables)
- Funciones de primera clase (`x => expr`)
- Recursión con `rec`
- Pattern matching con `match`
- Destructuring
- Sistema de módulos (import/export)
- Standard library rica (DSP, Linear Algebra, Statistics, Graph Theory)

---

## Documentación Existente (37 archivos en docs/language/)

### Core Language
- 00-index.md - Language Reference Overview
- 01-getting-started.md - Installation, REPL
- 02-syntax-basics.md - Fundamental Syntax
- 03-data-types.md - Numbers, Complex, Tensor, Vector, Record
- 04-operators.md - Arithmetic, Logical, Comparison
- 05-variables.md - Declaration, Scope, Shadowing
- 06-functions.md - Lambdas, Closures, Recursion
- 07-records.md - Object-like Structures
- 08-control-flow.md - Conditionals, Piecewise

### Data Structures
- 09-arrays-tensors.md - N-dimensional Arrays
- 10-indexing-slicing.md - Array Access, Ranges
- 20-strings.md - String Operations

### Functional Programming
- 11-higher-order-functions.md - Map, Filter, Reduce, Pipe
- 21-do-blocks.md - Multi-statement Blocks
- 22-recursion.md - Recursive Patterns

### Mathematical Computing
- 12-mathematical-functions.md - Trig, Exp, Log
- 13-linear-algebra.md - Vectors, Matrices
- 14-complex-numbers.md - Complex Arithmetic
- 15-numerical-analysis.md - Differentiation, Integration
- 16-statistics.md - Sum, Mean, Std Dev

### Specialized Modules
- 17-dsp.md - FFT, Convolution, Windows
- 18-graph-theory.md - Networks, Algorithms
- 19-optimization.md - Linear Programming
- 25-utilities.md - Output, Type Inspection

### Advanced Topics
- 23-best-practices.md - Code Style
- 24-examples.md - Complete Programs
- 25-performance-limitations.md - Stack Limits
- 26-mutability.md - Mutable Variables
- 27-io-persistence.md - File I/O
- 28-modules.md - Import/Export System
- 29-while-loops.md - Iterative Loops
- 30-gradual-type-system.md - Type Annotations

### New Features
- 35-error-handling.md - Error Management
- 36-pattern-matching.md - Match Expressions
- 37-destructuring.md - Extract Values

---

## Plan de Implementación Restante

### Fase 2: Configuración Core
1. Actualizar astro.config.mjs
2. Crear src/entrypoint.ts para Alpine.js
3. Crear src/styles/global.css con Tailwind 4.1+
4. Crear Content Collections schemas

### Fase 3: Layouts y Componentes
1. BaseLayout.astro (HTML skeleton)
2. DocsLayout.astro (sidebar + TOC)
3. Header.astro (logo, nav, theme toggle)
4. Navigation.astro (sidebar)
5. TableOfContents.astro (right sidebar)

### Fase 4: Contenido
1. Migrar 37 archivos markdown
2. Agregar frontmatter a cada archivo
3. Reorganizar en secciones lógicas
4. Crear sistema de changelog

### Fase 5: Features Interactivos
1. Search con Pagefind
2. Theme toggle (dark/light)
3. Mobile navigation
4. Code copy buttons

---

## Referencia de Estilo (basado en syntax-ts/)

### Colores Principales
- Sky/Cyan para acentos
- Slate para texto y fondos
- Gradientes para efectos visuales

### Componentes Clave
- Header sticky con blur
- Sidebar colapsable
- TOC con scroll tracking
- Callouts (note/warning)
- Code blocks con syntax highlighting
- Quick links con grid

### Tipografía
- Font sans: Inter
- Font display: Lexend
- Prose: @tailwindcss/typography

---

## Próximos Pasos al Reiniciar

1. Leer este archivo SESSION.md
2. Actualizar astro.config.mjs
3. Crear estructura de carpetas
4. Implementar Content Collections
5. Crear layouts base
6. Migrar documentación existente

