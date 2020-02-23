/*
Given an infinite amount of quarters, dimes, nickels, and pennies, write a function that returns the number of ways of representing n cents with coins.
*/

const availableCoins = [25, 10, 5, 1];
// const availableCoins = [1, 2, 3];

function count(length, total) {
  if (total === 0) {
    return 1;
  }

  if (total < 0) {
    return 0;
  }

  if (length <= 0 && total > 0) {
    return 0;
  }

  return (
    count(length - 1, total) + count(length, total - availableCoins[length - 1])
  );
}

function main(total) {
  console.log(count(availableCoins.length, total));
}

main(0);
main(1);
main(4);
main(5);
main(10);
main(20);
main(25);
