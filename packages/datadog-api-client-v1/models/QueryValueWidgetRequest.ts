/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetAggregator } from "./WidgetAggregator";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Updated query value widget.
 */

export class QueryValueWidgetRequest {
  "aggregator"?: WidgetAggregator;
  "apmQuery"?: LogQueryDefinition;
  "auditQuery"?: LogQueryDefinition;
  /**
   * List of conditional formats.
   */
  "conditionalFormats"?: Array<WidgetConditionalFormat>;
  "eventQuery"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries.
   */
  "formulas"?: Array<WidgetFormula>;
  "logQuery"?: LogQueryDefinition;
  "networkQuery"?: LogQueryDefinition;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * TODO.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas.
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "responseFormat"?: FormulaAndFunctionResponseFormat;
  "rumQuery"?: LogQueryDefinition;
  "securityQuery"?: LogQueryDefinition;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "WidgetAggregator",
    },
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
    },
    auditQuery: {
      baseName: "audit_query",
      type: "LogQueryDefinition",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<WidgetConditionalFormat>",
    },
    eventQuery: {
      baseName: "event_query",
      type: "LogQueryDefinition",
    },
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
    },
    logQuery: {
      baseName: "log_query",
      type: "LogQueryDefinition",
    },
    networkQuery: {
      baseName: "network_query",
      type: "LogQueryDefinition",
    },
    processQuery: {
      baseName: "process_query",
      type: "ProcessQueryDefinition",
    },
    profileMetricsQuery: {
      baseName: "profile_metrics_query",
      type: "LogQueryDefinition",
    },
    q: {
      baseName: "q",
      type: "string",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    responseFormat: {
      baseName: "response_format",
      type: "FormulaAndFunctionResponseFormat",
    },
    rumQuery: {
      baseName: "rum_query",
      type: "LogQueryDefinition",
    },
    securityQuery: {
      baseName: "security_query",
      type: "LogQueryDefinition",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
