import React, { Component } from "react";

import PropTypes from "prop-types";

export class SimpleButton extends Component {
	render() {
		return (
			<button
				onClick={this.props.callback}
				className={this.props.className}
				disabled={this.props.disable === "true" || this.props.disabled === true}
			>
				{this.props.text}
			</button>
		);
	}
}

// export function SimpleButton(props) {
//     return (
//         <button
//             onClick={props.callback}
//             className={props.className}
//             disabled={props.disable === "true" || props.disabled === true}
//         >
//             {props.text}
//         </button>
//     );
// }

// SimpleButton.defaultProps = {
// 	disabled: false
// };

// SimpleButton.propTypes = {
// 	text: PropTypes.string,
// 	theme: PropTypes.string,
// 	callback: PropTypes.func,
// 	disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
// };
