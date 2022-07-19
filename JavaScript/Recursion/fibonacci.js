const fib = (n) => {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];

//Testing
for (let i = 0; i < data.length; i++) {
    console.log(fib(data[i]));
}

//Time Complexity: O(2^n)
//Space Complexity: O(n)