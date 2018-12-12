import { themeStyle } from '../';

test('check style when undefined', () => {
  const theme = {};
  const result = themeStyle('width')({ theme });

  expect(result).toBe('');
});

test('check style with no units', () => {
  const theme = {
    width: 100
  };

  const result = themeStyle('width')({ theme });

  expect(result).toBe('width: 100px;');
});

test('check style with units', () => {
  const theme = {
    width: '100em'
  };

  const result = themeStyle('width')({ theme });

  expect(result).toBe('width: 100em;');
});
