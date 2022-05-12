/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/
const word = "anna"

//XD inline, illeggibile ma cool
function palindrome(word){
	console.log(word.split("").every((el,id) => el === word.split("").reverse()[id]))
}

palindrome(word)