import React, { Component } from "react";
/*
TODO: 
1. populate drop-down with all books from API
2. Collect data with text, reviews, and ratings
3. NLP to analyze input data and provide suggestions
4. Compare input book with database to suggest similar book


*/

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default class App extends Component {
  render() {
    const options = ["one", "two", "three"];

    return (
      <div>
        <main>
          <section>
            <Dropdown
              options={options}
              value="B"
              placeholder="Select an option"
            />
          </section>
        </main>
      </div>
    );
  }
}
