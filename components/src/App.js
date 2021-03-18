import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message";
import { Summary } from "./Summary";
import ReactDOM from "react-dom";

let names = ["Bob", "Alice", "Dora"];

function reverseNames() {
	names.reverse();
	ReactDOM.render(<App />, document.getElementById("root"));
}
function promoteName(name) {
	names = [name, ...names.filter(val => val !== name)];
	ReactDOM.render(<App />, document.getElementById("root"));
}

function App() {
	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 		</header>
	// 	</div>
	// // );

	// return (
	// 	<div>
	// 		<h1 className="bg-primary text-white text-center p-2">Hello Adam</h1>

	// 		<Message greeting="hello" name="Bob" />
	// 		<Message greeting="hola" name={"Alice" + "Smith"} />
	// 		<Message greeting="hi there" name="Dora" />
	// 		<Summary names={["Bob", "Alice", "Dora"]} />
	// 	</div>
	//);

	return (
		<table className="table table-sm table-stripped">
			<thead>
				<tr>
					<th> # </th> <th> Name </th> <th> Letters </th>{" "}
				</tr>{" "}
			</thead>{" "}
			<tbody>
				{" "}
				{names.map((name, index) => (
					<tr key={name}>
						<Summary
							index={index}
							name={name}
							reverseCallback={reverseNames}
							promoteCallback={promoteName}
						>
							{" "}
						</Summary>{" "}
					</tr>
				))}{" "}
			</tbody>{" "}
		</table>
	);
}

export default App;
