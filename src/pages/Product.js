import React from "react";
import TinySlider from "tiny-slider-react";
import ProductImage from "../components/product/Image";
import { ProductService } from "../services/api";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    ProductService(this.props.match.params.id).then(res => {
      if (res.status === 200 && res.data.error === 0) {
        this.setState({ product: res.data.data.product });
      }
    });
  }

  renderImages(images) {
    const rows = [];

    if (images) {
      for (let i = 0; i < images.length; i++) {
        rows.push(
          <ProductImage key={i} no={i} item={images[i]} />
        );
      }
    }

    return rows;
  }

  render() {
    const settings = {
      "container": "#lazyload",
      "items": 1,
      "lazyload": true,
      "swipeAngle": false,
      "speed": 400,
      "controls": false,
      "navPosition": "bottom"
    };

    return (
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <TinySlider settings={settings}>
                  {this.renderImages(this.state.product.images)}
                </TinySlider>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h3>{this.state.product.title}</h3>
                <p>SKU: {this.state.product.sku}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;