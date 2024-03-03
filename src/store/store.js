import { observable } from "mobx"

const store = observable({
	arrOX: [],

	setArrOX(min, max) {
		const result = []
		for (let i = min; i <= max; i += 2) {
			result.push(i)
		}
		this.arrOX = result
		console.log(result)
	},
})

export default store
