import { AwsHelper } from '../helpers/aws-helper'
import { sns } from '../config/aws-config'


export class SmsService {
  async sendSMS(messageText, phoneNumber) {
    const awsHelper = new AwsHelper()

    const publishSms = sns.publish({
      Message: messageText,
      PhoneNumber: phoneNumber
    }).promise().catch(error => { return error })

    awsHelper.update()

    return publishSms
  }

}
