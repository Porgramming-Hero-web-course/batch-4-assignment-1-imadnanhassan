{
  //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  function sumArray(nums: number[]): number {
    let sum = 0;
    for (const i in nums) {
      sum += nums[i];
    }
    return sum;
  }

  // console.log(sumArray([1, 2, 3, 4, 5]));

  //
}
