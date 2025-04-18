const repeatString = function(string, num) {

    if (num < 0) return "ERROR"; // Handle edge case

    let result = ""; // Initialize an empty string to build on
  
    for (let i = 0; i < num; i++) {
      result += string; // Add 'string' to result each time
    }
  
    return result; // Return the final repeated string
  };

// Do not edit below this line
module.exports = repeatString;
