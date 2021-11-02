import { Component } from "react";


class Demo extends Component {
	
	render() {
		return (
			<div> This component is being rendered </div>
		)
	}
	componentDidMount() {
		console.log('component did mount');
	}
	componentDidUpdate() {
		console.log('component did update');
	}
	componentWillUnmount() {
		console.log('component will unmount');
	}
}

export default Demo
