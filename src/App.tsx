import React from 'react';
import './App.css';
import Catlist from './components/cats/Catlist';
import CounterClass from './components/counter/CounterClass';
import CounterFunc from './components/counter/CounterFunc';
import Lifecycle from './components/lifecycle/Lifecycle' 

function App() {
	return (
		<div className="App">
			<h1> Classes and validation </h1>
			<Catlist />
			<CounterFunc/>
			<CounterClass/>
			<Lifecycle/>
		</div>
	);
}

export default App;
