import { Component } from "react";


class CounterClass extends Component {
	state = {
		value: 1
	}

	render() {
		const value = this.state.value

		return (
			<div className="frame">
				Value: {value} <br/>
				<button onClick={this.increase}> +1 </button>
				<button onClick={this.decrease}> -1 </button>
			</div>
		)
	}  // render

	increase() {
		this.setState({
			value: this.state.value + 1
		})
	}
	decrease() {
		this.setState({ value: this.state.value - 1 })
	}
}

/*
TypeError: Cannot read properties of undefined (reading 'setState')
React letar efter egenskaper i ett objekt, men kan inte hitta några - eftersom objektet är UNDEFINED.
Kodraden är: this.setState(....)
React letar efter setState inuti THIS.
Slutsats: THIS är UNDEFINED!

increase och decrease är metoder
value är exempel på en property
function f(param1, param2) {}
Property = egenskap, "det som ligger i objekt"
*/

export default CounterClass
