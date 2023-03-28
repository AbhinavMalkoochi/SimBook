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
import fetch from "node-fetch";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let url = "https://gutendex.com/books?search=The";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const body = await response.json();
        setBooks(body);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <main>
        <section>
          <ol>
            {books.map((book) => (
              <li>{book}</li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
