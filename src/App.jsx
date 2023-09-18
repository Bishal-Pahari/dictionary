import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [""],
      error: [""],
    };
  }

  componentDidMount() {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/narco")
      .then((response) => response.json())
      .then((wordsCollection) => this.setState({ words: wordsCollection }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {this.state.words.map((word) => (
          <div key={word.key}>
            <h1>{word.word}</h1>
            <p>{word.meaning}</p>
          </div>
        ))}
      </>
    );
  }
}

export default App;
