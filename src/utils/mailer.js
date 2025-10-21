import nodemailer from "nodemailer"

const transport = nodemailer.createTransport(
    {
        host : "smtp.gmail.com",
        port : 465,
        secure : true,
        auth : {
            user : process.env.EmailId,
            pass : process.env.EmailPass
        }
    }
)

const sendOtp = async(toU , otp)=>{
    const info = await transport.sendMail(
        {
            from : `Developer Alam  <${process.env.EmailId}>`,
            to : toU,
            subject : "OTP verification",
            text : `You OTP is :  ${otp}`,
            html : `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #4CAF50; text-align: center;">🔒 Developer Verification</h2>
        <p style="font-size: 16px; color: #333;">Hello,</p>
        <p style="font-size: 16px; color: #333;">
          Please use the following OTP to verify your email address:
        </p>
        <h1 style="text-align: center; color: #000; background: #f2f2f2; padding: 10px; border-radius: 8px;">
          ${otp}
        </h1>
        <p style="font-size: 14px; color: #777; margin-top: 20px;">
          This OTP is valid for <b>10 minutes</b>. Do not share it with anyone.
        </p>
        <p style="font-size: 14px; color: #555;">– The Developer Team</p>
      </div>`
        }
    );
    console.log("OTP email send %s",info.messageId)
}

export {sendOtp};