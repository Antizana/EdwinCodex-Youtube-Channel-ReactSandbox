/**
 * implement the function findLargest(numbers) so it returns the largest number in the numbers integer array.
 * the array always contains at least one number
 */
function findLargest(numbers) {
  return Math.max(...numbers);
}

/**Implement the function computeClosesToZero(ts) which takes an array of temperature ts and returns the temperature closest to 0
 * if there are multiple temperatures that are equally close to 0, return the ppsitive temperture .
 */
/**
 *
 * @param {*} ts
 * @returns
 */
function computeClosesToZero(ts) {
  if (ts.length == 0) return 0;
  const closestToZero = Math.min(...ts);
  return closestToZero;
}

/** Given an array of integers return the closest to zero number */
function computeClosesToZeroAbs(ts) {
  if (ts.length == 0) return 0;
  const closestToZero = Math.abs(Math.min(...ts));
  return closestToZero;
}

/** convert an integer array into a positive integer array */
function convertToPositive(ts) {
  return ts.map((x) => (x > 0 ? x : 0));
}

//* Order and array of objects by the last name property */
function orderByLastName(people) {
  return people.sort((a, b) => a.lastName.localeCompare(b.lastName));
}
