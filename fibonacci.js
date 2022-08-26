var numero=2;

fibonacciGenerator(numero);
//console.log(a);
function fibonacciGenerator(numero){
var a=[];
    for (var i=0; i<numero; i++)

        {
            if (i==0)
                a[i]=i;
            else if (i==1)
                a[i]=i;
            else if(i>1)
                 a[i]=a[i-2]+a[i-1];
        }
      console.log(a);
    return a;
}
