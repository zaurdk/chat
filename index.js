import { transporter } from "./nodemailer.js"

async function SendMail() {
    let eMail = document.getElementById('Email').nodeValue;
    let text = document.getElementById('Text').nodeValue;

    await transporter.SendMail({
        from: '"Node js" <nodejs@example.com>',
        to: `${eMail}, ${eMail}`,
        subject: "Message from new messenger",
        text: `${text}`,
        html: `${text}`,
        attachments: []
    })
}

document.getElementById('Send').addEventListener('click', SendMail);