import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { words } = this.props;

    return (
      <>
        {words.map((word, wordIndex) => (
          <div className="card" key={wordIndex}>
            <h1>{word.word}</h1>
            <p>Phonetic: {word.phonetic}</p>
            <div>
              {word.meanings.map((meaning, meaningIndex) => (
                <div key={meaningIndex}>
                  <p>Part of Speech: {meaning.partOfSpeech}</p>
                  <ul>
                    <p>Meaning:</p>
                    {meaning.definitions.map((definition, definitionIndex) => (
                      <li key={definitionIndex}>{definition.definition}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Card;
