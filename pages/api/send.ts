const sgMail = require('@sendgrid/mail')
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    console.log(process.env);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const { email, message, receipt } = req.body

    const content = {
        to: email,
        from: "natasoftware.mail@gmail.com",
        subject: `Thanks for your Purchase!`,
        text: message,
        html: `<p>Thanks for your purchase! Here is a link to your invoice:</p><a href="${receipt}">Invoice Link</a><br><p>You can redownload your licensed copy of PresentSafe from: </p> <a href="https://presentsafe.com/api/app.zip">Here</a>`
    }

    try {
        await sgMail.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('Message not sent.')
    }
}