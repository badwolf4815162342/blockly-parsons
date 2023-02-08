export function nestedCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

export function filterInPlace(array, predicate) {
  let end = 0;

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];

    if (predicate(obj)) {
      // eslint-disable-next-line no-param-reassign
      array[end++] = obj;
    }
  }
  // eslint-disable-next-line no-param-reassign
  array.length = end;
}
