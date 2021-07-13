import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
		let btnAdd = <div/>;
		
		if (this.props.user && this.props.user.roles === 'administrator') {
			btnAdd = <div className="header-right d-flex flex-wrap mt-md-2 mt-lg-0">
						<button type="button" className="btn btn-primary mt-2 mt-sm-0 btn-icon-text">
							<i className="mdi mdi-plus-circle"><FontAwesomeIcon icon={faPlusCircle} /></i> Add Breed
						</button>
					</div>
		}
		
		return (
			<div className="content-wrapper">
				<div className="page-header flex-wrap">
					<div className="header-left">
						<h3 className="m-0 pt-2">List Breeds</h3>
					</div>
					{btnAdd}
				</div>
				<div className="row">
					{this.renderBreeds()}
				</div>
			</div>
		);
	}
}

export default Home;