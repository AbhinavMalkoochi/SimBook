/*
TODO: 
1. populate drop-down with all books from API
2. Collect data with text, reviews, and ratings
3. NLP to analyze input data and provide suggestions
4. Compare input book with database to suggest similar book
ML: input data with five hundred books with outputs containing percentages(or rating 1-10) in various literary categories. 
- Then predict output of collection of books and attach the categories percentages to the book to compare
*/
import React, { useState, Component, useEffect } from "react";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let url = "https://gutendex.com/books/?page=2";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.results);
        console.log(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {books.length > 0 && (
        <ul>
          {books.map((user) => (
            <div>
              <ol>{user.title}</ol>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
