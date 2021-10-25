import "./styles.css";

const phones = ["Iphone11", "Iphone12", "Iphone13"];

let i = 0;
let text1 = "";

while (phones[i]) {
	text1 += phones[i] + "<br>";
	i++;
}

document.getElementById("demo").innerHTML = text1;
