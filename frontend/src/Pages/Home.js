import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Home=()=>{

		const options = {
			exportEnabled: false,
			animationEnabled: true,
			title: {
				text: "All Employee Records"
			},
			data: [{
				type: "pie",
				startAngle: 90,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 20,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 82, label: "Student" },
					{ y: 18, label: "Teachers" },
					
				]
			}]
		}
		return (
		<div id='gr'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
		);
	}

export default Home;

