import { Component } from "react";
import Demo from './Demo'

interface LifecycleProps {}
interface LifecycleState {
	showDemo: boolean;
}
class Lifecycle extends Component<LifecycleProps, LifecycleState> {
	state = { showDemo: true }

	render() {
		return (
			<div>
				Demonstrate lifecycle functions.
				<button onClick={this.toggleDemo}>Toggle demo component </button>
				{this.state.showDemo ? <Demo /> : null}
			</div>
		)
	}

	toggleDemo = () => {
		this.setState({
			showDemo: !this.state.showDemo
		})
	}
}

export default Lifecycle
