import React from "react";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductItem extends React.Component {
	render() {
		return (
			<div className="col-sm-4 stretch-card grid-margin">
				<div className="card">
					<div className="card-body p-0">
            	<img className="img-fluid w-100" src={this.props.item.image} alt={this.props.item.name} />
          	</div>
          	<div className="card-body px-3 text-dark">
          		<div className="d-flex justify-content-between">
          			<p className="text-muted font-13 mb-0">{this.props.item.name}</p>
          			<i className="mdi mdi-heart-outline"><FontAwesomeIcon icon={faHeart} /></i>
          		</div>
          		<div className="d-flex justify-content-between font-weight-semibold">
              		<p className="mb-0">
                		<i className="mdi mdi-star star-color pr-1"><FontAwesomeIcon icon={faStar} /></i> 4/5
            		</p>
            	</div>
          	</div>
				</div>
			</div>
		);
	}
}

export default ProductItem;