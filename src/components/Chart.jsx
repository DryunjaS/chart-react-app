import React, { useState } from "react"
import { Line } from "react-chartjs-2"

const ChartLine = () => {
	const [labelsArr, setLabelsArr] = useState(
		Array.from({ length: 5 }, (_, i) => i)
	)
	const [dataArr, setDataArr] = useState(
		Array.from({ length: 5 }, (_, i) => i + 10)
	)
	const data = {
		labels: labelsArr,
		datasets: [
			{
				label: "Dataset 1",
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
				min: 0,
				max: 100,
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

export default ChartLine
