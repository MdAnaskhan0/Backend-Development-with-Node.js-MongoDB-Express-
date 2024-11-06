var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (val) {
    var newVal = val * 2;
    if(val % 2 == 0){
        console.log(newVal)
    }else{
        console.log(val)
    }
})


var persons = [
    {
        name: 'Anas',
        age: 24,
        number: 1981380806,
        address: 'Dhaka',
    },
    {
        name: 'Rakib',
        age: 22,
        number: 1537191012,
        address: 'Dhaka',
    }
]


persons.forEach((person)=>{
    var {name, age, number, address} = person;
    console.log(name, age, number, address);

    if (name == 'Rakib'){
        console.log(name, age, number, address);
    }
})



var information = [12, 14, 15, 16, 20, 'This is a string', { name: 'anas', age: 10 }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];


information.forEach(function (info) {
    if (typeof info == 'number') {
        console.log(info);
    }
    if (typeof info == 'string') {
        console.log(info);
    }
    if (typeof info == 'object' && !Array.isArray(info)) {
        console.log(info.name, info.age);
    }
    if (Array.isArray(info)) {
        if (info.length < 0) {
            return "Empty array"; 
        } else {
            console.log(info[0]);
        }
    }
});