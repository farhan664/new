function checkPalindrome(str) {
    let cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
  }
  let testString = " A lady   ydal a";
  console.log(checkPalindrome(testString));