function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        // If the middle element is the target number
        if (arr[middle] === num) return middle;

        // Determine if the left side is sorted
        if (arr[left] <= arr[middle]) {
            // Check if the target is within the left sorted portion
            if (num >= arr[left] && num < arr[middle]) {
                right = middle - 1; // Search left side
            } else {
                left = middle + 1; // Search right side
            }
        } 
        // Otherwise, the right side must be sorted
        else {
            // Check if the target is within the right sorted portion
            if (num > arr[middle] && num <= arr[right]) {
                left = middle + 1; // Search right side
            } else {
                right = middle - 1; // Search left side
            }
        }
    }

    return -1; // If the target is not found
}

module.exports = findRotatedIndex