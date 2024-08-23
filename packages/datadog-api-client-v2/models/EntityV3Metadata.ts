/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3MetadataAdditionalOwnersItems } from "./EntityV3MetadataAdditionalOwnersItems";
import { EntityV3MetadataContactsItems } from "./EntityV3MetadataContactsItems";
import { EntityV3MetadataLinksItems } from "./EntityV3MetadataLinksItems";
import { EntityV3MetadataOwner } from "./EntityV3MetadataOwner";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of Entity V3 Metadata object.
 */
export class EntityV3Metadata {
  /**
   * The additional owners of the entity, usually a team
   */
  "additionalOwners"?: Array<EntityV3MetadataAdditionalOwnersItems>;
  /**
   * A list of contacts for the entity
   */
  "contacts"?: Array<EntityV3MetadataContactsItems>;
  /**
   * Short description of the entity. The UI can leverage the description for display
   */
  "description"?: string;
  /**
   * User friendly name of the entity. The UI can leverage the display name for display
   */
  "displayName"?: string;
  /**
   * A read-only globally unique identifier for the entity generated by Datadog.  User supplied values are ignored.
   */
  "id"?: string;
  /**
   * The entity reference from which to inherit metadata
   */
  "inheritFrom"?: string;
  /**
   * A list of links for the entity
   */
  "links"?: Array<EntityV3MetadataLinksItems>;
  /**
   * A read-only set of Datadog managed attributes generated by Datadog.  User supplied values are ignored.
   */
  "managed"?: { [key: string]: any };
  /**
   * Unique name given to an entity under the kind/namespace
   */
  "name": string;
  /**
   * The owner of the entity, usually a team
   */
  "owner"?: EntityV3MetadataOwner;
  /**
   * A set of custom tags
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    additionalOwners: {
      baseName: "additionalOwners",
      type: "Array<EntityV3MetadataAdditionalOwnersItems>",
    },
    contacts: {
      baseName: "contacts",
      type: "Array<EntityV3MetadataContactsItems>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "displayName",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    inheritFrom: {
      baseName: "inheritFrom",
      type: "string",
    },
    links: {
      baseName: "links",
      type: "Array<EntityV3MetadataLinksItems>",
    },
    managed: {
      baseName: "managed",
      type: "{ [key: string]: any; }",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    owner: {
      baseName: "owner",
      type: "EntityV3MetadataOwner",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3Metadata.attributeTypeMap;
  }

  public constructor() {}
}
