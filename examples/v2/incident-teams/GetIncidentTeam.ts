/**
 * Get details of an incident team returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["getIncidentTeam"] = true;
const apiInstance = new v2.IncidentTeamsApi(configuration);

// there is a valid "team" in the system
const TEAM_DATA_ID = process.env.TEAM_DATA_ID as string;

const params: v2.IncidentTeamsApiGetIncidentTeamRequest = {
  teamId: TEAM_DATA_ID,
};

apiInstance
  .getIncidentTeam(params)
  .then((data: v2.IncidentTeamResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
