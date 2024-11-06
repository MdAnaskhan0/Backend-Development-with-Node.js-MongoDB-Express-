function sum(i,j,k) { 

    var a = i;
    var b = j;
    var c = k;

    sum = a + b + c;
    return sum; // here return the value of sum
}

function avg(i){
    var sum = i;
    var avg = sum/3;
    return avg; // here return the value of avg
}

console.log("Function length: ",sum.length); // Number of parameters are called as length of the function.

var input = sum(1,2,3); //passing the parameters i,j,k value
var avg = avg(input); //passing the parameters i value
console.log(avg);