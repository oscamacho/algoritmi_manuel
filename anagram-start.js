/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/


const word = "cinema"
const word2 = "iceman"

//with for .. of..
function anagram(word1, word2){
	let arr = []
	let arr2 = []
	for(w of word1){
		arr.push(w)
	}
	for(w of word2){
		arr2.push(w)
	}
	arr.sort()
	arr2.sort()
	let t = arr.every((el,id) => el === arr2[id])
	console.log(t)
}

//with split
function anagram2(w1, w2){
	let arr = w1.split("").sort()
	let arr2 = w2.split("").sort()
	let t = arr.every((el,id) => el === arr2[id])
	console.log(t)
}

anagram(word, word2)
anagram2(word, word2)