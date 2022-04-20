"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FargateDemoStack = void 0;
const cdk = require("@aws-cdk/core");
const aws_ec2_1 = require("@aws-cdk/aws-ec2");
const ecs = require("@aws-cdk/aws-ecs");
const ecs_patterns = require("@aws-cdk/aws-ecs-patterns");
class FargateDemoStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // VPC
        const vpc = new aws_ec2_1.Vpc(this, "youtubeVPC", {
            maxAzs: 2,
            natGateways: 1,
        });
        // Fargate cluster
        const cluster = new ecs.Cluster(this, "youtubeCluster", {
            vpc: vpc,
        });
        // Fargate service
        const backendService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "backendService", {
            cluster: cluster,
            memoryLimitMiB: 1024,
            cpu: 512,
            desiredCount: 2,
            taskImageOptions: {
                image: ecs.ContainerImage.fromAsset("/home/dipendra/DevOps/cdk/demo/backend/"),
                environment: {
                    myVar: "variable01",
                },
            },
        });
        // Health check
        backendService.targetGroup.configureHealthCheck({ path: "/" });
        // Load balancer url
        new cdk.CfnOutput(this, "loadBalancerUrl", {
            value: backendService.loadBalancer.loadBalancerDnsName,
            exportName: "loadBalancerUrl",
        });
    }
}
exports.FargateDemoStack = FargateDemoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFyZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhcmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsMERBQTBEO0FBRTFELE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDN0MsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNO1FBQ04sTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN0QyxNQUFNLEVBQUUsQ0FBQztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDdEQsR0FBRyxFQUFFLEdBQVU7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCO1FBQ2xCLE1BQU0sY0FBYyxHQUFHLElBQUksWUFBWSxDQUFDLHFDQUFxQyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNwRyxPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsSUFBSTtZQUNwQixHQUFHLEVBQUUsR0FBRztZQUNSLFlBQVksRUFBRSxDQUFDO1lBQ2YsZ0JBQWdCLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyx5Q0FBeUMsQ0FBQztnQkFDOUUsV0FBVyxFQUFFO29CQUNYLEtBQUssRUFBRSxZQUFZO2lCQUNwQjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsZUFBZTtRQUNmLGNBQWMsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUUvRCxvQkFBb0I7UUFDcEIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUN6QyxLQUFLLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxtQkFBbUI7WUFDdEQsVUFBVSxFQUFFLGlCQUFpQjtTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUF0Q0QsNENBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgeyBWcGMgfSBmcm9tIFwiQGF3cy1jZGsvYXdzLWVjMlwiO1xuaW1wb3J0ICogYXMgZWNzIGZyb20gXCJAYXdzLWNkay9hd3MtZWNzXCI7XG5pbXBvcnQgKiBhcyBlY3NfcGF0dGVybnMgZnJvbSBcIkBhd3MtY2RrL2F3cy1lY3MtcGF0dGVybnNcIjtcblxuZXhwb3J0IGNsYXNzIEZhcmdhdGVEZW1vU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIFxuICAgIC8vIFZQQ1xuICAgIGNvbnN0IHZwYyA9IG5ldyBWcGModGhpcywgXCJ5b3V0dWJlVlBDXCIsIHtcbiAgICAgIG1heEF6czogMixcbiAgICAgIG5hdEdhdGV3YXlzOiAxLFxuICAgIH0pO1xuXG4gICAgLy8gRmFyZ2F0ZSBjbHVzdGVyXG4gICAgY29uc3QgY2x1c3RlciA9IG5ldyBlY3MuQ2x1c3Rlcih0aGlzLCBcInlvdXR1YmVDbHVzdGVyXCIsIHtcbiAgICAgIHZwYzogdnBjIGFzIGFueSxcbiAgICB9KTtcblxuICAgIC8vIEZhcmdhdGUgc2VydmljZVxuICAgIGNvbnN0IGJhY2tlbmRTZXJ2aWNlID0gbmV3IGVjc19wYXR0ZXJucy5BcHBsaWNhdGlvbkxvYWRCYWxhbmNlZEZhcmdhdGVTZXJ2aWNlKHRoaXMsIFwiYmFja2VuZFNlcnZpY2VcIiwge1xuICAgICAgY2x1c3RlcjogY2x1c3RlcixcbiAgICAgIG1lbW9yeUxpbWl0TWlCOiAxMDI0LFxuICAgICAgY3B1OiA1MTIsXG4gICAgICBkZXNpcmVkQ291bnQ6IDIsXG4gICAgICB0YXNrSW1hZ2VPcHRpb25zOiB7XG4gICAgICAgIGltYWdlOiBlY3MuQ29udGFpbmVySW1hZ2UuZnJvbUFzc2V0KFwiL2hvbWUvZGlwZW5kcmEvRGV2T3BzL2Nkay9kZW1vL2JhY2tlbmQvXCIpLFxuICAgICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAgIG15VmFyOiBcInZhcmlhYmxlMDFcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBIZWFsdGggY2hlY2tcbiAgICBiYWNrZW5kU2VydmljZS50YXJnZXRHcm91cC5jb25maWd1cmVIZWFsdGhDaGVjayh7IHBhdGg6IFwiL1wiIH0pO1xuXG4gICAgLy8gTG9hZCBiYWxhbmNlciB1cmxcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcImxvYWRCYWxhbmNlclVybFwiLCB7XG4gICAgICB2YWx1ZTogYmFja2VuZFNlcnZpY2UubG9hZEJhbGFuY2VyLmxvYWRCYWxhbmNlckRuc05hbWUsXG4gICAgICBleHBvcnROYW1lOiBcImxvYWRCYWxhbmNlclVybFwiLFxuICAgIH0pO1xuICB9XG59Il19