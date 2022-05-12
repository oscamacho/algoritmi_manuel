/**
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/
const word = "abcccccccd"

//for..in..
function maxChar(word){
	const obj = counter(word);
	let highest = 0;
	let char
	for(k in obj){
		if(obj[k] > highest){
			highest = obj[k]
			char = k
		}
	}
	console.log(char)
}

//forEach
function maxChar2(word){
	const obj = counter(word);
	let highest = 0;
	let char
	Object.keys(obj).forEach(k => {
		if(obj[k]> highest){
			highest = obj[k]
			char = k
		}
	});
	console.log(char)
}

maxChar(word)
maxChar2(word)

//riciclone
function counter(word){
	let obj = {}
	for(i of word){
		if (obj[i]){
			obj[i]++
		}else{
			obj[i] = 1
		}
	}
	return obj
}


