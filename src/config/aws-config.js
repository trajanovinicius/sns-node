import AWS from 'aws-sdk';

export const sns = new AWS.SNS({ apiVersion: '2010-03-31' });