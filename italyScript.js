var fs = require('fs');

fs.readFile('ITALY1.json', function(err, data) {
  if (err) {
    throw err;
    console.log(err);
  } else {

    var italy = JSON.parse(data);

    console.log("Parsed the JSON");

    italy.Italy.Capri.Food.forEach(function(thing){
      console.log(thing)
    });
  }
});
