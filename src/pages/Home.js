import React from "react";
import Banner from "../components/home/Banner";
import NewArrival from "../components/home/NewArrival";
import Category from "../components/home/Category";

class Home extends React.Component {
	render() {
		return (
			<>
				<Banner />
				<div className="details-wrapper">
					<div className="container">
						<div className="row mt-5">
							<div className="col-md-12 pb-5 text-center">
								<h1>Categories</h1>
							</div>
						</div>
						<Category />
						<div className="row mt-5">
							<div className="col-md-12 pb-5 text-center">
								<h1>New Arrivals</h1>
							</div>
						</div>
						<NewArrival />
					</div>
				</div>
			</>
		);
	}
}

export default Home;