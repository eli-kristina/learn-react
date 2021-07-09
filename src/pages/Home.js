import React from "react";
import ProductItem from "../components/product/Item";
import { GetBreeds } from "../services/api";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			breeds: []
		}
	}

	componentDidMount() {
		GetBreeds().then(res => {
			if (res.status === 200 && res.data.error === "0") {
				this.setState({breeds: res.data.data});
			}
		});
	}

	renderBreeds() {
		const rows = [];
		for(const item of this.state.breeds) {
			rows.push(
				<ProductItem item={item} />
			);
		}

		return rows;
	}

	render() {
		return (
			<div className="content-wrapper">
				<div className="row">
					{this.renderBreeds()}
				</div>
			</div>
		);
	}
}

export default Home;