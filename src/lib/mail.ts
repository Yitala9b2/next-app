import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Mail from 'nodemailer/lib/mailer';

const smtpTransport = nodemailer.createTransport({
	host: 'smtp.yandex.ru',
	port: 465,
	secure: true,
	auth: {
		user: 'Yitala9B2@yandex.ru',
		pass: 'wfockthistcqoaty'
	},
	tls: {rejectUnauthorized: false},
} as SMTPTransport.Options)
//, {
//	from: 'yitala-test <Yitala9B2@yandex.ru>'
//});

type SendEmailDto = {
    sender: Mail.Address,
    recipients: Mail.Address[],
    subject: string,
    message: string
    attachments: Mail.Attachment[]
}

const sendEmail = async (dto: SendEmailDto) => {
    const {sender, recipients, subject, message, attachments} = dto

    return await smtpTransport.sendMail({
        from: sender,
        to: recipients,
        subject: subject,
        //html: message,
        text: message,
        attachments: attachments
    }
    );
}

export default sendEmail;