import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { observer } from "mobx-react-lite"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import store from "../store/store"

const ModuleEdited = () => {
	const [minValue, setMinValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)

	const updateRange = (event) => {
		event.preventDefault()
		if (!minValue && !maxValue) return

		const blockToUpdate = store.blocks.find(
			(block) => block.id === store.currentBlock
		)
		if (blockToUpdate) {
			if (blockToUpdate.isCheack) {
				blockToUpdate.rangeMulti_min = minValue
				blockToUpdate.rangeMulti_max = maxValue
			} else {
				blockToUpdate.rangeSingle_min = minValue
				blockToUpdate.rangeSingle_max = maxValue
			}
		}
		store.showModuleEdited = false
		store.currentBlock = null

		if (blockToUpdate.rangeMulti_min > blockToUpdate.valueMulti_min) {
			blockToUpdate.valueMulti_min = blockToUpdate.rangeMulti_min
		}
		if (blockToUpdate.rangeMulti_max < blockToUpdate.valueMulti_max) {
			blockToUpdate.valueMulti_max = blockToUpdate.rangeMulti_max
		}
		if (blockToUpdate.rangeSingle_min > blockToUpdate.valueSingle) {
			blockToUpdate.valueSingle = blockToUpdate.rangeSingle_min
		}
		if (blockToUpdate.rangeSingle_max < blockToUpdate.valueSingle) {
			blockToUpdate.valueSingle = blockToUpdate.rangeSingle_max
		}
	}

	return (
		<>
			<Modal
				show={store.showModuleEdited}
				onHide={() => (store.showModuleEdited = false)}
			>
				<Modal.Header closeButton>
					<Modal.Title>Изменение пределов интервала</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={updateRange}>
						<Form.Group className='mb-3' controlId='minValue'>
							<Form.Label>Минимальное значение</Form.Label>
							<Form.Control
								type='number'
								placeholder='Введите новое значение'
								onChange={(e) => setMinValue(e.target.value)}
								value={minValue}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='maxValue'>
							<Form.Label>Максимальное значение</Form.Label>
							<Form.Control
								type='number'
								placeholder='Введите новое значение'
								onChange={(e) => setMaxValue(e.target.value)}
								value={maxValue}
							/>
						</Form.Group>
						<div className='btn-wrap'>
							<Button variant='primary' type='submit'>
								Изменить
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default observer(ModuleEdited)
