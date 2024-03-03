import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Range from "./Range"
import MultiRangeSlider from "./MultiRange"
import { observer } from "mobx-react-lite"
import store from "../store/store"

const ListRanges = () => {
	const [ranges, setRanges] = useState([
		"Hz",
		"Hn",
		"He",
		"Hy",
		"Hg",
		"Hk",
		"Hb",
		"Hf",
	])

	const [selectedRange, setSelectedRange] = useState(null)

	const handleRangeSelection = (label) => {
		setSelectedRange(label)
	}

	return (
		<div className='listRanges-container'>
			{ranges.map((range, index) => (
				<div className='listRanges__item' key={index}>
					{selectedRange !== range && (
						<Range
							label={range}
							isSelected={selectedRange === range}
							onSelect={() => handleRangeSelection(range)}
						/>
					)}
					{selectedRange === range && (
						<div className='range-footer'>
							<MultiRangeSlider
								min={0}
								max={100}
								onChange={({ min, max }) => store.setArrOX(min, max)}
							/>
							<Form.Check
								type='switch'
								id={`custom-switch-${range}`}
								label={`Значение ${range}`}
								checked={true}
								onChange={() => store.setArrOX(0, 100)}
							/>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default observer(ListRanges)
