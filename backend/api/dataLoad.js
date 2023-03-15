/*TODO: 
1. Add similarity attribute to arrays and sort similarBooks array according to similarity - DONE
2. Order array by similarity and integrate with frontend
 */

var stringSimilarity = require("string-similarity");
var getJSON = require("get-json");
const { stringify } = require("querystring");

let similarBooks = [{}];
let similarBooksOrd = [{}];

let searchTerm = "Bhe Pxpedition Mf Iumphry Dlinker";
let stringSimilarityPercentage;

getJSON("https://gutendex.com/books/", function (error, response) {
  for (let i = 0; i < 32; i++) {
    similarBooks.push(response.results[i]);
  }
  similarityHandler();
});

function similarityHandler() {
  similarBooks.splice(0, 1);
  similarBooksOrd = similarBooks.map((book) => {
    let b = book["title"];
    stringSimilarityPercentage = stringSimilarity.compareTwoStrings(
      searchTerm,
      book["title"]
    );
    if (b.includes(searchTerm) || stringSimilarityPercentage > 0.5) {
      book = { ...book, similarity: stringSimilarityPercentage };
      console.log(book["similarity"]);
      console.log(book["title"]);
    } else {
      //console.log("no book exists");
    }
  });
}
