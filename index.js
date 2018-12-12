import { get } from 'lodash';
import { paramCase } from 'change-case';

/**
 * Return a CSS style block
 *
 * @param {*} property CSS property
 * @param {*} value values for style {string,array,number}
 * @param {string} [units='px'] default units
 * @returns
 */

export const styleString = (property, value, units = 'px') => {
  const cssProperty = paramCase(property);

  if (typeof value === 'string') {
    return `${cssProperty}: ${value};`;
  }

  if (typeof value === 'number' && cssProperty.includes('index')) {
    return `${cssProperty}: ${value};`;
  }

  if (typeof value === 'number') {
    return `${cssProperty}: ${value + units};`;
  }

  if (Array.isArray(value)) {
    const values = value
      .map(val => {
        if (typeof val === 'string') {
          return val;
        }

        if (typeof val === 'number') {
          return `${val + units}`;
        }
      })
      .join(' ');

    return `${cssProperty}: ${values};`;
  }
};

/**
 * Get a styled component theme property
 *
 * @param {*} path dot delimited path to property in context.style
 * @param {string} [units='px']
 */

export const themeProp = (path, units = 'px', defaultValue = '') => props => {
  const value = get(props.theme, path, defaultValue);

  if (typeof value === 'number') {
    return `${value + units}`;
  }

  return value;
};

/**
 * Return a styled component theme property as a CSS style block
 *
 * @param {*} path
 * @param {string} [units='px']
 */

export const themeStyle = (path, units = 'px') => props => {
  const styleData = get(props.theme, path);

  if (!styleData) {
    return '';
  }

  if (styleData.constructor === Object) {
    return Object.entries(styleData)
      .map(([key, value]) => {
        return styleString(key, value, units);
      })
      .join('\n')
      .concat(';');
  }

  return styleString(path, styleData, units);
};
