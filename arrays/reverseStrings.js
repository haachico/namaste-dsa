
//leetcode 344;


//my soln

// const reverseStrings = (arr) => {

// let arrCopy = [...arr]

// let idx = 0;

// for (let i = arrCopy.length - 1; i >= 0; i --){

//     arr[idx] = arrCopy[i];
//     idx = idx + 1;
// }

// return arr

// }


//second soln by swapping
// const reverseStrings = (arr) => {


// for (let i = 0; i < Math.floor(arr.length / 2); i++){

//   [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
// }

// return arr

// }



//Akshay did the same - by swapping, he just used temp variabe

// let temp = arr[i];
// let arr[i]= arr[arr.length - 1 - i]
// let arr[arr.length - 1 - i] = temp



console.log(reverseStrings(['h', 'e', 'l', 'l', 'o']))

