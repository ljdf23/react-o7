import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import { DataGetter } from "../data/DataGetter";

import {
	addToCart,
	updateCartQuantity,
	removeFromCart,
	clearCart
} from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";

const mapStateToProps = dataStore => ({
	...dataStore
});

const mapDispatchToProps = {
	loadData,
	addToCart,
	updateCartQuantity,
	removeFromCart,
	clearCart
};

// const filterProducts = (products = [], category) =>
// 	!category || category === "All"
// 		? products
// 		: products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const ShopConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class extends Component {
		render() {
			return (
				<Switch>
					<Redirect
						from="/shop/products/:category"
						to="/shop/products/:category/1"
						exact="true"
					></Redirect>
					<Route
						path="/shop/products/:category/:page"
						render={
							routeProps => (
								<DataGetter {...this.props} {...routeProps}>
									<Shop {...this.props} {...routeProps}></Shop>
								</DataGetter>
							)
							//(
							// <Shop
							// 	{...this.props}
							// 	{...routeProps}
							// 	products={filterProducts(
							// 		this.props.products,
							// 		routeProps.match.params.category
							// 	)}
							// ></Shop>
							//)
						}
					></Route>{" "}
					<Route
						path="/shop/cart"
						render={routeProps => (
							<CartDetails {...this.props} {...routeProps} />
						)}
					></Route>{" "}
					<Redirect to="/shop/products/all/1"> </Redirect>{" "}
				</Switch>
			);
		}

		componentDidMount() {
			this.props.loadData(DataTypes.CATEGORIES);
			//this.props.loadData(DataTypes.PRODUCTS);
		}
	}
);
