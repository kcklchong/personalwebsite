 const nodemailer = require('nodemailer');
 const mailGun = require('nodemailer-mailgun-transport');

 const auth = {
    auth:{
        api_key: '2bf39b3936838a0ecbfc44bfb2533205-f135b0f1-9f804119',
        domain: 'sandbox3c3660f6d29a4c3a965bbe2db76eb2dc.mailgun.org'
    }
 };

 const transporter = nodemailer.createTransport(mailGun(auth));

 const sendMail = (name, email, message, cb) => {
    const mailOptions = {
        from: email,
        to: 'kellychongkckl@gmail.com',
        subject: name,
        text: message
     };
    
    //  transporter.sendMail(mailOptions, function(err, data){
    //     if (err){
    //         cb(err,null);
    //     } else {
    //         cb(null,data);
    //     }
    //  });

     transporter.sendMail(mailOptions);
        
 };

module.exports = sendMail;
 