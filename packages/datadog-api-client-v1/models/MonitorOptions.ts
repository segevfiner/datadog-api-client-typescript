/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorDeviceID } from "./MonitorDeviceID";
import { MonitorFormulaAndFunctionQueryDefinition } from "./MonitorFormulaAndFunctionQueryDefinition";
import { MonitorOptionsAggregation } from "./MonitorOptionsAggregation";
import { MonitorRenotifyStatusType } from "./MonitorRenotifyStatusType";
import { MonitorThresholds } from "./MonitorThresholds";
import { MonitorThresholdWindowOptions } from "./MonitorThresholdWindowOptions";

import { AttributeTypeMap } from "../util";

/**
 * List of options associated with your monitor.
 */
export class MonitorOptions {
  /**
   * Type of aggregation performed in the monitor query.
   */
  "aggregation"?: MonitorOptionsAggregation;
  /**
   * IDs of the device the Synthetics monitor is running on.
   */
  "deviceIds"?: Array<MonitorDeviceID>;
  /**
   * Whether or not to send a log sample when the log monitor triggers.
   */
  "enableLogsSample"?: boolean;
  /**
   * We recommend using the [is_renotify](https://docs.datadoghq.com/monitors/notify/?tab=is_alert#renotify), block in the original message instead. A message to include with a re-notification. Supports the `@username` notification we allow elsewhere. Not applicable if `renotify_interval` is `None`.
   */
  "escalationMessage"?: string;
  /**
   * Time (in seconds) to delay evaluation, as a non-negative integer. For example, if the value is set to `300` (5min), the timeframe is set to `last_5m` and the time is 7:00, the monitor evaluates data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor always has data during evaluation.
   */
  "evaluationDelay"?: number;
  /**
   * Whether the log alert monitor triggers a single alert or multiple alerts when any group breaches a threshold.
   */
  "groupbySimpleMonitor"?: boolean;
  /**
   * A Boolean indicating whether notifications from this monitor automatically inserts its triggering tags into the title.  **Examples** - If `True`, `[Triggered on {host:h1}] Monitor Title` - If `False`, `[Triggered] Monitor Title`
   */
  "includeTags"?: boolean;
  /**
   * Whether or not the monitor is locked (only editable by creator and admins). Use `restricted_roles` instead.
   */
  "locked"?: boolean;
  /**
   * How long the test should be in failure before alerting (integer, number of seconds, max 7200).
   */
  "minFailureDuration"?: number;
  /**
   * The minimum number of locations in failure at the same time during at least one moment in the `min_failure_duration` period (`min_location_failed` and `min_failure_duration` are part of the advanced alerting rules - integer, >= 1).
   */
  "minLocationFailed"?: number;
  /**
   * Time (in seconds) to skip evaluations for new groups.  For example, this option can be used to skip evaluations for new hosts while they initialize.  Must be a non negative integer.
   */
  "newGroupDelay"?: number;
  /**
   * Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non negative integer.  Use new_group_delay instead.
   */
  "newHostDelay"?: number;
  /**
   * The number of minutes before a monitor notifies after data stops reporting. Datadog recommends at least 2x the monitor timeframe for query alerts or 2 minutes for service checks. If omitted, 2x the evaluation timeframe is used for query alerts, and 24 hours is used for service checks.
   */
  "noDataTimeframe"?: number;
  /**
   * A Boolean indicating whether tagged users is notified on changes to this monitor.
   */
  "notifyAudit"?: boolean;
  /**
   * A Boolean indicating whether this monitor notifies when data stops reporting.
   */
  "notifyNoData"?: boolean;
  /**
   * The number of minutes after the last notification before a monitor re-notifies on the current status. It only re-notifies if it’s not resolved.
   */
  "renotifyInterval"?: number;
  /**
   * The number of times re-notification messages should be sent on the current status at the provided re-notification interval.
   */
  "renotifyOccurrences"?: number;
  /**
   * The types of monitor statuses for which re-notification messages are sent.
   */
  "renotifyStatuses"?: Array<MonitorRenotifyStatusType>;
  /**
   * A Boolean indicating whether this monitor needs a full window of data before it’s evaluated. We highly recommend you set this to `false` for sparse metrics, otherwise some evaluations are skipped. Default is false.
   */
  "requireFullWindow"?: boolean;
  /**
   * Information about the downtime applied to the monitor.
   */
  "silenced"?: { [key: string]: number };
  /**
   * ID of the corresponding Synthetic check.
   */
  "syntheticsCheckId"?: string;
  /**
   * Alerting time window options.
   */
  "thresholdWindows"?: MonitorThresholdWindowOptions;
  /**
   * List of the different monitor threshold available.
   */
  "thresholds"?: MonitorThresholds;
  /**
   * The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.
   */
  "timeoutH"?: number;
  /**
   * List of requests that can be used in the monitor query. **This feature is currently in beta.**
   */
  "variables"?: Array<MonitorFormulaAndFunctionQueryDefinition>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "MonitorOptionsAggregation",
    },
    deviceIds: {
      baseName: "device_ids",
      type: "Array<MonitorDeviceID>",
    },
    enableLogsSample: {
      baseName: "enable_logs_sample",
      type: "boolean",
    },
    escalationMessage: {
      baseName: "escalation_message",
      type: "string",
    },
    evaluationDelay: {
      baseName: "evaluation_delay",
      type: "number",
      format: "int64",
    },
    groupbySimpleMonitor: {
      baseName: "groupby_simple_monitor",
      type: "boolean",
    },
    includeTags: {
      baseName: "include_tags",
      type: "boolean",
    },
    locked: {
      baseName: "locked",
      type: "boolean",
    },
    minFailureDuration: {
      baseName: "min_failure_duration",
      type: "number",
      format: "int64",
    },
    minLocationFailed: {
      baseName: "min_location_failed",
      type: "number",
      format: "int64",
    },
    newGroupDelay: {
      baseName: "new_group_delay",
      type: "number",
      format: "int64",
    },
    newHostDelay: {
      baseName: "new_host_delay",
      type: "number",
      format: "int64",
    },
    noDataTimeframe: {
      baseName: "no_data_timeframe",
      type: "number",
      format: "int64",
    },
    notifyAudit: {
      baseName: "notify_audit",
      type: "boolean",
    },
    notifyNoData: {
      baseName: "notify_no_data",
      type: "boolean",
    },
    renotifyInterval: {
      baseName: "renotify_interval",
      type: "number",
      format: "int64",
    },
    renotifyOccurrences: {
      baseName: "renotify_occurrences",
      type: "number",
      format: "int64",
    },
    renotifyStatuses: {
      baseName: "renotify_statuses",
      type: "Array<MonitorRenotifyStatusType>",
    },
    requireFullWindow: {
      baseName: "require_full_window",
      type: "boolean",
    },
    silenced: {
      baseName: "silenced",
      type: "{ [key: string]: number; }",
    },
    syntheticsCheckId: {
      baseName: "synthetics_check_id",
      type: "string",
    },
    thresholdWindows: {
      baseName: "threshold_windows",
      type: "MonitorThresholdWindowOptions",
    },
    thresholds: {
      baseName: "thresholds",
      type: "MonitorThresholds",
    },
    timeoutH: {
      baseName: "timeout_h",
      type: "number",
      format: "int64",
    },
    variables: {
      baseName: "variables",
      type: "Array<MonitorFormulaAndFunctionQueryDefinition>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorOptions.attributeTypeMap;
  }

  public constructor() {}
}
