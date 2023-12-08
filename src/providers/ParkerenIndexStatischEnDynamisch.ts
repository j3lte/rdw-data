// *******************************************************
//
// Name: Open Data Parkeren: Index Statisch en Dynamisch
//
// Index van statische en dynamische parkeerinformatie van Nederlandse gemeenten en private partijen
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa
// Permalink: https://opendata.rdw.nl/d/f6v7-gjpa
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

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
export const Fields = {
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
}

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
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenIndexStatischEnDynamisch_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenIndexStatischEnDynamisch = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
