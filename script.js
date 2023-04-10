//converting temperature degree 



document.getElementById("submitbtn").onclick = function () {
	let temp;
	if (document.getElementById("cbtn").checked) {
		temp = document.getElementById("degree").value;
		temp = Number(temp);
		temp = tocelcius(temp);
		document.getElementById("result").innerHTML = temp + "°C";

	}
	else if (document.getElementById("fbtn").checked) {
		temp = document.getElementById("degree").value;
		temp = Number(temp);
		temp = tofahrenheit(temp);
		document.getElementById("result").innerHTML = temp + "°F";

	}
	else if (document.getElementById("kbtn").checked) {
		temp = document.getElementById("degree").value;
		temp = Number(temp);
		temp = tokelvin(temp);
		document.getElementById("result").innerHTML = temp + "K";

	}
	else {
		document.getElementById("result").innerHTML = "select a unit";
	}
}






function tocelcius(temp) {
	return (temp - 32) * (5 / 9);//formula
}

function tofahrenheit(temp) {
	return temp * 9 / 5 + 32;//formula

}
function tokelvin(temp) {
	return temp + 273.15;
}