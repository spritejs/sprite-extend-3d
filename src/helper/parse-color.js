import {Color} from 'spritejs';

export function parseColor(colors) {
  if(Array.isArray(colors)) {
    return colors.map((c) => {
      if(typeof c === 'string') {
        return new Color(c);
      }
      return c;
    });
  }
  return typeof colors === 'string' ? new Color(colors) : colors;
}