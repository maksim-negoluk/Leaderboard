const convertNumberToPlace = (number: number): string => {
  if (number === 1) return '1st';
  if (number === 2) return '2nd';
  if (number === 3) return '3rd';
  return `${number}th`;
};

const definePositionShift = (
  array: number[],
  currentValue: number,
  previousValue: number
): number => {
  let ascending = false;
  if (previousValue === currentValue) return 0;
  if (previousValue < currentValue)
    [previousValue, currentValue, ascending] = [currentValue, previousValue, true];
  const shift = array.filter((element) => element > currentValue && element < previousValue).length;
  return ascending ? shift : -shift;
};

export { convertNumberToPlace, definePositionShift };
