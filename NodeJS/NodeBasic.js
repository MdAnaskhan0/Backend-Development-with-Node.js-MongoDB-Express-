//NodeJS is a Javascript runtime environment.

//NodeJS is a platform that allows you to run Javascript code outside of a browser.

//npm init --> create package.json file

const fs = require('fs');

// fs.writeFile("new.txt", "Hello world", function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created");
//     }
// });


fs.appendFile("new.txt", ", Myself Md Anas Khan.", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});

