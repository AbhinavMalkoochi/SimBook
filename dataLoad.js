/*TODO: 
1. Add similarity attribute to arrays and sort similarBooks array according to similarity - DONE
2. Order array by similarity - DONE
3. Integrate with Frontend(redux)
 */

let similarBooks = [{}];
let similarBooksTemp = [{}];
let similarBooksOrdered = [{}];

let searchTerm = "The";
let stringSimilarityPercentage;

let url = "https://gutendex.com/books?search=The";
try {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
} catch (error) {
  console.log("error", error);
}

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
