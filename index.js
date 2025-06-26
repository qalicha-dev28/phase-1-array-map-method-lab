// Define the tutorials array globally
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

// Function to return title-cased tutorial names
function titleCased() {
  return tutorials.map(tutorial =>
    tutorial
      .split(" ") // Split the tutorial title into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(" ") // Rejoin words into a string
  );
}

// Export function for testing
module.exports = { titleCased };