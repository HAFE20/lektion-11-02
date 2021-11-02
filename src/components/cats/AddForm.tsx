import { useState } from 'react'
import './CatStyle.css'

const AddForm = () => {
	const [name, setName] = useState('')
	const [age, setAge] = useState(0)

	// TODO: nameIsTouched

	// ett godkänt namn är en sträng med minst två tecken
	const nameIsValid = isValidName(name)
	const nameClass = nameIsValid ? 'valid' : 'invalid'
	// en godkänd ålder är ett tal som är >= 0 OCH är ett heltal
	const ageIsValid = isValidAge(age)

	const formIsValid = nameIsValid && ageIsValid

	return (
		<div className="form">
			<input type="text" placeholder="Cat name"
				className={nameClass}
				onChange={e => setName(e.target.value)} />
			<input type="text" placeholder="Age in years"
				className={ageIsValid ? 'valid' : 'invalid'}
				onChange={e => setAge(Number(e.target.value))}/>
			<input type="text" placeholder="Image URL" />
			<button disabled={!formIsValid}> Add to list </button>
		</div>
	)
}

function isValidName(name: string): boolean {
	return name.length >= 2
}
function isValidAge(age: number): boolean {
	if( isNaN(age) ) return false
	if( age < 0 ) return false
	let ageString = String(age)
	if( ageString.includes(',') || ageString.includes('.') ) return false
	// Alternativa sätt att kontrollera om ett tal har decimaler: x % 1 !=== 0, (x - Math.floor(x)) !== 0
	return true
}

export default AddForm
