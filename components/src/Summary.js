// function createInnerElements(names) {
// 	let arrayElems = [];
// 	// for (let index = 0; index < names.length; index++) {
// 	// 	const element = names[index];

// 	// 	arrayElems.push(
// 	// 		<div> {`${element} contains ${element.length} letters`}</div>
// 	// 	);
// 	// }

// 	return names.map(name => (
// 		<div> {`${name} contains ${name.length} letters`} </div>
// 	));

// 	//return arrayElems;
// }
import React from "react";
//import { CallbackButton } from "./CallbackButton";
import { SimpleButton } from "./SimpleButton";

export function Summary(props) {
	//return;
	// (
	// 	<h4 className="bg-info text-white text-center p-2">
	// 		{props.names.map(name => (
	// 			<div key={name}> {`${name} contains ${name.length} letters`} </div>
	// 		))}
	// 	</h4>
	// );
	return (
		<>
			<td> {props.index + 1} </td> <td> {props.name} </td>{" "}
			<td> {props.name.length} </td>{" "}
			<td>
				{" "}
				{/* <button
                					className="btn btn-primary btn-sm"
                					onClick={props.reverseCallback}
                				>
                					Change
                				</button>
                				<button
                					className="btn btn-primary btn-sm m-1"
                					onClick={() => props.promoteCallback(props.name)}
                				>
                					Promote
                				</button> */}{" "}
				{/* <CallbackButton callback={props.reverseCallback}> </CallbackButton>{" "}
				<CallbackButton
					theme="primary"
					text="Reverse"
					callback={props.reverseCallback}
				></CallbackButton>
				<CallbackButton
					theme="info"
					text="Promote"
					callback={() => props.promoteCallback(props.name)}
					disabled={"true"}
				></CallbackButton> */}
				<SimpleButton
					className="btn btn-warning btn-sm m-1"
					callback={props.reverseCallback}
					text={`Reverse (${props.name})`}
				></SimpleButton>
				<SimpleButton
					className="btn btn-info btn-sm m-1"
					callback={() => props.promoteCallback(props.name)}
					text={`Promote (${props.name})`}
				></SimpleButton>
			</td>{" "}
		</>
	);
}
