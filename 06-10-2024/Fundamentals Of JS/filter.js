var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArray = arr.filter((item) => {
    if(item % 3 == 0){
        return true;
    }else{
        return false;
    }
})

// console.log(newArray);

var people = [
    {
        name: 'Alice',
        age: 30,
        occupation: 'Engineer',
        city: 'New York',
        hobbies: ['Reading', 'Traveling', 'Hiking']
    },
    {
        name: 'Bob',
        age: 25,
        occupation: 'Developer',
        city: 'San Francisco',
        hobbies: ['Photography', 'Cooking', 'Gaming']
    },
    {
        name: 'Charlie',
        age: 35,
        occupation: 'Teacher',
        city: 'Chicago',
        hobbies: ['Writing', 'Music', 'Gardening']
    },
    {
        name: 'Diana',
        age: 28,
        occupation: 'Developer',
        city: 'Austin',
        hobbies: ['Cycling', 'Programming', 'Yoga']
    },
    {
        name: 'Eve',
        age: 32,
        occupation: 'Developer',
        city: 'Boston',
        hobbies: ['Programming', 'Running', 'Swimming']
    }
];

var filterHobbies = people.filter((person)=>{
    var {name, age, occupation, city, hobbies} = person;

    if (hobbies.includes('Programming')){
        return true;
    }
})

var filterDeveloper = people.filter(function (person){
    var {name, age, occupation, city, hobbies} = person;

    if(occupation == 'Developer'){
        return true;
    }
})

console.log("The hobbies of Programming are: ");
filterHobbies.forEach((person)=>{
    console.log(person.name );
    console.log(person.hobbies );
})

console.log("\n\nThe Occupation of Developer are: ");
filterDeveloper.forEach((person)=>{
    console.log(person.name +" "+person.occupation );})

