/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleDetectionMethod } from "./SecurityMonitoringRuleDetectionMethod";
import { SecurityMonitoringRuleEvaluationWindow } from "./SecurityMonitoringRuleEvaluationWindow";
import { SecurityMonitoringRuleImpossibleTravelOptions } from "./SecurityMonitoringRuleImpossibleTravelOptions";
import { SecurityMonitoringRuleKeepAlive } from "./SecurityMonitoringRuleKeepAlive";
import { SecurityMonitoringRuleMaxSignalDuration } from "./SecurityMonitoringRuleMaxSignalDuration";
import { SecurityMonitoringRuleNewValueOptions } from "./SecurityMonitoringRuleNewValueOptions";

import { AttributeTypeMap } from "../util";

/**
 * Options on rules.
 */
export class SecurityMonitoringRuleOptions {
  /**
   * The detection method.
   */
  "detectionMethod"?: SecurityMonitoringRuleDetectionMethod;
  /**
   * A time window is specified to match when at least one of the cases matches true. This is a sliding window and evaluates in real time.
   */
  "evaluationWindow"?: SecurityMonitoringRuleEvaluationWindow;
  /**
   * Options on impossible travel rules.
   */
  "impossibleTravelOptions"?: SecurityMonitoringRuleImpossibleTravelOptions;
  /**
   * Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window.
   */
  "keepAlive"?: SecurityMonitoringRuleKeepAlive;
  /**
   * A signal will “close” regardless of the query being matched once the time exceeds the maximum duration. This time is calculated from the first seen timestamp.
   */
  "maxSignalDuration"?: SecurityMonitoringRuleMaxSignalDuration;
  /**
   * Options on new value rules.
   */
  "newValueOptions"?: SecurityMonitoringRuleNewValueOptions;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    detectionMethod: {
      baseName: "detectionMethod",
      type: "SecurityMonitoringRuleDetectionMethod",
    },
    evaluationWindow: {
      baseName: "evaluationWindow",
      type: "SecurityMonitoringRuleEvaluationWindow",
      format: "int32",
    },
    impossibleTravelOptions: {
      baseName: "impossibleTravelOptions",
      type: "SecurityMonitoringRuleImpossibleTravelOptions",
    },
    keepAlive: {
      baseName: "keepAlive",
      type: "SecurityMonitoringRuleKeepAlive",
      format: "int32",
    },
    maxSignalDuration: {
      baseName: "maxSignalDuration",
      type: "SecurityMonitoringRuleMaxSignalDuration",
      format: "int32",
    },
    newValueOptions: {
      baseName: "newValueOptions",
      type: "SecurityMonitoringRuleNewValueOptions",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
