var express = require('express');
var app = express();
const bodyParser = require("body-parser");

const nodemailer = require('nodemailer');
const urlencodedParser = bodyParser.urlencoded({extended: false});

let transporter;

nodemailer.createTestAccount().then((account) => {
  transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
          user: account.user,
          pass: account.pass,
      }
  });
});


app.post("/", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  


    let result = transporter.sendMail({
        from: '"MyTest" <testmail.forme@rambler.ru>',
        to: `${request.body.mail}, ${request.body.mail}`,
        subject: "Message from new messenger",
        text: `${request.body.text}`,
        html: `${request.body.text}`,
        attachments: []
    });

    console.log(result);

});

app.use(express.static(__dirname + '/', {
  setHeaders: function(res, path) {
    res.set({
      'Keep-Alive': 'timeout=10',
    })
  }
}));

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Your server is running at http://localhost:%s', port);
});


//https://metanit.com/web/nodejs/4.5.php