import React, { useCallback, useEffect, useState, useRef } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import store from "../store/store"

const MultiRangeSlider = ({ idBlock, min, max, onChange }) => {
	const [minVal, setMinVal] = useState(store.getRangeMulti_min(idBlock))
	const [maxVal, setMaxVal] = useState(store.getRangeMulti_max(idBlock))
	const minValRef = useRef(null)
	const maxValRef = useRef(null)
	const range = useRef(null)
	const getPercent = useCallback(
		(value) => Math.round(((value - min) / (max - min)) * 100),
		[min, max]
	)

	useEffect(() => {
		if (maxValRef.current) {
			const minPercent = getPercent(minVal)
			const maxPercent = getPercent(+maxValRef.current.value)
			if (range.current) {
				range.current.style.left = `${minPercent}%`
				range.current.style.width = `${maxPercent - minPercent}%`
			}
		}
		console.log("minVal", minVal, "min", min)
	}, [minVal, getPercent])

	useEffect(() => {
		if (minValRef.current) {
			const minPercent = getPercent(+minValRef.current.value)
			const maxPercent = getPercent(maxVal)

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`
			}
		}
	}, [maxVal, getPercent])

	useEffect(() => {
		onChange({ min: minVal, max: maxVal })
	}, [minVal, maxVal, onChange])

	return (
		<div className='multirange-container'>
			<input
				type='range'
				min={min}
				max={max}
				value={minVal}
				ref={minValRef}
				onChange={(event) => {
					const value = Math.min(+event.target.value, maxVal - 1)
					setMinVal(value)
					console.log("minVal", value)
					store.setRangeMulti_min(idBlock, value)
					event.target.value = value.toString()
				}}
				className={classnames("thumb thumb--zindex-3", {
					"thumb--zindex-5": minVal > max - 100,
				})}
			/>
			<input
				type='range'
				min={min}
				max={max}
				value={maxVal}
				ref={maxValRef}
				onChange={(event) => {
					const value = Math.max(+event.target.value, minVal + 1)
					setMaxVal(value)
					console.log("maxVal", value)
					store.setRangeMulti_max(idBlock, value)
					event.target.value = value.toString()
				}}
				className='thumb thumb--zindex-4'
			/>

			<div className='slider'>
				<div className='slider__track' />
				<div ref={range} className='slider__range' />
				<div className='slider__left-value'>{minVal}</div>
				<div className='slider__right-value'>{maxVal}</div>
			</div>
		</div>
	)
}

MultiRangeSlider.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default MultiRangeSlider
