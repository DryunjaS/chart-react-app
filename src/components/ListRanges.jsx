import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Range from "./Range"
import MultiRangeSlider from "./MultiRange"

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
						<MultiRangeSlider
							min={0}
							max={100}
							onChange={({ min, max }) =>
								console.log(`min = ${min}, max = ${max}`)
							}
						/>
					)}
				</div>
			))}
		</div>
	)
}

export default ListRanges
