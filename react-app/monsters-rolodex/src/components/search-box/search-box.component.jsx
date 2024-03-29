import { Component } from "react";

class SearchBox extends Component {

  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandeler}
      />
    );
  }
}

export default SearchBox;
