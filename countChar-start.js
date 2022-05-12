/**
	* Scrivere una funzione che conti le ricorrenze dei caratteri all'interno di
	* una parola. La funzione dovrà restituire un'oggetto con chiave la lettera e
	* come valore il conteggio. Mostrare il risultato in console.
	* Esempio
	* countChar("hello") => {h: 1, e: 1, l: 2, o: 1}
	*/

const word = "hello"
//for .. of ..
function counter(word){
	let obj = {};
	for(let i of word){
		if (obj[i]){
			obj[i]+=1;
		}else{
			obj[i] = 1;
		}
	}
	console.log(obj);
}
//forEach and split
function counter2(word){
	let obj={};
	let w = word.split("");
	w.forEach(e => {
		if (obj[e]){
			obj[e]+=1;
		}else{
			obj[e] = 1;
		}
	});
	console.log(obj);
}

counter(word);
counter2(word);