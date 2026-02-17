// https://namastedev.com/practice/largest-number-formed

function formLargestNumber(arr) {
  //write your implementation here

  if (arr.every(el => el === 0)) {
    return "0"
  }

  return arr.map(String).sort((a, b) => (b + a) - (a + b)).join("")
}
const input = [3, 30, 34, 5, 9];
formLargestNumber(input);
module.exports = formLargestNumber;



// 🔢 Largest Number Pattern
// js
// nums.map(String).sort((a,b) => (b+a) - (a+b)).join('')
// 📌 Why not b-a?
// b-a compares values (30 > 3 → 30 first) ❌

// (b+a)-(a+b) compares concatenations ("330" > "303" → 3 first) ✓

// 🧠 The Trick
// For 3 vs 30: ask "Is '330' > '303'?" not "Is 3 > 30?"

// ⚠️ Edge case
// js
// [0,0] → "0" // not "00"
// Short & sweet for quick revision!