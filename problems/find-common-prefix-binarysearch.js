/**
write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix return an empty string

commonPrefix(["flower","flow","flight"]) // output: "fl"
commonPrefix(["dog","racecar","car"]) // output: ""
 */

function findMinLength(stringArray = []) {
  let minLength = Number.MAX_SAFE_INTEGER;
  stringArray.forEach(string => {
    if (string.length < minLength) {
      minLength = string.length;
    }
  });
  return minLength;
}

function checkAllStringsForMatch(stringArray = [], singleString, start, end) {
  for (let j = 0; j < stringArray.length; j += 1) {
    const string = stringArray[j];
    for (let i = start; i <= end; i += 1) {
      if (string[i] !== singleString[i]) return false;
    }
  }
  return true;
}

function commonPrefix(stringArray = []) {
  let prefix = "";
  if (stringArray.length === 0) return prefix;
  const minLength = findMinLength(stringArray);

  let low = 0;
  let high = minLength;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (checkAllStringsForMatch(stringArray, stringArray[0], low, mid)) {
      prefix = `${prefix}${stringArray[0].substr(low, mid - low + 1)}`;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return prefix;
}

console.log(commonPrefix(["flower", "flow", "flight"]));
console.log(commonPrefix(["dog", "racecar", "car"]));
console.log(commonPrefix([]));
console.log(commonPrefix(["asdg"]));
