/*TODO: 
1. Add similarity attribute to arrays and sort similarBooks array according to similarity - DONE
2. Order array by similarity - DONE
3. Integrate with Frontend(redux)
 */

import fetch from "node-fetch";

let similarBooks = [{}];
let similarBooksTemp = [{}];
let similarBooksOrdered = [{}];

let searchTerm = "The";
let stringSimilarityPercentage;

const response = await fetch("https://gutendex.com/books?search=The");
const body = await response.json();
console.log(body);

/*
function similarityHandler() {
  similarBooks.splice(0, 1);
  similarBooks = similarBooks.map((book) => {
    let b = book["title"];
    stringSimilarityPercentage = stringSimilarity.compareTwoStrings(
      searchTerm,
      book["title"]
    );
    if (b.includes(searchTerm) || stringSimilarityPercentage > 0.5) {
      return (book = { ...book, similarity: stringSimilarityPercentage });
    } else {
      //console.log("no book exists");
    }
  });
  similarBooks = similarBooks.filter((e) => e != null);
  sortBySimilarity();
}
function sortBySimilarity() {
  similarBooks.sort(function (a, b) {
    return parseFloat(b.similarity) - parseFloat(a.similarity);
  });
  similarBooks.map((book) => {
    console.log(book.similarity);
  });
}*/
