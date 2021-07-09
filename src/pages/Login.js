import React from "react";

class Login extends React.Component {
	render() {
		return (
			<div className="content-wrapper">
				<div className="col-12 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Login forms</h4>
							<form className="form-inline">
								<label className="sr-only" for="username">Username</label>
								<input type="text" className="form-control mb-2 mr-sm-2" id="username" placeholder="username" />

								<label className="sr-only" for="password">Password</label>
								<input type="password" className="form-control mb-2 mr-sm-2" id="password" placeholder="password" />

								<button type="submit" className="btn btn-primary mb-2"> Submit </button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;