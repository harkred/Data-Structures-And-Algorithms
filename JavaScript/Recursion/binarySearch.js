const binarySearch = (arr, start, end, search) => {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == search) {
        return mid;
    } else if(arr[mid] > search) {
        return binarySearch(arr, start, mid - 1, search);
    } else if (arr[mid] < search) {
        return binarySearch(arr, mid + 1, end, search);
    }
}

//Testing
const arr = [2, 5, 7, 9, 11, 18, 23, 25];

console.log(binarySearch(arr, 0, arr.length, 7));
console.log(binarySearch(arr, 0, arr.length, 11));
console.log(binarySearch(arr, 0, arr.length, 8));

//Time Complexity: O(log(n))
//Space Complexity: O(log(n))