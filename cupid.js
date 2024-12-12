function interpolateArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i]);
    result.push((arr[i] + arr[i + 1]) / 2);
  }
  result.push(arr[arr.length - 1]);
  return result;
}

console.log(interpolateArray([1, 5])); // Output: [1, 3, 5]
console.log(interpolateArray([10, 20, 30])); // Output: [10, 15, 20, 25, 30]
