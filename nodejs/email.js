var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7d599074063ee5",
    pass: "826f5cb2aca97a"
  }
});

var mailOptions = {
  from: '7d599074063ee5',
  to: 'yourfriend@yahoo.com',
  subject: 'How to send Email using NodeJS',
  html: <h1>Nakul Narayan R L</h1>
};

transport.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});