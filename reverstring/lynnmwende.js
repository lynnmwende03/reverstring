function reverseString(str) {
    // Split the string into an array of characters
    let arr = str.split('');
    
    // Reverse the array
    arr.reverse();
    
    // Join the array back into a string
    let reversedStr = arr.join('');
    
    // Return the reversed string
    return reversedStr;
}

// Test cases
console.log(reverseString("hello"));   // Expected output: "olleh"
console.log(reverseString("12345"));   // Expected output: "54321"
console.log(reverseString(""));        // Expected output: ""

// Test cases
console.log(reverseString("rose"));   // Expected output: "esor"
console.log(reverseString("education"));   // Expected output: "noitacude"
console.log(reverseString(" lazarus"));        // Expected output: "surazal"


// Test cases
console.log(reverseString("lynn"));   // Expected output: "nnyl"
console.log(reverseString("monkey"));   // Expected output: "yeknom"
console.log(reverseString(" donkey"));        // Expected output: " yeknod"
