/**
	* Scrivere una funzione che ricerchi la prima occorrenza di un determinato
	* numero in una serie di numeri ordinati e restituisca un valore booleano
	* true se presente, false altrimenti. Mostrare il risultato in console.
	*
	* La ricerca deve implementare l'algoritmo di ricerca binaria.
	* Esempio -> https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/01125313/image-2.png
	*/
const arrNum = [1, 2, 3, 4, 5, 60, 66, 79, 90]

//non so se sia l'implementazione più efficiente 
//però amo lo stile funzionale 
function bSearch(n, arr){
	let mid = Math.floor(arr.length/2)
	if (n === arr[mid]){
		console.log(true)
		return
	}
	else if ( n > arr[mid] && arr.length > 1){
		return bSearch(n, arr.slice(mid))
	} 
	else if (n < arr[mid] && arr.length > 1){
		return bSearch(n, arr.slice(0, mid))
	} 
	else {
		console.log(false)
		return
	}
}
bSearch(5, arrNum)