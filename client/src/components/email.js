import React from "react";


const transporter = nodemailer.createTransport({
    service: gmail,
    auth: {
           user: 'username',
           pass: 'password'
       }
   });
  
  
   const mailOptions = {
    from: 'TheMSJExperience@gmail.com', 
    to: 'ellenshaws@yahoo.com', 
    subject: 'Janet and Mike would like invite you to...', 
    html: '<p>You have been invited to an event </p>'
  };
  
  
  
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });

//   export default transporter;