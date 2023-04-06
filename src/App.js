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
import Async, { useAsync } from "react-select/async";
import Select from "react-select";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState([{}]);
  const [selectedBook, setSelectedBook] = useState();
  /*
  useEffect(() => {
    let dataResult = [];

    const fetchData = async () => {
      try {
        let url = "https://gutendex.com/books/?page=4";
        const response = await fetch(url);
        const data = await response.json();
        dataResult = data.results;
      } catch (error) {
        // console.log(error);
      }

      let selectBooks = dataResult.map(function (book) {
        return book.title;
      });

      let modSelBook = [];
      selectBooks.forEach(function (book) {
        modSelBook.push({ label: book, value: book });
      });

      setBookTitle(modSelBook);
      return modSelBook;
    };

    fetchData();
  }, []);*/
  const searchBooksHandler = async () => {
    let dataResult = [];
    try {
      let url = `https://gutendex.com/books?search=${searchInput}`;
      const response = await fetch(url);
      const data = await response.json();
      dataResult = data.results;
      //console.log(dataResult);
    } catch (error) {
      //console.log(error);
    }
    let selectBooks = dataResult.map(function (book) {
      return book.title;
    });
    console.log(selectBooks);
    let modSelBook = [];
    selectBooks.forEach(function (book) {
      modSelBook.push({ label: book, value: book });
    });
    //console.log("this is a test ");
    console.log(modSelBook);
    setBooks(modSelBook);
    return modSelBook;
  };

  const loadOptions = async () => {
    const filteredBooks = await searchBooksHandler();
    return filteredBooks;
  };
  return (
    <div>
      {bookTitle.length > 0 && (
        <div>
          <AsyncSelect
            defaultOptions
            loadOptions={loadOptions}
            onInputChange={(value) => setSearchInput(value)}
          />
        </div>
      )}
    </div>
  );
}
