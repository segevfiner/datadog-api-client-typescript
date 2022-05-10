/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonthlyUsageAttributionValues } from "./MonthlyUsageAttributionValues";

import { AttributeTypeMap } from "../util";

/**
 * Usage Summary by tag for a given organization.
 */
export class MonthlyUsageAttributionBody {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM].
   */
  "month"?: Date;
  /**
   * The name of the organization.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The source of the usage attribution tag configuration and the selected tags in the format `<source_org_name>:<selected tag 1>///<selected tag 2>///<selected tag 3>`.
   */
  "tagConfigSource"?: string;
  /**
   * Usage Summary by tag name.
   */
  "tags"?: { [key: string]: Array<string> };
  /**
   * Datetime of the most recent update to the usage values.
   */
  "updatedAt"?: Date;
  /**
   * Fields in Usage Summary by tag(s).
   */
  "values"?: MonthlyUsageAttributionValues;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    month: {
      baseName: "month",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    tagConfigSource: {
      baseName: "tag_config_source",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: Array<string>; }",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    values: {
      baseName: "values",
      type: "MonthlyUsageAttributionValues",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionBody.attributeTypeMap;
  }

  public constructor() {}
}
