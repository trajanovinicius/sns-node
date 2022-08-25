import { SmsService } from '../services/sms-service'


export class SnsController {
  async execute(req, res) {
    try {
      const smsService = new SmsService()

      const { messageText, phoneNumber } = req.body;

      const sendSms = await smsService.sendSMS(messageText, phoneNumber)

      if (sendSms instanceof Error) {
        return res.status(504).send({
          error: sendSms
        })
      }

      return res.json({ message: "SMS enviado com sucesso!" })
    } catch (err) {
      return res.json({
        error: err
      })
    }

  }

}