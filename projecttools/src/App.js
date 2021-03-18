import React, { Component } from "react";
import { Display } from "./Display";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: "London"
		};
	}

	changeCity = () => {
		debugger;
		this.setState({
			city: this.state.city === "London" ? "New York" : "London"
		});
	};

	render() {
		return <Display value={this.state.city} callback={this.changeCity} />;
	}
}

// /*eslint-disable*/
// import React, { Component } from "react";
// import "./App.css";
// import reactLogo from "./logo.svg";

// let name = "Adam";
// const city = "London";
// let error = "";

// export default class extends Component {
// 	message = () => `Hello ${name} from ${city}`;

// 	render = () => (
// 		<div className="text-center">
// 			<h4 className="bg-primary text-white text-center p-3">
// 				{this.message()}
// 			</h4>
// 			<img src={reactLogo} alt="reactLogo" />
// 			<link rel="stylesheet" href={process.env.PUBLIC_URL + "/static.css"} />
// 			<img src={process.env.PUBLIC_URL + "/logo.svg"} alt="reactLogo" />
// 		</div>
// 	);
// }
