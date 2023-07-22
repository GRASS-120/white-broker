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
         host: EMAIL_HOST,
         port: EMAIL_PORT,
         secure: true,
         auth: {
            user: EMAIL_HOST_USER,
            pass: EMAIL_HOST_PASSWORD,
         },
      });
   }

   async send(message) {
      try {
         const info = await this.#transporter.sendMail({
            from: EMAIL_HOST_USER,
            to: EMAIL_HOST_USER,
            subject: `Запрос от клиента ${message.name}`,
            text: `${message.name} ${message.phoneNumber} ${message.sum}`,
            html: 
            `
               <div>
                  <h1>Номер телефона: ${message.phoneNumber}</h1>
                  <h1>Имя клиента: ${message.name}</h1>
                  <h1>Необходимая сумма: ${message.sum}</h1>
                  <h1>Вид кредита: ${message.credit}</h1>
               </div>
            `,
         });
         return info.messageId;
      } catch (e) {
         return e;
      }
   }
}

export default new Mail();
