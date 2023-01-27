/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorConfigPolicyResponseData } from "./MonitorConfigPolicyResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving all monitor configuration policies.
 */
export class MonitorConfigPolicyListResponse {
  /**
   * An array of monitor configuration policies.
   */
  "data"?: Array<MonitorConfigPolicyResponseData>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<MonitorConfigPolicyResponseData>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
