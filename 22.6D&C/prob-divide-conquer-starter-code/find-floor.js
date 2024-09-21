function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === x) {
            return arr[middle]; // If x is found, it's the floor itself
        }
        if (arr[middle] < x) {
            floor = arr[middle]; // Update floor, since arr[middle] is a valid candidate
            left = middle + 1; // Search the right half for a closer value
        } else {
            right = middle - 1; // Search the left half
        }
    }

    return floor;
}

module.exports = findFloor