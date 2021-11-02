import { useState } from "react"

const CounterFunc = () => {
	const [value, setValue] = useState(1)
	const increase = () => setValue(value + 1)
	const decrease = () => setValue(value - 1)
	return (
		<div className="frame">
			Value: {value} <br/>
			<button onClick={increase}> +1 </button>
			<button onClick={decrease}> -1 </button>
		</div>
	)
}

export default CounterFunc
