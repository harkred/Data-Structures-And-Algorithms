const isPalindrome = (str) => {
    if (str.length == 0 || str.length == 1) {
        return true;
    }
    else if (str[0] == str[str.length - 1]) {
        
        return isPalindrome(str.slice(1, str.length - 1));
    }
    return false;
}

//Testing
const strLst = ["malayalam", "jake", "level", "eyes"];

for (let i = 0; i < strLst.length; i++) {
    console.log(isPalindrome(strLst[i]));
}

//Time Complexity: O(log(n))
//Space Complexity: O(log(n))