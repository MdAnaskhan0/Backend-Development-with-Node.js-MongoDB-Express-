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
        occupation: 'Designer',
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
        hobbies: ['Cycling', 'Painting', 'Yoga']
    },
    {
        name: 'Eve',
        age: 32,
        occupation: 'Data Scientist',
        city: 'Boston',
        hobbies: ['Chess', 'Running', 'Swimming']
    }
];

people.map((peron) => {
    var { name, age, occupation, city, hobbies } = peron;
    if (occupation == 'Developer') {
        // console.log(name, age, occupation, city);
        if (hobbies.includes('Yoga')) {
            hobbies.push('Hacking');
            // console.log(hobbies);
        }
    }

    if (age > 25 && age < 35) {
        // console.log(name)
    }

    if (city == 'New York') {
        // console.log(name)
    }

    if (hobbies.includes('Gaming')) {
        // console.log(name)
    }
})

