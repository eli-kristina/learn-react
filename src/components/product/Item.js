import React from "react";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductItem extends React.Component {
	render() {
		return (
			<div className="col-sm-4 stretch-card grid-margin">
				<div className="card">
					<div className="card-body p-0">
						<img className="img-fluid w-100" src={this.props.item.thumb} alt={this.props.item.sku} />
					</div>
					<div className="card-body px-3 text-dark">
						<div className="d-flex justify-content-between">
							<p className="text-muted font-13 mb-0">{this.props.item.brand} {this.props.item.category}</p>
							<i className="mdi mdi-heart-outline"><FontAwesomeIcon icon={faHeart} /></i>
						</div>
						<h5 className="font-weight-semibold">{this.props.item.title}</h5>
						<div className="d-flex justify-content-between font-weight-semibold">
							<p className="mb-0 product-sale-price">{this.props.item.prices.currency} {this.props.item.prices.sale}</p>
							<p className="mb-0 product-original-price">{this.props.item.prices.currency} {this.props.item.prices.original}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductItem;