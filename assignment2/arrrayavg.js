const arrayAverage = (numbers) => {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum / numbers.length;
  };
  console.log(arrayAverage([1, 2, 3, 4, 5]));