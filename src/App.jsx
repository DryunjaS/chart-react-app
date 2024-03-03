import "bootstrap/dist/css/bootstrap.min.css"
import "./style/css/main.css"
import ListRanges from "./components/ListRanges"
import ChartLine from "./components/Chart"
import Chart from "chart.js/auto"

function App() {
	return (
		<div className='my-container'>
			<ChartLine />
			<ListRanges />
		</div>
	)
}

export default App
