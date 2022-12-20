const nodeMailer = require('nodemailer')

module.exports = async (options )=>{
  const transporter = nodeMailer .createTransport({
    service:process.env.SMPT_SERVICE,
    host:process.env.SMPT_HOST,
    secure:true,
    auth:{
      user:process.env.SMPT_MAIL,
      pass:process.env.SMPT_PASSWORD ,  
    }
})
const {to,text,subject} = options


const mailOptions = {
  from: process.env.SMPT_MAIL, 
  to,text,subject
}

await transporter.sendMail(mailOptions)
}