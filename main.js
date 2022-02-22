// this function is currently not workind due to cors
async function tabResponseSetup(params) {
	let tabs = [
		"earthquake measurements over time",
		"earthquakes over time (1930-2018)",
		"earthquakes throughout history",
		"worldwide measurements"
	]
	
	let functions = ["measureGraph", "yearMap", "rangeMap", "measureMap"]
	var index = 0;		
	await sleep(10000)
	tabs.forEach(tab => {
		let span = document.querySelector(`span[value='${tab}']`) 
		span.setAttribute("onfocus", `${functions[index]}();`) 
		index++
	});
}

let measureGraph = () => {
	console.log("measureGraph")
}

let yearMap = () => {
	console.log("yearMap")
}

let rangeMap = () => {
	console.log("rangeMap")
}

let measureMap = () => {
	console.log("measureMap")
}

// helpers
async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}