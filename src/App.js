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
import ReactSearchBox from "react-search-box";
import AsyncSelect from "react-select/async";

import Select from "react-select";
import { isModuleNamespaceObject } from "util/types";
export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState([]);
  const [selectedBook, setSelectedBook] = useState();

  function selectBook(book) {
    setSelectedBook(book);
  }
  useEffect(() => {
    let url = "https://gutendex.com/books/?page=2";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const filterData = async () => {
      let selectBooks = books.map(function (book) {
        return book.title;
      });
      let modSelBook;
      selectBooks.forEach(function (book) {
        modSelBook.push({ label: book, value: book });
      });
      console.log(modSelBook);
      setBookTitle(modSelBook);
    };
    fetchData();
    filterData();
  }, []);

  return (
    <div>
      {bookTitle.length > 0 && (
        <div>
          <AsyncSelect options={bookTitle} />
        </div>
      )}
    </div>
  );
}
