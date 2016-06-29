var fs = require('fs');

fs.readFile('emailList.json', function(err, data) {
  if (err) {
    throw err;
  } else {
    var list = JSON.parse(data);
    var listInfo = list.string.split(" ");
    console.log(list)
    console.log(listInfo)
    console.log("did it")
    list.listInfo = [];
    console.log(list)

    list.emails.forEach(function(email) {
      if (/\w+@\w+\.\w+/.test(email)) {
        list.emails.push(email);
      }
    });
    console.log(list.emails);
    emailList = JSON.stringify(emailList);
    fs.writeFile('emailList.json', emailList, function(err) {
      if (err) {
        throw err;
      } else {
        console.log('Emails successfully sorted!');
      }
    });
  }
});
