//leetcode prob 27;

const removeElements = (nums, val) => {
  //two pointers?
  //one pointer to move ahead when number is not matched

  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
        nums[idx] = nums[i]
        idx = idx + 1;
    } 
  }


  return idx;
};

console.log(removeElements([1, 2, 3, 4, 4, 5, 6, 5], 4));


//Akshay's soln was also the same.

//basically idx pointer will start with where i started
//i pointer will keep moving ahead
//if arr[i] is not equal to val, then that arr[i] will com  at idx index place  of arr and idx will increase -- and repeat 
