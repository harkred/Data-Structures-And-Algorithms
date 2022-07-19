const binary = (num) => {
    if (num == 0 || num == 1) {
        return num.toString();
    }
    return (num % 2).toString() + binary(Math.floor(num / 2));
}

//Testing
const numbers = [2, 3, 5, 233];

for (let i = 0; i < numbers.length; i++) {
    console.log(binary(numbers[i]));
}

//Time Complexity: O(log(n))
//Space Complexty: O(log(n))