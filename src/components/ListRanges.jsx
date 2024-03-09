import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Range from "./Range"
import MultiRangeSlider from "./MultiRange"
import { observer } from "mobx-react-lite"
import ModuleEdited from "./ModuleEdited"
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
	const handleEdited = (id) => {
		console.log("id", id)
		store.showModuleEdited = true
		store.currentBlock = id
	}
	return (
		<div className='listRanges-container'>
			<ModuleEdited />

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
						<Range
							idBlock={block.id}
							min={block.rangeSingle_min}
							max={block.rangeSingle_max}
						/>
					)}

					<div className='range-footer'>
						<Form.Check
							type='switch'
							label={`Значение ${block.label}`}
							checked={block.isCheack}
							onChange={() => handleCheack(block.id)}
						/>
						<button
							className='footer__btn'
							onClick={() => handleEdited(block.id)}
						>
							<img src='/imgs/edited.png' alt='' className='footer__btn-img' />
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default observer(ListRanges)
