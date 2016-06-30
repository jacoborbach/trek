function writeJson(){

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
      
      console.log("Parsed the JSON");

      excur.forEach(function(thing){
        console.log(thing);
        excur.push("+");
      });

      excur = JSON.stringify(excur);

      fs.writeFile('test.json', excur, function(err) {
        if (err) {
          throw err;
        } else {
          console.log('excur was added');
        }
      });
    }
  });
}

function createUserJson(json){
  var fs = require('fs');

  var stringy = JSON.stringify(json);

  fs.writeFile('test.json', json, function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("test.json was written");
    }
  })
}

function buildData(){
    // var txtData = "User" : {
    //     "firstName" : $("#nameField").val(),
    //     "lastName" : $("#lastNameField").val()
    // };
    // var txtData = "firstName: "+$("#nameField").val()+" lastName: "+$("#lastNameField").val()
    var txtData = 'User:{"firstName":'+$("#nameField").val()+',"lastName":'+$("#lastNameField").val()+'}';
    return txtData;
}

function myBuild(myArray){
  var data = {};
  var array = myArray;

  jQuery.each(array, function() {
        data[this.name] = this.value;
  });
    
  return data;
}
