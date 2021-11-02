import React from 'react';
import './App.css';
import CounterClass from './components/counter/CounterClass';
import CounterFunc from './components/counter/CounterFunc';
import Lifecycle from './components/lifecycle/Lifecycle' 

function App() {
	return (
		<div className="App">
			Hello

			<CounterFunc/>
			<CounterClass/>
			<Lifecycle/>
		</div>
	);
}

export default App;
