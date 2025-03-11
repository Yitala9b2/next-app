//import { NextResponse, NextRequest } from 'next';
import 'server-only';
import sendEmail from '@/src/lib/mail';
import { NextResponse, NextRequest } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';
import puppeteer from 'puppeteer';
//type Response = {
//    error?: string;
//    status?: string;
//    message?: string;
//  };

type Fields = {
    name: string;
    tel: string;
    mail: string;
};

export async function POST(req: NextRequest) {
    const { name, mail, tel } = (await req.json()) as unknown as Fields;

    const sender = {
        name: 'my App',
        address: 'Yitala9B2@yandex.ru',
    };
    const recipients = [
        {
            name: 'yahoo',
            address: 'vitala9b2@yahoo.com',
        },
        {
            name: 'yandex',
            address: 'Yitala9B2@yandex.ru',
        },
    ];

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const htmlContent = `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                h1 { color: blue; }
                .footer { margin-top: 50px; font-size: 12px; color: gray; }
              </style>
            </head>
            <body>
              <h1>Привет, мир! ${name}</h1>
              <p>Это PDF, сгенерированный из HTML в Puppeteer. ${mail}</p>
              <p class="footer">© 2025 My Company</p>
            </body>
          </html>
        `;

        await page.setContent(htmlContent, { waitUntil: 'load' });
        //const pdfDoc = await PDFDocument.create();
        //const page = pdfDoc.addPage([600, 400]);
        //const { width, height } = page.getSize();
        //page.drawText(`Hello ${name}, this is your PDF! ${mail}`, {
        //    x: 50,
        //    y: height - 50,
        //    size: 24,
        //    color: rgb(0, 0, 0),
        //});
        const pdfBytes = await page.pdf({
            format: 'A4',
            printBackground: true,
        });
        const pdfBuffer = Buffer.from(pdfBytes);

        await browser.close();
        //const pdfBytes = await pdfDoc.save();
        //const pdfBuffer = Buffer.from(pdfBytes);
        //const pdfBase64 = Buffer.from(pdfBytes).toString('base64');

        //console.log('PDF Buffer:', pdfBuffer);
        //console.log('Size:', pdfBuffer.length);

        const mailData = {
            sender,
            recipients,
            subject: `Message from ${name}`,
            message: `${name} | Sent from: ${mail} | ${name}, ${mail}, ${tel}`,

            attachments: [
                {
                    filename: 'document.pdf',
                    content: pdfBuffer,
                    contentType: 'application/pdf',
                },
            ],
            //html: `<div>${name}</div><p>Sent from: ${mail}</p>`
        };

        await sendEmail(mailData);
        //if (error) {
        //console.log(error)
        //return new NextResponse("Error to sent mail", { status: 400 })
        //} else {
        //console.log('Email sent: ' + info.response);
        //}
        //});
        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 },
        );
        //res.status(200).send({ status: 'done', message: 'message has been sent' });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 },
        );
    }
}

//export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//    const { name, mail, tel } = req.body as Fields;
//    const mailData = {
//        from: mail,
//        to: 'Yitala9B2@yandex.ru',
//        subject: `Message from ${name}`,
//        text: `${name} | Sent from: ${mail}`,
//        html: `<div>${name}</div><p>Sent from: ${mail}</p>`
//      };
//    //res.send('hello')
//    sendEmail(mailData)
//    console.log(name, mail, tel)
//}
