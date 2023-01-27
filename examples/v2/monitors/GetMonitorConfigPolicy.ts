/**
 * Get a monitor configuration policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MonitorsApi(configuration);

// there is a valid "monitor_configuration_policy" in the system
const MONITOR_CONFIGURATION_POLICY_DATA_ID = process.env
  .MONITOR_CONFIGURATION_POLICY_DATA_ID as string;

const params: v2.MonitorsApiGetMonitorConfigPolicyRequest = {
  policyId: MONITOR_CONFIGURATION_POLICY_DATA_ID,
};

apiInstance
  .getMonitorConfigPolicy(params)
  .then((data: v2.MonitorConfigPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
