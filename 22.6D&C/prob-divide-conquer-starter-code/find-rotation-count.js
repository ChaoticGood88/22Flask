function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated at all
    if (arr[left] < arr[right]) return 0;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        // Check if middle is the minimum element
        if (arr[middle] > arr[middle + 1]) return middle + 1;
        if (arr[middle - 1] > arr[middle]) return middle;

        // Decide whether to go left or right
        if (arr[middle] >= arr[left]) {
            left = middle + 1; // Search the right half
        } else {
            right = middle - 1; // Search the left half
        }
    }

    return 0;
}

module.exports = findRotationCount