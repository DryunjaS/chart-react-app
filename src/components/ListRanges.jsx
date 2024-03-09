import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Range from "./Range"
import MultiRangeSlider from "./MultiRange"
import { observer } from "mobx-react-lite"
import store from "../store/store"

const ListRanges = () => {
	const handleCheack = (idBlock) => {
		store.blocks.map((block) => {
			if (block.id === idBlock) {
				block.isCheack = !block.isCheack
			} else {
				block.isCheack = false
			}
		})
	}
	return (
		<div className='listRanges-container'>
			{store.blocks.map((block) => (
				<div className='listRanges__item' key={block.id}>
					{block.isCheack ? (
						<MultiRangeSlider
							idBlock={block.id}
							min={block.rangeMulti_min}
							max={block.rangeMulti_max}
							onChange={({ min, max }) => store.setArrOX(min, max)}
						/>
					) : (
						<Range />
					)}

					<div className='range-footer'>
						<Form.Check
							type='switch'
							label={`Значение ${block.label}`}
							checked={block.isCheack}
							onChange={() => handleCheack(block.id)}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default observer(ListRanges)
