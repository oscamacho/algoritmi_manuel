/**
	* Dato un numero intero restituire il numero inverso
	* Esempio
	* reverseInt(15) => 51
	* reverseInt(981) => 189
	* reverseInt(-90) => -9
	* reverseInt(-15) => -51
	*/
function reverseInt(n){
	let isNegative 
	if(n<0){
		isNegative = true
	}
	let str = n.toString()
	let arr = str.split("").reverse() 
	let revStr = arr.join("")
	let revN = parseFloat(revStr)
	console.log(isNegative ? -(revN) : revN)
}

reverseInt(-7900000)