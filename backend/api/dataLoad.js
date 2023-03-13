//TODO: Add similarity attribute to arrays and sort similarBooks array according to similarity

var stringSimilarity = require("string-similarity");
/*const fs = require("fs");

let b = JSON.parse(fs.readFileSync("test.json"));
console.log(b.results[0].title);
//console.log(a.results[0].title);
const fetch = require("node-fetch");

let url = "https://www.gutendex.com/books/";

let settings = { method: "Get" };
let a;
fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    a = json;
  });
let b = JSON.parse(a);
console.log(b.results[0].title);*/
var getJSON = require("get-json");
const { stringify } = require("querystring");
let a;
let similarBooks = [{}];
let searchTerm = "Bhe Pxpedition Mf Iumphry Dlinker";
let stringSimilarityPercentage;
getJSON("https://gutendex.com/books/", function (error, response) {
  for (let i = 0; i < 32; i++) {
    let b = response.results[i].title;
    stringSimilarityPercentage = stringSimilarity.compareTwoStrings(
      searchTerm,
      response.results[i].title
    );
    if (b.includes(searchTerm) || stringSimilarityPercentage > 0.5) {
      similarBooks.push(response.results[i]);
      similarBooks[i]["Similarity"] = stringSimilarityPercentage;
    } else {
      console.log("no book exists");
    }
  }
  similarBooksPrint();
});
function similarBooksPrint() {
  console.log("This is a similar book");
  console.log(similarBooks.similarity);
  console.log("Percentage Similar" + stringSimilarityPercentage);
}

/*
export async function searchBooks(searchInput: string) {
  getJSON(
    "https://gutendex.com/books?search=dickens%20great",
    function (error, response) {
      return response.author;
    }
  );
}*/
