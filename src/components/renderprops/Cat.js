import React from "react";
class Cat extends React.Component {


  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: this.props.mouse.x,
          top: this.props.mouse.y,
        }}
      >
        <img
          src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00MjgtZWxlbWVudC0yNy5wbmc.png?s=VhrzbK51wpP7Bs9ihv4MlHXpOdGB02yWN0Y1a07F_Es"
          style={{ width: "50px",background:'transparent' }} alt='imag'
        />
      </div>
    );
  }
}

export default Cat;
