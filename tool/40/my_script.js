var numeros = new Array();

document.getElementById('btn-add').addEventListener('click', function() {
	var numero = document.getElementById('numero').value;
	numeros[numeros.length] = parseInt(numero);
	console.log(numeros);	
	atualizaListagem(numeros);
});


//Apaga a lista e exibe novamente de acordo com o array....
function atualizaListagem(arr){
	var ul = document.getElementById("numeros");
	//Limpa os nomes
	ul.innerHTML = '';
	
	for(i in arr){
		var li = document.createElement("li");
		var el = document.createTextNode(arr[i]);
		li.appendChild(el);
		
		if(arr[i] % 2 == 0){
			//par
			ul.appendChild(li).setAttribute("class", "par");
		} else {
			
			ul.appendChild(li);
		}
	}
}




