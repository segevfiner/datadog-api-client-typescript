/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmRetentionFilterType } from "./ApmRetentionFilterType";
import { RetentionFilterAllAttributes } from "./RetentionFilterAllAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the retention filter.
 */
export class RetentionFilterAll {
  /**
   * The attributes of the retention filter.
   */
  "attributes": RetentionFilterAllAttributes;
  /**
   * The ID of the retention filter.
   */
  "id": string;
  /**
   * The type of the resource.
   */
  "type": ApmRetentionFilterType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "RetentionFilterAllAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApmRetentionFilterType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilterAll.attributeTypeMap;
  }

  public constructor() {}
}
