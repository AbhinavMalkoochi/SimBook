import React, { useState, Component, useEffect } from "react"; /*
TODO: 
1. populate drop-down with all books from API
2. Collect data with text, reviews, and ratings
3. NLP to analyze input data and provide suggestions
4. Compare input book with database to suggest similar book

ML: input data with five hundred books with outputs containing percentages(or rating 1-10) in various literary categories. 
- Then predict output of collection of books and attach the categories percentages to the book to compare

*/

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
//import { searchBooks } from "../backend/api/dataLoad";
export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [book, setBook] = useState("");

  const options = ["one", "two", "three"];
  const searchBar = () => {};
  /*
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
*/
  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }
  useEffect(() => {
    // setBook(searchBooks(searchInput));
  }, []);
  return (
    <div>
      <main>
        <section>
          <input
            type="text"
            placeholder="Search for books"
            onChange={handleChange}
            value={searchInput}
          />
        </section>
      </main>
    </div>
  );
}
