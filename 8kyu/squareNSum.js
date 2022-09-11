// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My solution

const squareSum = numbers => numbers.reduce((a,b) => a + Math.pow(b,2),0)