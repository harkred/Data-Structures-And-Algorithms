//Implementing Linear Search Algorithm
//Time Complexity: O(n)
//Space Complexity: O(1)

const linearSearch = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return i;
        }
    }
    return -1;
}

//Verifying
const testCases = [
    [[4, 2, 1, 5, 8, 10], 4],
    [[1, 2, 3, 6, 7], 7],
    [[1, 2, 3], 2],
    [[1, 0, 5, 10], 8]
];

for (let i = 0; i < testCases.length; i++) {
    console.log(linearSearch(...testCases[i]));
}