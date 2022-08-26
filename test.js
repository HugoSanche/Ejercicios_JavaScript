

var numero=15;
fibonacciGenerator(numero);

function fibonacciGenerator(n) {
   var object = [];
    for (var i = 0; i < n; i++) {
        if (i === 0) { object.push(0) }
        if (i === 1) { object.push(1) }


        if (i > 1) { object.push(object[objlength-1]+object[objlength-2]) }
        var objlength = object.length

    }
    console.log(object);
return object

}
