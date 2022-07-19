const sumUptoN = (n) => {
    if (n == 1) {
        return n;
    }
    return n + sumUptoN(n - 1);
}

//Testing
const nums = [10, 5, 20, 100];

for (let i = 0; i < nums.length; i++) {
    console.log(sumUptoN(nums[i]));
}

//Time Complexity: O(n)
//Space Complexity: O(n)