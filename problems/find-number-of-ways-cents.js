/*
Given an infinite amount of quarters, dimes, nickels, and pennies, write a function that returns the number of ways of representing n cents with coins.
*/

const availableCoins = [1, 5, 10, 25];
// const availableCoins = [1, 2, 3];

function count1(length, total) {
  if (total === 0) return 1;

  if (total < 0) return 0;

  if (length <= 0 && total > 0) return 0;

  return (
    count1(length - 1, total) +
    count1(length, total - availableCoins[length - 1])
  );
}

function count2(total, index) {
  if (total === 0) return 1;

  if (total < 0) return 0;

  let numberOfWays = 0;
  for (let i = index; i < availableCoins.length; i += 1) {
    numberOfWays += count2(total - availableCoins[i], i);
  }
  return numberOfWays;
}

function main(total) {
  console.log({
    total,
    count1: count1(availableCoins.length, total),
    count2: count2(total, 0)
  });
}

main(0);
main(1);
main(4);
main(5);
main(10);
main(20);
main(25);
