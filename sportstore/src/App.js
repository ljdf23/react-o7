import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import { ShopConnector } from "./shop/ShopConnector";

function App() {
	return (
		<Provider store={SportsStoreDataStore}>
			<Router>
				<Switch>
					<Route path="/shop" component={ShopConnector}></Route>
					<Redirect to="/shop"></Redirect>
				</Switch>
			</Router>
		</Provider>
	);

	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code> src / App.js </code> and save to reload.{" "}
	// 			</p>{" "}
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React{" "}
	// 			</a>{" "}
	// 		</header>{" "}
	// 	</div>
	// );
}

export default App;
