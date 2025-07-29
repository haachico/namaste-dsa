//leetcode prob no 26

//my code

// const removeDuplicates = (arr) => {


//     let idx = 0;
//     for (let i =0; i < arr.length; i++){
//      if(arr[i] !== arr[i+1]){
//       arr[idx] = arr[i]
//       idx = idx + 1
//      }
//     }

//     return idx;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: 5

//akshay's codd

const removeDuplicates = (arr)=> {

 let x = 0;

 for (let i = 0; i < arr.length; i++){
    if(arr[i]> arr[x]){
        x = x + 1
        arr[x] = arr[i]
    }
 }

 return x + 1
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: 5


// chat gpt verdict - 

// Which is better?
// First one is cleaner because it doesn’t rely on checking arr[i+1] (avoids out-of-bound).

// Second one works but is less preferred in interviews because of that pattern.


// if (i === 0 || arr[i] !== arr[i - 1]) { ... }
// //use this in my soln to avoid going outside arr boundary
