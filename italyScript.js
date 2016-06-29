var fs = require('fs');

fs.readFile('Trek.json', function(err, data) {
  if (err) {
    throw err;
    console.log(err);
  } else {

    var allData = JSON.parse(data);
    var italy = allData.Italy
    var capri = italy.Capri
    var excur = capri.Excursions
    // console.log("Parsed the JSON");

    // var printer = italy.Italy.Capri.Food

    // console.log(printer)

    excur.forEach(function(thing){
      console.log(thing);
      excur.push("+");
    });

    excur = JSON.stringify(excur);

    fs.writeFile('Trek.json', excur, function(err) {
      if (err) {
        throw err;
      } else {
        console.log('excur was added');
      }
    });
  }
});
