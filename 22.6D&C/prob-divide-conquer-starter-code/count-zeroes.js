function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Edge case: if there are no zeroes
    if (arr[right] === 1) return 0;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        
        // Check if the middle is the first occurrence of zero
        if (arr[middle] === 0 && (middle === 0 || arr[middle - 1] === 1)) {
            return arr.length - middle;
        }
        // If the middle element is 1, search the right half
        else if (arr[middle] === 1) {
            left = middle + 1;
        }
        // Otherwise, search the left half
        else {
            right = middle - 1;
        }
    }

    return 0;
}

module.exports = countZeroes;
