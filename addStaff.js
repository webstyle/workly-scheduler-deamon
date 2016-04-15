const request = require('request');
const rn = require('random-number');
var fs = require('fs');

for (var i = 0; i < 2; i++) {
  request.get('https://randomuser.me/api/', function(error, response, body) {
    if (error || !response.statusCode == 200) return console.error(error);

    var id = rn(),
      res = JSON.parse(body);

    var post = {
      id: id,
      name: res.results[0].name.first + " " + res.results[0].name.last
    }

    request.post('http://localhost:1337/staff/create').form(post);

  });
};
