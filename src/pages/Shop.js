import React from "react";
import ProductItem from "../components/product/Item";
import { ShopService } from "../services/api";

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ShopService().then(res => {
            if (res.status === 200 && res.data.error === 0) {
                this.setState({ products: res.data.data.products });
            }
        });
    }

    renderProducts() {
        const rows = [];
        for (const item of this.state.products) {
            rows.push(
                <ProductItem key={item.id} item={item} />
            );
        }

        return rows;
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="page-header">
                    <h3 className="page-title">Shop</h3>
                </div>
                <div className="row">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default Shop;