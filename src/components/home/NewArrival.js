import React from "react";
import ProductItem from "../product/Item";

class NewArrival extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  renderProducts() {
    const products = [{
      "id": 1,
      "sku": "BG-001",
      "title": "GG Marmont mini shoulder bag",
      "brand": "GUCCI",
      "category": "BAGS",
      "thumb": "https://media.gucci.com/style/DarkGray_South_0_160_540x540/1628009102/446744_UM8AN_1000_001_055_0016_Light-GG-Marmont-mini-shoulder-bag.jpg",
      "prices": {
        "currency": "IDR",
        "original": 2350000,
        "original_formatted": "2.350.000",
        "sale": 2000000,
        "sale_formatted": "2.000.000"
      }
    },
    {
      "id": 2,
      "sku": "BG-002",
      "title": "GG Marmont small shoulder bag",
      "brand": "GUCCI",
      "category": "BAGS",
      "thumb": "https://media.gucci.com/style/White_South_0_160_540x540/1629218704/443497_UM8AN_9022_001_063_0000_Light.jpg",
      "prices": {
        "currency": "IDR",
        "original": 2350000,
        "original_formatted": "2.350.000",
        "sale": 2350000,
        "sale_formatted": "2.350.000"
      }
    },
    {
      "id": 3,
      "sku": "SH-001",
      "title": "Babylone Pump",
      "brand": "HERMES",
      "category": "SHOES",
      "thumb": "https://assets.hermes.com/is/image/hermesproduct/babylone-pump--212009Z%2076-worn-1-0-0-540-540-q99_b.jpg",
      "prices": {
        "currency": "IDR",
        "original": 2000000,
        "original_formatted": "2.000.000",
        "sale": 1980000,
        "sale_formatted": "1.980.000"
      }
    }];

    const rows = [];
    for (const item of products) {
      rows.push(
        <ProductItem key={item.id} item={item} />
      );
    }

    return rows;
  }

  render() {
    return (
      <div className="row mb-5">
        {this.renderProducts()}
      </div>
    );
  }
}

export default NewArrival;