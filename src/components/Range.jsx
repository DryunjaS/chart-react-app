import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import store from "../store/store"

const Range = ({ idBlock, min, max }) => {
	const [value, setValue] = useState(store.getSingle_value(idBlock))

	const handleRangeChange = (event) => {
		setValue(event.target.value)
		store.setSingle_value(idBlock, value)
	}

	return (
		<div>
			<div className='styled-range-container'>
				<div className='min-value'>{min}</div>
				<Form.Range
					value={value}
					min={min}
					max={max}
					onChange={handleRangeChange}
					className='styled-range'
				/>
				<div className='thumb-value'>{value}</div>
				<div className='max-value'>{max}</div>
			</div>
		</div>
	)
}

export default Range
