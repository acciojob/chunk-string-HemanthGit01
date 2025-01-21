function stringChop(str, size) {
  // Handle edge cases
  if (!str || size <= 0) return [];
  
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10);
alert(stringChop(str, size));
