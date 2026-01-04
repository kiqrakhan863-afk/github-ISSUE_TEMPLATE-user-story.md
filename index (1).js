// sentiment/index.js

// Import the 'natural' npm package
import natural from "natural";

// Example: Using natural's tokenizer
const tokenizer = new natural.WordTokenizer();
const sentence = "I love using Giftlink!";
const tokens = tokenizer.tokenize(sentence);

console.log("Tokenized sentence:", tokens);

// Example: Exporting for use elsewhere
export { tokenizer };