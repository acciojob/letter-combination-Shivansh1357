function letterCombinations(digit) {
  //Complete the function
	const digitToLetters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  // Recursive function to generate combinations
  function generateCombinations(digits, index, currentCombination, combinations) {
    // Base case: If all digits have been processed, add the current combination to the result
    if (index === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    // Get the letters corresponding to the current digit
    const letters = digitToLetters[digits[index]];

    // Iterate through each letter and recursively generate combinations for the remaining digits
    for (let i = 0; i < letters.length; i++) {
      generateCombinations(
        digits,
        index + 1,
        currentCombination + letters[i],
        combinations
      );
    }
  }

  // Edge case: If the input is empty, return an empty array
  if (digits.length === 0) {
    return [];
  }

  // Initialize the array to store the combinations
  const combinations = [];

  // Start the recursive function to generate combinations
  generateCombinations(digits, 0, "", combinations);

  // Sort the combinations lexicographically
  combinations.sort();

  return combinations;

}

module.exports = letterCombinations;
