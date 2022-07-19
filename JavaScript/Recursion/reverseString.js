const reverseString = (string) => {
    if (string === "") {
        return string;
    }
    return reverseString(string.slice(1, string.length)) + string[0];
}

//Testing
const strings = ["hello world", "beez a viz", "odlid"];

for (let i = 0; i < strings.length; i++) {
    console.log(reverseString(strings[i]));
}

//Time complexity: O(n)
//Space complexity: O(n)