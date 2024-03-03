import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { observer } from "mobx-react-lite"
import store from "../store/store"

const ChartLine = () => {
	const [labelsArr, setLabelsArr] = useState([])
	const [dataArr, setDataArr] = useState([])

	useEffect(() => {
		setLabelsArr(store.arrOX)
		const tmpArr = store.arrOX.map((label) => (label * 2) % 50)
		setDataArr(tmpArr)
	}, [store.arrOX])

	const data = {
		labels: labelsArr,
		datasets: [
			{
				label: "Функция Таранова",
				data: dataArr,
				borderColor: "#0077ff",
				backgroundColor: "rgba(255, 99, 132, 0.2)",
			},
		],
	}

	const options = {
		scales: {
			x: {
				type: "linear",
				title: {
					display: true,
					text: "Значение оси OX",
				},
				min: Math.min(...labelsArr),
				max: Math.max(...labelsArr),
			},
			y: {
				type: "linear",
				title: {
					display: true,
					text: "Значение оси OY",
				},
				min: Math.min(...dataArr),
				max: Math.max(...dataArr),
			},
		},
	}

	return (
		<div className='chart-container'>
			<h2>График</h2>
			<Line data={data} options={options} />
		</div>
	)
}

export default observer(ChartLine)
