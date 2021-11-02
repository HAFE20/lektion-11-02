import { useState } from "react"
import { Cat } from '../../models/Cat'
import AddForm from "./AddForm"

const Catlist = () => {
	const [list, setList] = useState<Cat[]>([
		{ name: 'Pelle', age: 2 }
	])

	return (
		<div>
			<AddForm/>
			{list.map(cat => (
				<div key={cat.name}>
					{cat.name} is {cat.age} years old.
					{cat.img ? <img src={cat.img} alt="cat" /> : null}
				</div>
			))}
		</div>
	)
}

export default Catlist
