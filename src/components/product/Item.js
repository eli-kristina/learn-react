import React from "react";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductItem extends React.Component {
	renderOriginalPrice(currency, salePrice, originalPrice, formattedPrice) {
		let oriPrice;

		if (originalPrice !== salePrice) {
			oriPrice = <p className="mb-0 product-original-price">{currency} {formattedPrice}</p>;
		}

		return oriPrice;
	}

	render() {
		return (
			<div className="col-sm-4 stretch-card grid-margin">
				<div className="card">
					<div className="card-body p-0">
						<Link to={`/product/${this.props.item.id}`}><img className="img-fluid w-100" src={this.props.item.thumb} alt={this.props.item.sku} /></Link>
					</div>
					<div className="card-body px-3 text-dark">
						<div className="d-flex justify-content-between">
							<p className="text-muted font-13 mb-0">{this.props.item.brand} {this.props.item.category}</p>
							<i className="mdi mdi-heart-outline"><FontAwesomeIcon icon={faHeart} /></i>
						</div>
						<h5 className="font-weight-semibold">{this.props.item.title}</h5>
						<div className="d-flex justify-content-between font-weight-semibold">
							<p className="mb-0 product-sale-price">{this.props.item.prices.currency} {this.props.item.prices.sale_formatted}</p>
							{this.renderOriginalPrice(this.props.item.prices.currency, this.props.item.prices.sale, this.props.item.prices.original, this.props.item.prices.original_formatted)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductItem;