function shuffle(array) {

    let shuffled = [...array];

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * i + 1);

        [shuffled[j], shuffled[i]] = [shuffled[i], shuffled[j]]
    }

    return shuffled
}

//For the purpose of user debugging.
shuffle([1, 2, 3, 4, 5]);

module.exports = shuffle

// Fisher-Yates Shuffle (Knuth Shuffle)
// The Pattern
// text
// Start: [1, 2, 3, 4, 5]
//         [← unshuffled →] [shuffled]
        
// Loop i from last index down to 1:
//     j = random(0, i)  // Pick from unshuffled
//     swap(arr[i], arr[j])  // Move picked element to shuffled section
// Visual Mental Model
// text
// [ UNSHUFFLED | SHUFFLED ]
//       ↑            ↑
//     Pick         Place
//     from         at boundary
// The 3-Step Dance
// Partition: Left side = unshuffled (0 to i), Right side = shuffled (i+1 to end)

// Pick: Randomly select any element from unshuffled side

// Place: Swap it with element at index i (boundary)

// Why Reverse Loop?
// text
// i = 4: Pick from [0,1,2,3,4] → place at index 4
// i = 3: Pick from [0,1,2,3] → place at index 3
// i = 2: Pick from [0,1,2] → place at index 2
// i = 1: Pick from [0,1] → place at index 1
// i = 0: Done!
// The Key Formula
// javascript
// j = Math.floor(Math.random() * (i + 1))
// // (i + 1) = size of unshuffled portion
// // j ranges from 0 to i (includes current index!)
// Properties
// ✅ Unbiased: Every permutation equally likely

// ✅ In-place: O(1) extra space

// ✅ Efficient: O(n) time

// ✅ Elegant: Clean partition principle

// One-Liner Memory Hook
// "Pick from unshuffled, place at boundary, shrink unshuffled by one"

