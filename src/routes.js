import AWS from 'aws-sdk';
import {Router} from 'express';

const router = Router();

//função para fazer o envio da mensagem:
async function sendSMS({sns, Message, PhoneNumber}){
  sns.publish({
    Message,
    PhoneNumber
  }).promise();
}

AWS.config.update({
  region: process.env.AWS_REGION,
  accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACESS_KEY_ID,
});


const sns = new AWS.SNS({apiVersion: '2010-03-31'});

router.post('/sendMessage', async (req, res) => {
  const {Message,PhoneNumber} = req.body;

  await sendSMS({sns, Message, PhoneNumber});

  res.json({Message: "SMS enviado com sucesso!"})
});

export default router;

