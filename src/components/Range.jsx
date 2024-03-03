import React, { useState } from "react"
import Form from "react-bootstrap/Form"

const Range = ({ label, isSelected, onSelect }) => {
	const [value, setValue] = useState(50)

	const handleRangeChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<div>
			<div className={`styled-range-container ${isSelected ? "selected" : ""}`}>
				<div className='min-value'>0</div>

				<Form.Range
					value={value}
					min={0}
					max={100}
					onChange={handleRangeChange}
					className='styled-range'
				/>
				<div className='thumb-value'>{value}</div>
				<div className='max-value'>100</div>
			</div>
			<div className='range-footer'>
				<Form.Check
					type='switch'
					id={`custom-switch-${label}`}
					label={`Значение ${label}`}
					checked={isSelected}
					onChange={onSelect}
				/>
			</div>
		</div>
	)
}

export default Range
