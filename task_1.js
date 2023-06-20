let arr = [1, 2, 3, 4, 2, 1, 5, 6, 4, 5];

const uniqueValues = (arr) => {
  let new_arr = [];
  arr.forEach(num => {
    if (!(num in new_arr)) {
      new_arr.push(num);
    }
  });
  return new_arr;
}

console.log(arr);
console.log(uniqueValues(arr));