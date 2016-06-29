var fs = require('fs');

fs.readFile('pokemon.json', function(err, data) {
  if (err) {
    throw err;
  } else {
    var poke = JSON.parse(data);
    //var listInfo = list.string.split(" ");
    //console.log(poke);
    console.log("Parsed the JSON");
    //list.listInfo = [];

    poke.starters.forEach(function(pokemon){
      if ('squirtle'===pokemon){
        console.log(pokemon)
      }
    });


    // console.log(list.emails);
    // emailList = JSON.stringify(emailList);
    // fs.writeFile('emailList.json', emailList, function(err) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log('Emails successfully sorted!');
    //   }
    // });
  }
});
