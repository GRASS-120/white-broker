import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const { EMAIL_HOST, EMAIL_HOST_PASSWORD, EMAIL_HOST_USER, EMAIL_PORT } =
    process.env;

class Mail {
    #transporter = null;

    constructor() {
        this.#transporter = this.#getTransporter();
    }

    #getTransporter() {
        return nodemailer.createTransport({
            //name: "nodemailer",
            host: EMAIL_HOST,
            port: EMAIL_PORT,
            secure: true,
            auth: {
                // jrjfmsvcofbceolx
                // clientId: "a5cd5fd2aa644c0087935449646832f6",
                // clientSecret: "c31566f439bf4c468aa1e87e54ad6bd2",
                user: EMAIL_HOST_USER,
                pass: EMAIL_HOST_PASSWORD,
                //accessToken: "be05f13c3895b9b10429d17c6a26ac30"
                
            },
        });
    }

    async send(reciever, message) {
        try {
            const info = await this.#transporter.sendMail({
                from: 'pokemon9116@yandex.ru',
                to: reciever,
                subject: 'Welcome to Test site',
                text: message,
                html: `<b>${message}</b>`,
            });
            return info.messageId;
        } catch (e) {
            return e;
        }
    }
}

export default new Mail();
