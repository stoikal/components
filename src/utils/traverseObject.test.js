import traverseObject from './traverseObject';

test('able to traverse valid path', () => {
  const obj = {
    a: {
      b: {
        c: 'c',
      },
    },
  };

  expect(traverseObject(obj, ['a', 'b', 'c']))
    .toBe('c');
});

test('able to traverse valid path with resolver', () => {
  const obj = {
    a: {
      b: {
        c: {
          index: 'c',
          d: {
            e: 'e',
          },
        },
      },
    },
  };

  expect(traverseObject(obj, ['a', 'b', 'c'], { resolver: 'index' }))
    .toBe('c');
});

test('able to traverse valid path with validation', () => {
  const obj = {
    a: {
      b: {
        c: {
          index: 'c',
          d: 'd',
        },
      },
    },
  };

  const validate = (parent) => !parent.index;

  expect(traverseObject(obj, ['a', 'b', 'c'], { validate }))
    .toEqual({ index: 'c', d: 'd' });
  expect(traverseObject(obj, ['a', 'b', 'c', 'd'], { validate }))
    .toBe(undefined);
});

test('return undefined if some property in the chain is not found', () => {
  const obj = {
    a: {
      b: {
        c: {
          d: 'd',
        },
      },
    },
  };

  expect(traverseObject(obj, ['a', 'x', 'c', 'd']))
    .toBe(undefined);
});
