import nodemailer from "nodemailer"
import { envConfig } from "../config/config"

interface IData{
    to:string,
    subject:string,
    text:string
}

const sendMail=async (data:IData)=>{

 
   const transporter= nodemailer.createTransport({
        service:"gmail",
        auth:{

            user:envConfig.email,
            pass:envConfig.emailPass
        }
    })

    const mailOptions={
        from:"Online Store<mandalravi952@gmail.com>",
        to:data.to,
        subject:data.subject,
        text:data.text


    }

  try {
      await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log("email send failed",error)
    throw error
    
  }

}

export default sendMail