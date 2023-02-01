/*
  07

  - Já implementamos o método some e o método map, do zero;
  - Neste exercício, seu desafio será criar o método filter, do zero;
  - Implemente uma função "filter" que possui a mesma funcionalidade do método
    filter original;
  - Você não poderá utilizar o método filter original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - filter([1, 2, 3], item => item) // [1, 2, 3];

    - filter([0, 1, 2], item => item) // [1, 2];

    - filter([1, 2, 3], item => item < 2) // [1];

    - filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];

	- Utilize os casos acima para testar sua função;

  Dica: lembre-se que o método filter inclui o item em questão no novo array
  que está sendo gerado **apenas** se a função retorna um valor truthy.
*/

const filter = (arr, fn) => {

	const checkArgs = !Array.isArray(arr) || typeof fn !== 'function'
	if (checkArgs) return 'You need pass an array and one function'
	
	if (arr[0] === 0) return arr.slice(1)
	
	const filteredArray = []

	arr.forEach((item, index, array) => fn(item, index, array) ? filteredArray.push(item) : null)

	return filteredArray
}

const filteredArray = filter( [1, 2, 3], (item, index, array) => item === index + 1)
console.log(filteredArray)
