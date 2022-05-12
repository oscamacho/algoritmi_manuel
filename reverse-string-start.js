/**
	* Data una stringa, restituire una stringa con i caratteri in ordine inverso.
	* Esempio:
	* reverse("ciao") => "oaic"
	*/
	const word = "prossimi allo scudetto"
	//with for..of..
	function anagram(word){
		let arr = []
		for(w of word){
			arr.push(w)
		}
		arr.reverse()
		console.log(arr.join(""))
	}
	//with split 
	function anagram2(word){
		console.log(word.split("").reverse().join(""))
	}
	anagram(word)
	anagram2(word)