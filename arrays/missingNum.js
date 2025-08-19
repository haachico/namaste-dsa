

//my soln

//time complexity - oN2
 /// sort was o logn and double loop was oN2
 //// so bigger of the two

 //space complexity - oN

// const missingNum = (nums)=> {

//     let allNums = Array.from({length: nums.length}, (_, i) => i + 1);

//     let sortedNums = nums.sort((a,b)=> a -b)

//     for (let i = sortedNums[0]; i < allNums.length; i++){
//         if(!sortedNums.includes(allNums[i])) {
//             return allNums[i]
//         }
//     }

//        return 0

// }


//better solln

//time complexity - ON
//space complexity - O1

const missingNum = (nums) => {
  let n = nums.length; 
  let expected = (n * (n + 1)) / 2;
  let actual = nums.reduce((a, b) => a + b, 0);
  return expected - actual;
}

console.log(missingNum([0,1,3,2,5])); // 4





const res = missingNum([0,1,3,2,5])

console.log(res)

