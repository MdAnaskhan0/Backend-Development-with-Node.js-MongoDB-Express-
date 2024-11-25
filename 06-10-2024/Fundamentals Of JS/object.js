var people = [
    {
        name: {
            first: 'Anas',
            last: 'Ahmed',
        },
        age: 24,
        number: 1981380806,
        address: 'Dhaka'
    },
    {
        name: {
            first: 'Rakib',
            last: 'Ahmed',
        },
        age: 25,
        number: 1537191012,
        address: 'Dhaka'
    }
]

var findPerson = people.filter((person)=>{
    var {name, age, number, address} = person;
    if(age === 24){
        return true;
    }else{
        return false;
    }
});

console.log(findPerson.map((person)=>{
    var {name, age, number, address} = person;
    return {name, number, address};
}))