/*
Write a function that takes an array containing two strings where each string represents keypresses separated by commas. For this problem, a keypress can be either a printable character or a backspace (represented by -B). Your function should determine if the two strings of keypresses are equivalent.

You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character. Consider two strings of keypresses equivalent if they produce the same printable string. For example:
checkEquivalentKeypresses(["a,b,c,d", "a,b,c,c,-B,d"]) // true
checkEquivalentKeypresses(["-B,-B,-B,c,c", "c,c"]) // true
checkEquivalentKeypresses(["", "a,-B,-B,a,-B,a,b,c,c,c,d"]) // false
*/

const checkEquivalentKeypresses = array => {
  const array1 = array[0].split(",");
  const array2 = array[1].split(",");

  const firstString = [];
  const secondString = [];

  array1.forEach(char => {
    if (char === "-B") {
      firstString.pop();
    } else {
      firstString.push(char);
    }
  });

  array2.forEach(char => {
    if (char === "-B") {
      secondString.pop();
    } else {
      secondString.push(char);
    }
  });

  return firstString.join() === secondString.join();
};

console.log(checkEquivalentKeypresses(["a,b,c,d", "a,b,c,c,-B,d"]));
console.log(checkEquivalentKeypresses(["-B,-B,-B,c,c", "c,c"]));
console.log(checkEquivalentKeypresses(["", "a,-B,-B,a,-B,a,b,c,c,c,d"]));
