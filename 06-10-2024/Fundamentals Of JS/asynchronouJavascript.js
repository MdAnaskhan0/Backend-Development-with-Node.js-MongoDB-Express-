async function information() {
    var blob = await fetch('https://randomuser.me/api/');
    var json = await blob.json();
    console.log(json.results[0].name.first, json.results[0].name.last, json.results[0].email);
}

information();