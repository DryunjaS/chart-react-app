import { observable } from "mobx"

const store = observable({
	arrOX: [],
	showModuleEdited: false,
	currentBlock: null,
	blocks: [
		{
			id: 1,
			label: "Hq",
			isCheack: true,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
		{
			id: 2,
			label: "Hw",
			isCheack: false,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
		{
			id: 3,
			label: "He",
			isCheack: false,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
		{
			id: 4,
			label: "Hr",
			isCheack: false,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
		{
			id: 5,
			label: "Ht",
			isCheack: false,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
		{
			id: 6,
			label: "Hy",
			isCheack: false,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
		{
			id: 7,
			label: "Hu",
			isCheack: false,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
		{
			id: 8,
			label: "Hi",
			isCheack: false,
			rangeSingle_min: 0,
			rangeSingle_max: 100,
			rangeMulti_min: 0,
			rangeMulti_max: 100,
			valueSingle: 50,
			valueMulti_min: 10,
			valueMulti_max: 80,
		},
	],

	setArrOX(min, max) {
		const result = []
		for (let i = min; i <= max; i += 2) {
			result.push(i)
		}
		this.arrOX = result
		console.log(result)
	},
	setRangeMulti_min(id, value) {
		const blockToUpdate = this.blocks.find((block) => block.id === id)
		if (blockToUpdate) {
			blockToUpdate.valueMulti_min = value
		}
	},

	setRangeMulti_max(id, value) {
		const blockToUpdate = this.blocks.find((block) => block.id === id)
		if (blockToUpdate) {
			blockToUpdate.valueMulti_max = value
		}
	},
	setSingle_value(id, value) {
		const blockToUpdate = this.blocks.find((block) => block.id === id)
		if (blockToUpdate) {
			blockToUpdate.valueSingle = value
		}
	},
	getRangeMulti_min(id) {
		const block = this.blocks.find((block) => block.id === id)
		return block ? block.valueMulti_min : null
	},
	getRangeMulti_max(id) {
		const block = this.blocks.find((block) => block.id === id)
		return block ? block.valueMulti_max : null
	},
	getSingle_value(id) {
		const block = this.blocks.find((block) => block.id === id)
		return block ? block.valueSingle : null
	},
})

export default store
