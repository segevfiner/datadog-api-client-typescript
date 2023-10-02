/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackAttributes } from "./PowerpackAttributes";
import { PowerpackRelationships } from "./PowerpackRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack data object.
 */
export class PowerpackData {
  /**
   * Powerpack attribute object.
   */
  "attributes"?: PowerpackAttributes;
  /**
   * ID of the powerpack.
   */
  "id"?: string;
  /**
   * Powerpack relationship object.
   */
  "relationships"?: PowerpackRelationships;
  /**
   * Type of widget, must be powerpack.
   */
  "type"?: string;

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
      type: "PowerpackAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "PowerpackRelationships",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackData.attributeTypeMap;
  }

  public constructor() {}
}
