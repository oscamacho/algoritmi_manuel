/**
	* Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
	* Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
	* dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
	* mostrare "FizzBuzz".
	*/


function fizzBuzz (){
	for(let i=0; i<100; i++){
		if (i != 0) {
			if (i % 5 === 0 && i % 3 === 0){
				console.log("fizzBuzz");
			}
			else if (i % 5 === 0) {
				console.log("Buzz");
			}
			else if (i % 3 === 0) {
				console.log("Fizz");
			}
			else {
				console.log(i);
			}
		}
		else {
			console.log(i);
		}
	}
}

fizzBuzz();