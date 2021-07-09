import React from "react";
import ProductItem from "../components/product/Item";
import { getBreeds } from "../services/breeds";

class Home extends React.Component {
	render() {
		let breeds = getBreeds();

		console.log(breeds);

		return (
			<div className="content-wrapper">
				<div className="row">
					<ProductItem/>
				</div>
			</div>
		);
	}
}

export default Home;