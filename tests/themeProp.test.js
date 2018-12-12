import { themeProp } from '..';

test('check prop when undefined', () => {
  const theme = {};
  const result = themeProp('width')({ theme });

  expect(result).toBe('');
});

test('check prop with no units', () => {
  const theme = {
    width: 100
  };

  const result = themeProp('width')({ theme });

  expect(result).toBe('100px');
});

test('check prop with units', () => {
  const theme = {
    width: '100em'
  };

  const result = themeProp('width')({ theme });

  expect(result).toBe('100em');
});
