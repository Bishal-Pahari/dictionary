import { Component } from "react";
import "./button.styles.css";

class Button extends Component {
  render() {
    const { className, handleSearchClick } = this.props;
    return (
      <button className={className} onClick={handleSearchClick}>
        Search
      </button>
    );
  }
}

export default Button;
