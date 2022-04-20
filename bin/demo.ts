#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import {FargateDemoStack} from '../lib/fargate';

const app = new cdk.App();
new FargateDemoStack(app, 'cdk-stack', {
  stackName: 'cdk-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});