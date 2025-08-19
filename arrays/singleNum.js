//my soln
// 1️⃣ Time Complexity

// reduce loop

// Iterates over nums once → O(n)

// Updating acc[curr] is O(1) per iteration
// ✅ Total: O(n)

// Object.keys(numsCount)

// Creates an array of the keys in numsCount → worst-case size is n → O(n)

// find over keys array

// In the worst case, it may scan all keys → O(n)

// Overall time complexity:

// 𝑂
// (
// 𝑛
// )
// +
// 𝑂
// (
// 𝑛
// )
// +
// 𝑂
// (
// 𝑛
// )
// =
// 𝑂
// (
// 𝑛
// )
// O(n)+O(n)+O(n)=O(n)

// So O(n) overall.

// 2️⃣ Space Complexity

// numsCount object

// Stores counts for each unique number → worst-case n unique numbers → O(n)

// Object.keys(numsCount)

// Creates an array of length equal to number of unique numbers → O(n)

// Overall space complexity: O(n)


const singleNum = (nums)=> {

const numsCount = nums.reduce((acc, curr)=> {

    if(acc[curr]) {
        acc[curr] = acc[curr] + 1
    } else {
        acc[curr] = 1
    }

    return acc

}, {})


 return Number(Object.keys(numsCount).find(key=> {
   return numsCount[key] ===1
}))

}

//better soln using XOR bitwise, always use this to remove duplicates
// works like this - 0 0 -> 0, 1 1-> 0, 1 0 -> 1, 0 1-> 1



// XOR properties that matter:

// a ^ a = 0

// Any number XORed with itself becomes 0.

// Example: 5 ^ 5 = 0

// a ^ 0 = a

// Any number XORed with 0 stays the same.

// Example: 5 ^ 0 = 5

// Commutative & associative:

// Order doesn’t matter: a ^ b ^ a = a ^ a ^ b = 0 ^ b = b

// Step-by-step example

// Array: [4, 1, 2, 1, 2]

// We do result ^= num for each element:

// result = 0 ^ 4 = 4

// result = 4 ^ 1 = 5

// result = 5 ^ 2 = 7

// result = 7 ^ 1 = 6

// result = 6 ^ 2 = 4

// ✅ The duplicates (1 and 2) “cancel out”:

// 1 ^ 1 = 0

// 2 ^ 2 = 0

// And 0 ^ 4 = 4 → the single number remains.


// So XOR doesn’t remove duplicates from the array itself, it just cancels them mathematically while combining them.


const singleNum = (nums) => {
  let result = 0;
  for (let num of nums) {
    result ^= num; // XOR with current number
  }
  return result;
}

console.log(singleNum([4,1,2,1,2])); // 4
console.log(singleNum([2,2,3]));     // 3


const res = singleNum([4,1,2,1,2])

console.log(res)