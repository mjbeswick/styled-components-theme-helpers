import { styleString } from '../';

test('check value with no unit', () => {
  const result = styleString('width', 100);

  expect(result).toBe('width: 100px;');
});

test('check z-index', () => {
  const result = styleString('zIndex', 100);

  expect(result).toBe('z-index: 100;');
});

test('check value with no unit and default', () => {
  const result = styleString('width', 100, 'em');

  expect(result).toBe('width: 100em;');
});

test('check value array', () => {
  const result = styleString('width', [1, 2, 3, '100%'], 'em');

  expect(result).toBe('width: 1em 2em 3em 100%;');
});
