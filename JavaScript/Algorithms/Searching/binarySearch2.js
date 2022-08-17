//Recursive Binary Search

const binarySearch = (arr, elem, start = 0, end = arr.length - 1) => {
    if (start > end) {
        return - 1;
    }
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == elem) {
        return mid;
    } else if (arr[mid] > elem) {
        return binarySearch(arr, elem, start, mid - 1);
    } else {
        return binarySearch(arr, elem, mid + 1, end);
    }
}

//Verifying
const testCases = [
    [[1, 2, 3, 4, 5], 1],
    [[2, 4, 5, 9], 9],
    [[1, 3, 4, 5, 7], 4],
    [[1, 2, 4, 8, 16], 0]
];

for (let i = 0; i < testCases.length; i++) {
    console.log(binarySearch(...testCases[i]));
}