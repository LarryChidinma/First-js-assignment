let library = [] 

//add book to the library
library.push({title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true});
library.push({title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true});
library.push({title: "1984", author: "George Orwell", yearPublished: 1949, available: false});
library.push({title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true});
console.log(library)

//update the availability of the book
library[2].available = true;
console.log(library);

library.splice(3, 1);
console.log(library)

const check = library[0].title;
console.log(check.includes("The Great Gatsby"));
// Avalibilty of first book changed 
library[0].available = false
console.log(library);
// Borrowed the first book
library.shift(0);
console.log(library);
// Adding a new book to the library 
library.unshift({title: "The catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true});
console.log(library);
// Extracting title into a single string 
const title = ["The catcher in the Rye", "To Kill a Mockingbird", "1984"];
title.join(",");
console.log(title);
// new array 
let newArrivals = library.slice(1);
console.log(newArrivals);