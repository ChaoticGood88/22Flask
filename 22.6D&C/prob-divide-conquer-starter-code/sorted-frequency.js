function sortedFrequency(arr, num) {
    // Helper function to find the first occurrence of the number
    function findFirstOccurrence(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (arr[middle] === num) {
                result = middle;
                right = middle - 1; // Keep looking on the left side
            } else if (arr[middle] < num) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return result;
    }

    // Helper function to find the last occurrence of the number
    function findLastOccurrence(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (arr[middle] === num) {
                result = middle;
                left = middle + 1; // Keep looking on the right side
            } else if (arr[middle] < num) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return result;
    }

    let firstOccurrence = findFirstOccurrence(arr, num);
    if (firstOccurrence === -1) return -1; // If the number is not found

    let lastOccurrence = findLastOccurrence(arr, num);
    
    return lastOccurrence - firstOccurrence + 1;
}

module.exports = sortedFrequency