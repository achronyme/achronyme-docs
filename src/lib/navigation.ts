export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/getting-started/introduction' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { title: 'REPL', href: '/docs/getting-started/repl' },
    ],
  },
  {
    title: 'Core Language',
    items: [
      { title: 'Syntax Basics', href: '/docs/core-language/syntax-basics' },
      { title: 'Data Types', href: '/docs/core-language/data-types' },
      { title: 'Operators', href: '/docs/core-language/operators' },
      { title: 'Variables', href: '/docs/core-language/variables' },
      { title: 'Functions', href: '/docs/core-language/functions' },
      { title: 'Records', href: '/docs/core-language/records' },
      { title: 'Control Flow', href: '/docs/core-language/control-flow' },
    ],
  },
  {
    title: 'Data Structures',
    items: [
      { title: 'Arrays & Tensors', href: '/docs/data-structures/arrays-tensors' },
      { title: 'Indexing & Slicing', href: '/docs/data-structures/indexing-slicing' },
      { title: 'Strings', href: '/docs/data-structures/strings' },
    ],
  },
  {
    title: 'Functional Programming',
    items: [
      { title: 'Higher-Order Functions', href: '/docs/functional-programming/higher-order-functions' },
      { title: 'Do Blocks', href: '/docs/functional-programming/do-blocks' },
      { title: 'Recursion', href: '/docs/functional-programming/recursion' },
    ],
  },
  {
    title: 'Mathematical Computing',
    items: [
      { title: 'Mathematical Functions', href: '/docs/mathematical-computing/mathematical-functions' },
      { title: 'Linear Algebra', href: '/docs/mathematical-computing/linear-algebra' },
      { title: 'Complex Numbers', href: '/docs/mathematical-computing/complex-numbers' },
      { title: 'Numerical Analysis', href: '/docs/mathematical-computing/numerical-analysis' },
      { title: 'Statistics', href: '/docs/mathematical-computing/statistics' },
    ],
  },
  {
    title: 'Specialized Modules',
    items: [
      { title: 'DSP', href: '/docs/specialized-modules/dsp' },
      { title: 'Graph Theory', href: '/docs/specialized-modules/graph-theory' },
      { title: 'Optimization', href: '/docs/specialized-modules/optimization' },
      { title: 'Utilities', href: '/docs/specialized-modules/utilities' },
    ],
  },
  {
    title: 'Advanced Topics',
    items: [
      { title: 'Best Practices', href: '/docs/advanced-topics/best-practices' },
      { title: 'Examples', href: '/docs/advanced-topics/examples' },
      { title: 'Performance', href: '/docs/advanced-topics/performance' },
      { title: 'Mutability', href: '/docs/advanced-topics/mutability' },
      { title: 'I/O & Persistence', href: '/docs/advanced-topics/io-persistence' },
      { title: 'Modules', href: '/docs/advanced-topics/modules' },
      { title: 'While Loops', href: '/docs/advanced-topics/while-loops' },
      { title: 'Type System', href: '/docs/advanced-topics/type-system' },
      { title: 'Error Handling', href: '/docs/advanced-topics/error-handling' },
      { title: 'Pattern Matching', href: '/docs/advanced-topics/pattern-matching' },
      { title: 'Destructuring', href: '/docs/advanced-topics/destructuring' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { title: 'Language Reference', href: '/docs/reference/language-reference' },
      { title: 'Standard Library', href: '/docs/reference/standard-library' },
      { title: 'CLI Reference', href: '/docs/reference/cli-reference' },
    ],
  },
];

export function findCurrentSection(pathname: string): NavSection | undefined {
  return navigation.find(section =>
    section.items.some(item => pathname === item.href || pathname.startsWith(item.href + '/'))
  );
}

export function findPrevNext(pathname: string): { prev?: NavItem; next?: NavItem } {
  const allItems = navigation.flatMap(section => section.items);
  const currentIndex = allItems.findIndex(item => pathname === item.href);

  if (currentIndex === -1) {
    return {};
  }

  return {
    prev: currentIndex > 0 ? allItems[currentIndex - 1] : undefined,
    next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : undefined,
  };
}
