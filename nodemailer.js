var nodemailer = require('nodemailer');
    
let testEmailAccount = nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: testEmailAccount.user,
    pass: testEmailAccount.pass
  }
});

export { transporter };