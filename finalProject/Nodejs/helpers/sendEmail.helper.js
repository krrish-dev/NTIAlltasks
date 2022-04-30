const nodemailer = require("nodemailer")
const smtpConfig = {
    service:'gmail',
    auth:{
        user:"ntinodejs2022@gmail.com",
        pass:"ZMme6UFd5hTMXLp"
    }
}
const sendEmailMe = (reciverEmail) =>{
    try{
        const transporter = nodemailer.createTransport(smtpConfig)
        let mailOptions = {
            from:"g17",
            to:reciverEmail,
            subject:"new account",
            html:"<h3>hello</h3><p>new account created</p>"
        }
        transporter.sendMail(mailOptions)
    }
    catch(e){
        console.log(e)
    }
}
module.exports = sendEmailMe