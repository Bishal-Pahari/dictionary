import { Component } from "react";
import Search from "./components/search/search.component";
import Button from "./components/button/button.component";
import Card from "./components/card/card.component"; // Import the Card component

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
      error: "",
      searchWord: "Dictionary",
    };
  }

  componentDidMount() {
    this.fetchDictionaryData();
  }

  fetchDictionaryData = () => {
    const { searchWord } = this.state;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => response.json())
      .then((dictionaryWord) =>
        this.setState({ words: dictionaryWord, error: "" })
      )
      .catch((error) => {
        this.setState({ error: "This word doesn't exist" });
        console.log(error);
      });
  };

  onSearchChange = (event) => {
    const searchWord = event.target.value;
    this.setState({ searchWord });
  };

  handleSearchClick = () => {
    this.fetchDictionaryData();
  };

  render() {
    const { words, error } = this.state;

    return (
      <>
        <div className="app">
          <h1 className="app-title">Dictionary</h1>
          <Search
            className="search-field"
            placeholder="Search for a word..."
            onSearchChange={this.onSearchChange}
          />
          <Button
            className="search-button"
            handleSearchClick={this.handleSearchClick}
          />
          {error ? <p className="error-message">{error}</p> : null}
          {/* Render the Card component */}
          {words.length > 0 && <Card words={words} />}
        </div>
      </>
    );
  }
}

export default App;
