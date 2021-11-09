import React from "react";
import { withRouter } from 'react-router-dom';
import { LoginService } from "../services/api";
import { User } from "../models/User";
import history from "../utils/history";

interface LoginProps {
	setUser: (user: User) => void
}

interface LoginState {
	username: string,
	password: string,
	errorMsg: string
}

class Login extends React.Component<LoginProps, LoginState> {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			errorMsg: ''
		}
	}

	handleSubmit(event) {
		event.preventDefault();

		const payload = {
			'email': this.state.username,
			'password': this.state.password
		}
		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		}

		LoginService(payload, headers).then(res => {
			if (res.status === 200 && res.data.error === 0) {
				this.props.setUser(res.data.data);
				history.push("/");
			} else {
				this.setState({ errorMsg: <code>Username or Password invalid</code> });
			}
		});
	}

	render() {
		return (
			<div className="content-wrapper">
				<div className="col-12 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Login forms</h4>
							{this.state.errorMsg}
							<form className="form-inline" onSubmit={e => this.handleSubmit(e)}>
								<input type="text" className="form-control mb-2 mr-sm-2" id="username" placeholder="Username" onChange={e => this.setState({ username: e.target.value })} />
								<input type="password" className="form-control mb-2 mr-sm-2" id="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />

								<button type="submit" className="btn btn-primary mb-2"> Submit </button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);