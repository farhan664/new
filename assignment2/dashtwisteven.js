
  const dashTwixt2Evens = (num) => {
  let numString = num.toString();
  let result = '';
  for (let i = 0; i < numString.length; i++) {
    let currentDigit = parseInt(numString[i]);
    result += currentDigit;
    if (currentDigit % 2 === 0 && i < numString.length - 1 && parseInt(numString[i + 1]) % 2 === 0) {
      result += '-';
    }
  }
  return result;
};
console.log(dashTwixt2Evens(2445667));
