import { Component } from "react";
import "./search.styles.css";

class Search extends Component {
  render() {
    const { className, placeholder, onSearchChange } = this.props;
    return (
      <>
        <input
          className={className}
          placeholder={placeholder}
          type="search"
          onChange={onSearchChange}
        />
      </>
    );
  }
}

export default Search;
