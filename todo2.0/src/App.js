import React, { Component } from "react";
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";
import { VisibilityControl } from "./VisibilityControl";
//import additionFunction, { sumValues as sum1, sumValues2 as sum2 } from "./sum";
import additionFunction, * as ops from "./sum";
import { asyncAdd } from "./async";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "Adam Silver",
			todoItems: [
				{ action: "Buy flowers", done: false },
				{ action: "Get shoes", done: false },
				{ action: "Collect tickets", done: true },
				{ action: "Call Joe", done: false }
			],
			//newItemText: ""
			showCompleted: true
		};
	}

	updateNewTextValue = event => {
		this.setState({ newItemText: event.target.value });
	};

	createNewTodo = task => {
		if (!this.state.todoItems.find(item => item.action === task)) {
			this.setState(
				{
					todoItems: [...this.state.todoItems, { action: task, done: false }]
					//newItemText: ""
				},
				() => localStorage.setItem("todos", JSON.stringify(this.state))
			);
		}

		function messageFunction(weather) {
			let message = `It is ${weather} today`;
			console.log(message);
			console.log((5).toString(2));
		}

		function loopArray(array, val1, val2, val3) {
			array.forEach((value, index) => console.log(`Index ${index}: ${value}`));
			let array2 = [1, 2, ...array];
			array2.forEach((value, index) => console.log(`Index ${index}: ${value}`));
			console.log(`values: ${val2}`);
		}

		messageFunction("Raining");
		let my_array = ["a", "b", "c"];
		loopArray(my_array, ...my_array);

		class MyData {
			constructor(props) {
				this.name = "Adam";
				this.weather = "sunny";
			}
			printMessages = () => {
				console.log(`Hello ${this.name}.`);
				console.log(`Today is ${this.weather}.`);
			};

			printDetails = ({ name, location: { city }, employment: { title } }) => {
				console.log(`Name ${name} ${city} ${title}`);
			};
		}

		const my_data_const = {
			name: "Bob",
			location: {
				city: "Paris",
				country: "France"
			},
			employment: {
				title: "Manager",
				dept: "Sales"
			}
		};

		let my_data = new MyData();
		my_data.printMessages();
		my_data.printDetails(my_data_const);

		let secondObject = {};
		Object.assign(secondObject, my_data);

		secondObject.printMessages();

		let values = [10, 20, 30];
		let total = additionFunction(values);
		let total_2 = ops.sumValues(values);
		let total_3 = ops.sumValues2(values);

		asyncAdd(values).then(total => console.log("total1=" + total));
		asyncAdd(values).then(function(total) {
			console.log("total2=" + total);
		});

		console.log(total_2, total_3 + total);

		let thirdObject = { ...my_data, lastname: "Durazo", weather: "cloudy" };
		console.log(
			`MyData: ${my_data.weather} - ${my_data.lastname}, secondObject: ${thirdObject.weather} - ${thirdObject.lastname}`
		);
	};

	toggleTodo = todo =>
		this.setState({
			todoItems: this.state.todoItems.map(item =>
				item.action === todo.action ? { ...item, done: !item.done } : item
			)
		});

	todoTableRows = doneValue =>
		this.state.todoItems
			.filter(item => item.done === doneValue)
			.map(
				item => (
					<TodoRow
						key={item.action}
						item={item}
						callback={this.toggleTodo}
					></TodoRow>
				)
				// <tr key={item.action}>
				// 	<td> {item.action} </td>{" "}
				// 	<td>
				// 		<input
				// 			type="checkbox"
				// 			checked={item.done}
				// 			onChange={() => this.toggleTodo(item)}
				// 		/>{" "}
				// 	</td>{" "}
				// </tr>
			);

	componentDidMount = () => {
		let data = localStorage.getItem("todos");

		this.setState(
			data != null
				? JSON.parse(data)
				: {
						userName: "Adam Silver",
						todoItems: [
							{ action: "Buy flowers", done: false },
							{ action: "Get shoes", done: false },
							{ action: "Collect tickets", done: true },
							{ action: "Call Joe", done: false }
						],
						//newItemText: ""
						showCompleted: true
				  }
		);
	};

	changeStateData = () => {
		this.setState({
			userName: this.state.userName === "Adam Silver" ? "Bobcat" : "Adam Silver"
		});
	};

	render = () => (
		<div>
			<TodoBanner
				name={this.state.userName}
				tasks={this.state.todoItems}
			></TodoBanner>{" "}
			<div className="container-fluid">
				<TodoCreator callback={this.createNewTodo}> </TodoCreator>{" "}
				<table className="table table-stripped table-bordered">
					<thead>
						<tr>
							<th> Description </th> <th> Done </th>
						</tr>{" "}
					</thead>{" "}
					<tbody> {this.todoTableRows(false)} </tbody>{" "}
				</table>{" "}
				<div className="bg-secondary text-white text-center p-2">
					<VisibilityControl
						description="Completed Tasks"
						isChecked={this.state.showCompleted}
						callback={checked => this.setState({ showCompleted: checked })}
					></VisibilityControl>{" "}
				</div>{" "}
				{this.state.showCompleted && (
					<table className="table table-stripped table-bordered">
						<thead>
							<tr>
								<th> Description </th> <th> Done </th>{" "}
							</tr>{" "}
						</thead>{" "}
						<tbody> {this.todoTableRows(true)} </tbody>{" "}
					</table>
				)}{" "}
			</div>{" "}
			<button className="btn btn-primary m-2" onClick={this.changeStateData}>
				Change{" "}
			</button>{" "}
		</div>
	);
}

//function App() {

// return (
// 	// <div className="App">
// 	// 	<header className="App-header">
// 	// 		<img src={logo} className="App-logo" alt="logo" />
// 	// 		<p>
// 	// 			Edit <code>src/App.js</code> and save to reload.
// 	// 		</p>
// 	// 		<a
// 	// 			className="App-link"
// 	// 			href="https://reactjs.org"
// 	// 			target="_blank"
// 	// 			rel="noopener noreferrer"
// 	// 		>
// 	// 			Learn React
// 	// 		</a>
// 	// 	</header>
// 	// </div>

// 	<div>
// 		<h4 className="bg-primary text-white text-center p-2">To Do List</h4>
// 	</div>
// );
//}

//export default App;
