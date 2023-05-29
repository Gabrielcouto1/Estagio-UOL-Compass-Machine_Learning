'''Lambda script to create an EC2 instance. The environment variables needed are:

AMI: the id of the OS you choose to create the instance based on;
INSTANCE_TYPE: the type (eg.: "t2.micro");
KEY_NAME: the name of your key pair;
SUBNET_ID: the id of the subnet you want to use;
ACCESS_KEY: the access key linked to your IAM account;
SECRET_ACCESS_KEY: the secret access key linket do your IAM account.
'''

import os
import boto3

AMI = os.environ['AMI']
INSTANCE_TYPE = os.environ['INSTANCE_TYPE']
KEY_NAME = os.environ['KEY_NAME']
SUBNET_ID = os.environ['SUBNET_ID']
ACCESS_KEY = os.environ['ACCESS_KEY']
SECRET_ACCESS_KEY = os.environ['SECRET_ACCESS_KEY']

ec2 = boto3.resource('ec2', region_name='us-east-1', aws_access_key_id=ACCESS_KEY, aws_secret_access_key=SECRET_ACCESS_KEY)


def lambda_handler(event, context):
    instance = ec2.create_instances(
        TagSpecifications=[
            {
                'ResourceType': 'instance',
                'Tags': [
                    {
                        'Key': 'Name',
                        'Value': 'teste7'
                    },
                    {
                        'Key': 'CostCenter',
                        'Value': 'teste7'
                    },
                    {
                        'Key': 'Project',
                        'Value': 'teste7'
                    }
                ]
            },
            {
                'ResourceType': 'volume',
                'Tags': [
                    {
                        'Key': 'Name',
                        'Value': 'teste7'
                    },
                    {
                        'Key': 'CostCenter',
                        'Value': 'teste7'
                    },
                    {
                        'Key': 'Project',
                        'Value': 'teste7'
                    }
                ]
            }
        ],
        ImageId=AMI,
        InstanceType=INSTANCE_TYPE,
        KeyName=KEY_NAME,
        SubnetId=SUBNET_ID,
        MaxCount=1,
        MinCount=1
    )

    print("New instance created:", instance[0].id)
