import React from "react";
import ButtonContext from "./ButtonContext";

class Navigation extends React.Component {
  static contextType = ButtonContext;

  render() {
    return (
      <div>
        <a
          href="yy"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            margin: "10px",
          }}
        >
          {this.context}
        </a>
      </div>
    );
  }
}

export default Navigation;
