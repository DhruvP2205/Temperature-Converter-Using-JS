


const calculateTemp = () =>
{
	const numTemp = document.getElementById('temp').value;

	const tempSelected = document.getElementById('temp_diff');
	const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;


	const celToFah = (cel) =>
	{
		let farValue = Math.round((cel / 5 * 9) + 32);
		return farValue;
	}

	const fahToCel = (fah) =>
	{
		let celValue = Math.round((fah -32) * 5 / 9);
		return celValue;
	}

	let result;

	if (valueTemp == "cel")
	{
		result = celToFah(numTemp);
		document.getElementById('resultContainer').innerHTML = `${result} Fahrenheit`;
	}
	else
	{
		result = fahToCel(numTemp);
		document.getElementById('resultContainer').innerHTML = `${result} Celsius`;
	}
}