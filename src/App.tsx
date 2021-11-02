import React from 'react';
import './App.css';
import CounterClass from './components/counter/CounterClass';
import CounterFunc from './components/counter/CounterFunc';
 
function App() {
	return (
		<div className="App">
			Hello

			<CounterFunc/>
			<CounterClass/>
		</div>
	);
}

export default App;
