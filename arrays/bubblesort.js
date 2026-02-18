function bubbleSort(arr) {
    // Outer loop: n-1 passes needed
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;  // Optimization: track if swaps happened
        
        // Inner loop: compare adjacent elements
        // arr.length-1-i → last i elements already sorted
        for (let j = 0; j < arr.length - 1 - i; j++) {
            
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap using destructuring
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no swaps, array is already sorted!
        if (!swapped) break;
    }
    return arr;
}

// 📌 What is Bubble Sort?
// Repeatedly steps through array, compares adjacent elements, swaps them if in wrong order. Larger elements "bubble up" to end.

// 🧠 Memory Hook
// "Bubbles rise to the top" - Each pass, largest unsorted element bubbles to its correct position at the end.

// 💡 Key Points
// ✅ Stable sort (equal elements keep order)

// ✅ In-place (O(1) extra space)

// ✅ Simple to understand & implement

// ❌ Slow for large arrays (O(n²))