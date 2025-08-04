const prices = [7, 1, 5, 3, 6, 4];


//oN2 time complexity;

// const maxProfit = (arr) => {
//   let profit = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if ((arr[j] - arr[i]) > 0) {
//         profit = profit > (arr[j] - arr[i]) ? profit : (arr[j] - arr[i]);
//       }

//     }
//   }

//   return profit;
// };


//oN (optimised fo this prob) soln
const maxProfit = (arr) => {
  let min = arr[0];
  let profit = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    min = min > arr[i + 1] ? arr[i + 1] : min;

    profit = profit > arr[i + 1] - min ? profit : arr[i + 1] - min;
  }

  return profit;
};

console.log(maxProfit(prices));
