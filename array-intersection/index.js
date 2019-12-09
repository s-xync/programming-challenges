/*
Write a function, FindIntersection, that reads an array of strings which will contain two elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a string of numbers that occur in both elements of the input array in sorted order. If there is no intersection, return the string "false".

For example: if the input array is ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] the output string should be "1, 4, 13" because those numbers appear in both strings. The array given will not be empty, and each string inside the array will be of numbers sorted in ascending order and may contain negative numbers.
*/

const FindIntersection = array => {
  const commonNumbers = [];

  const array1 = array[0].split(", ").map(num => Number(num));
  const array2 = array[1].split(", ").map(num => Number(num));

  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      index1 += 1;
    } else if (array2[index2] < array1[index1]) {
      index2 += 1;
    } else {
      commonNumbers.push(array1[index1]);
      index1 += 1;
      index2 += 1;
    }
  }

  return commonNumbers.join(", ");
};

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
