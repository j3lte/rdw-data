// *******************************************************
//
// Name: Open Data Parkeren: Index Statisch en Dynamisch
//
// Index van statische en dynamische parkeerinformatie van Nederlandse gemeenten en private partijen
//
// Category: Parkeren
// Tags: index, statisch, dynamisch, parkeren
// License: Unknown
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa
// Permalink: https://opendata.rdw.nl/d/f6v7-gjpa
// Owner: Open data team RDW
// Creator: Open data team RDW
// Published: 2018-12-31T22:25:40.000Z
// Structure last updated: 2018-12-31T22:25:40.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: Index Statisch en Dynamisch
 */
export interface ParkerenIndexStatischEnDynamisch_ResponseData {
  /**
   * ### Dynamic parking data
   *
   * **Type**: Checkbox
   */
  dynamic_parking_data?: boolean;
  /**
   * ### Organization
   *
   * **Type**: Text
   */
  organization?: string;
  /**
   * ### Organization ID
   *
   * **Type**: Number
   */
  organization_id?: string;
  /**
   * ### Standard static parking data
   *
   * **Type**: Text
   */
  standard_static_parking_data?: string;
  /**
   * ### Static parking data
   *
   * **Type**: Checkbox
   */
  static_parking_data?: boolean;
  /**
   * ### URL dynamic parking data
   *
   * **Type**: Text
   */
  url_dynamic_parking_data?: string;
  /**
   * ### URL static parking data
   *
   * **Type**: Text
   */
  url_static_parking_data?: string;
}

/**
 * Fieldnames for **ParkerenIndexStatischEnDynamisch**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``DynamicParkingData`` | ``dynamic_parking_data`` | _Checkbox_ |
 * | ``Organization`` | ``organization`` | _Text_ |
 * | ``OrganizationId`` | ``organization_id`` | _Number_ |
 * | ``StandardStaticParkingData`` | ``standard_static_parking_data`` | _Text_ |
 * | ``StaticParkingData`` | ``static_parking_data`` | _Checkbox_ |
 * | ``UrlDynamicParkingData`` | ``url_dynamic_parking_data`` | _Text_ |
 * | ``UrlStaticParkingData`` | ``url_static_parking_data`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  DynamicParkingData: FieldObject<DataType.Checkbox>;
  Organization: FieldObject<DataType.Text>;
  OrganizationId: FieldObject<DataType.Number>;
  StandardStaticParkingData: FieldObject<DataType.Text>;
  StaticParkingData: FieldObject<DataType.Checkbox>;
  UrlDynamicParkingData: FieldObject<DataType.Text>;
  UrlStaticParkingData: FieldObject<DataType.Text>;
} = {
  /**
   * ### Dynamic parking data
   *
   * **Type**: Checkbox
   *
   * **Database Column Name**: `dynamic_parking_data`
   */
  DynamicParkingData: Field("dynamic_parking_data", DataType.Checkbox),
  /**
   * ### Organization
   *
   * **Type**: Text
   *
   * **Database Column Name**: `organization`
   */
  Organization: Field("organization", DataType.Text),
  /**
   * ### Organization ID
   *
   * **Type**: Number
   *
   * **Database Column Name**: `organization_id`
   */
  OrganizationId: Field("organization_id", DataType.Number),
  /**
   * ### Standard static parking data
   *
   * **Type**: Text
   *
   * **Database Column Name**: `standard_static_parking_data`
   */
  StandardStaticParkingData: Field("standard_static_parking_data", DataType.Text),
  /**
   * ### Static parking data
   *
   * **Type**: Checkbox
   *
   * **Database Column Name**: `static_parking_data`
   */
  StaticParkingData: Field("static_parking_data", DataType.Checkbox),
  /**
   * ### URL dynamic parking data
   *
   * **Type**: Text
   *
   * **Database Column Name**: `url_dynamic_parking_data`
   */
  UrlDynamicParkingData: Field("url_dynamic_parking_data", DataType.Text),
  /**
   * ### URL static parking data
   *
   * **Type**: Text
   *
   * **Database Column Name**: `url_static_parking_data`
   */
  UrlStaticParkingData: Field("url_static_parking_data", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenIndexStatischEnDynamisch**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "DynamicParkingData",
    "Organization",
    "OrganizationId",
    "StandardStaticParkingData",
    "StaticParkingData",
    "UrlDynamicParkingData",
    "UrlStaticParkingData",
  ],
  dataset: "f6v7-gjpa",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: Index Statisch en Dynamisch",
  provider_name: "ParkerenIndexStatischEnDynamisch",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/f6v7-gjpa",
  category: "Parkeren",
  tags: ["index", "statisch", "dynamisch", "parkeren"],
  license: "Unknown",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2018-12-31T22:25:40.000Z",
  metadata_updated_at: "2018-12-31T22:25:40.000Z",
} as const;

/**
 * ### Open Data Parkeren: Index Statisch en Dynamisch
 * Index van statische en dynamische parkeerinformatie van Nederlandse gemeenten en private partijen
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/f6v7-gjpa
 *
 * **Dataset ID:** f6v7-gjpa
 *
 * **Category:** Parkeren
 *
 * **Tags:** index, statisch, dynamisch, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Published:** 2018-12-31T22:25:40.000Z
 *
 * **Structure last updated:** 2018-12-31T22:25:40.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: Index Statisch en Dynamisch dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.DynamicParkingData, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenIndexStatischEnDynamisch_ResponseData> =>
  createQueryWithDataset<ParkerenIndexStatischEnDynamisch_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data Parkeren: Index Statisch en Dynamisch**
 * Index van statische en dynamische parkeerinformatie van Nederlandse gemeenten en private partijen
 *
 * Provider for the Open Data Parkeren: Index Statisch en Dynamisch dataset. Bundles:
 * - {@link ParkerenIndexStatischEnDynamisch.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenIndexStatischEnDynamisch.Fields} — the queryable field definitions
 * - {@link ParkerenIndexStatischEnDynamisch.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** index, statisch, dynamisch, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** f6v7-gjpa
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa
 *
 * **Published:** 2018-12-31T22:25:40.000Z
 *
 * **Structure last updated:** 2018-12-31T22:25:40.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenIndexStatischEnDynamisch.RDWQuery()
 *   .where(Where.like(ParkerenIndexStatischEnDynamisch.Fields.DynamicParkingData, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenIndexStatischEnDynamisch = {
  RDWQuery,
  Fields,
  Info,
};
