/**
 * AWS Integration - Delete account config returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteAWSAccount"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

// there is a valid "aws_account_v2" in the system
const AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID = process.env
  .AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID as string;

const params: v2.AWSIntegrationApiDeleteAWSAccountRequest = {
  awsAccountId: AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID,
};

apiInstance
  .deleteAWSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
