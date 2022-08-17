//Iterative Binary search
//Time Complexity: O(log(n))
//Space Complexity: O(1)

const binarySearch = (arr, elem) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] == elem) {
            return mid;
        } else if (arr[mid] > elem) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
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