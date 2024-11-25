var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var findNum = arr.find((item)=>{
    for(var i = 0; i< arr.length; i++){
        if(item >= 0 && item <= 7){
            return true;
        }else{
            return false;
        }
    }
})

console.log(findNum);

var ans = arr.indexOf(5); 
console.log(ans);
