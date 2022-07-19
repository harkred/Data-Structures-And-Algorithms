const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    const left = mergeSort(leftArr);
    const right = mergeSort(rightArr);

    return merge(left, right);
}

const merge = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    const newArr = [];

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            newArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            newArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return newArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));;
}

//Testing
const arr = [2, 1, 0, 10, 12, 8, 9, 11];

console.log(mergeSort(arr));

//Time Complexity: O(nlog(n))
//Space Complexity: O(n)