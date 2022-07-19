const permutationBacktracking = (arr, perm = []) => {
    if (arr.length == 0) {
        console.log(perm);
        perm = [];
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let currentChar = arr[i];
        let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
        
        permutationBacktracking(newArr, perm.concat(currentChar));
    }
}

//Testing
const arr = ['A', 'B', 'C'];
permutationBacktracking(arr);

//Time Complexity: O(n * n!)
//Space Complexity: O(n)