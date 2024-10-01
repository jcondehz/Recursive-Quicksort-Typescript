const arr = [2,6,5,3,0,8,7,1,3,3];


function quicksort(array:number[]):number[]{
    if(array.length<= 1) return array;  //caso base donde si hay menos de dos elementos en un array, esta automaticamente ordenado

    let pivote = array[array.length-1]; // escogemos de pivote el ultimo elemento de un array 
    let arrayMayor:number[] = [];
    let arrayMenor:number[] = [];  // creamos arrays para almacenar las elementos mayores, menores que el pivote
    let arrayIguales:number[] = []; // creamos tambien un array que almacene elementos iguales al pivote para evitar llamadas infinitas

    array.forEach((elemento) => {  //comparamos usando forEach que recorre cada elemento del array
    if (elemento > pivote) {
        arrayMayor.push(elemento);
    } else if(elemento < pivote){
        arrayMenor.push(elemento);
    }else{
        arrayIguales.push(elemento);
    }
    
});

    return quicksort(arrayMenor).concat(arrayIguales).concat(quicksort(arrayMayor));  // Aplicamos recursion donde hara los mismpos pasos con los subarrays
;
}

console.log(quicksort(arr));