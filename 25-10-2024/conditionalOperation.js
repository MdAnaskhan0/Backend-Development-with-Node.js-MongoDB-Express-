/* ******* If else *******

var p1 = 38;
var p2 = 26;

if(p1 > p2){
    console.log(`${p1} is getter the ${p2}`)
}else{
    console.log(`${p2} is getter the ${p1}`)
}

*/


/* ******* Switch Statement ******* */

var date = new Date();
var today = date.getDay();

switch (today) {
    case 0:
        console.log(`Today is Sunday`)
        break;
    case 1:
        console.log(`Today is Monday`)
        break;
    case 2:
        console.log(`Today is Tuesday`)
        break;
    case 3:
        console.log(`Today is Wednesday`)
        break;
    case 4:
        console.log(`Today is Thursday`)
        break;
    case 5:
        console.log(`Today is Friday`)
        break;
    case 6:
        console.log(`Today is Saturday`)
        break;
    default:
        break;
}