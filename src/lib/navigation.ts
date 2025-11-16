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
      { title: 'Syntax Basics', href: '/docs/getting-started/syntax-basics' },
    ],
  },
  {
    title: 'Core Language',
    items: [
      { title: 'Data Types', href: '/docs/core-language/data-types' },
      { title: 'Operators', href: '/docs/core-language/operators' },
      { title: 'Variables', href: '/docs/core-language/variables' },
      { title: 'Functions', href: '/docs/core-language/functions' },
      { title: 'Control Flow', href: '/docs/core-language/control-flow' },
    ],
  },
  {
    title: 'Data Structures',
    items: [
      { title: 'Arrays & Tensors', href: '/docs/data-structures/arrays-tensors' },
      { title: 'Indexing & Slicing', href: '/docs/data-structures/indexing-slicing' },
      { title: 'Records', href: '/docs/data-structures/records' },
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
