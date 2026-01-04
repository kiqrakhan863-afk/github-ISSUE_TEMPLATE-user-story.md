// Import the 'natural' npm package
import natural from 'natural';

// Example usage: creating a tokenizer
const tokenizer = new natural.WordTokenizer();

const text = "I love using the natural package for sentiment analysis!";
const tokens = tokenizer.tokenize(text);

console.log("Tokens:", tokens);

// You could extend this for sentiment analysis using natural