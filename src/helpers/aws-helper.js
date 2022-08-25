import AWS from 'aws-sdk';

export class AwsHelper {
  update() {
    return AWS.config.update({
      region: process.env.AWS_REGION,
      accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACESS_KEY_ID,
    });
  }
}


export default AwsHelper