#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const fargate_1 = require("../lib/fargate");
const app = new cdk.App();
new fargate_1.FargateDemoStack(app, 'cdk-stack', {
    stackName: 'cdk-stack',
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUNBQXFDO0FBQ3JDLDRDQUFnRDtBQUVoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLDBCQUFnQixDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUU7SUFDckMsU0FBUyxFQUFFLFdBQVc7SUFDdEIsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO1FBQ3RDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQjtLQUN6QztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7RmFyZ2F0ZURlbW9TdGFja30gZnJvbSAnLi4vbGliL2ZhcmdhdGUnO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IEZhcmdhdGVEZW1vU3RhY2soYXBwLCAnY2RrLXN0YWNrJywge1xuICBzdGFja05hbWU6ICdjZGstc3RhY2snLFxuICBlbnY6IHtcbiAgICByZWdpb246IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX1JFR0lPTixcbiAgICBhY2NvdW50OiBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9BQ0NPVU5ULFxuICB9LFxufSk7Il19