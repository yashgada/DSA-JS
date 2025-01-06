function twoSum(nums: number[], target: number): number[] {
    let map = {};
  let length = nums.length

  for (let i = 0; i < length; i++) {
    let complement = map[target-nums[i]]
    if (complement === undefined) map[nums[i]] = i;
    else return [i,complement]
  }
};