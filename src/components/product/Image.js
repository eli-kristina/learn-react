import React from "react";

class ProductImage extends React.Component {
  render() {
    return (
      <div key={this.props.no}>
        <img src={this.props.item} alt="" />
      </div>
    );
  }
}

export default ProductImage;