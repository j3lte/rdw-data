// *******************************************************
//
// Name: GEO Parkeer Garages
//
// GEO Data laag met Parkeer Garage locaties.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
// Permalink: https://opendata.rdw.nl/d/t5pc-eb34
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for GEO Parkeer Garages
 */
export interface GeoParkeerGarages_ResponseData {
  /**
   * ### AreaDesc
   *
   * **Type**: Text
   */
  areadesc?: string;
  /**
   * ### AreaId
   *
   * **Type**: Text
   */
  areaid?: string;
  /**
   * ### AreaManagerId
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDataArea
   *
   * **Type**: Number
   */
  enddataarea?: string;
  /**
   * ### Location
   *
   * **Type**: Point
   */
  location?: { latitude: string; longitude: string; human_address: null | string };
  /**
   * ### Location (address)
   *
   * **Type**: Text
   */
  location_address?: string;
  /**
   * ### Location (city)
   *
   * **Type**: Text
   */
  location_city?: string;
  /**
   * ### Location (state)
   *
   * **Type**: Text
   */
  location_state?: string;
  /**
   * ### Location (zip)
   *
   * **Type**: Text
   */
  location_zip?: string;
  /**
   * ### StartDataArea
   *
   * **Type**: Number
   */
  startdataarea?: string;
  /**
   * ### UsageId
   *
   * **Type**: Text
   */
  usageid?: string;
}

/**
 * Fieldnames for **GeoParkeerGarages**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areadesc`` | ``areadesc`` | _Text_ |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddataarea`` | ``enddataarea`` | _Number_ |
 * | ``Location`` | ``location`` | _Point_ |
 * | ``LocationAddress`` | ``location_address`` | _Text_ |
 * | ``LocationCity`` | ``location_city`` | _Text_ |
 * | ``LocationState`` | ``location_state`` | _Text_ |
 * | ``LocationZip`` | ``location_zip`` | _Text_ |
 * | ``Startdataarea`` | ``startdataarea`` | _Number_ |
 * | ``Usageid`` | ``usageid`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### AreaDesc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `areadesc`
   */
  Areadesc: Field("areadesc", DataType.Text),
  /**
   * ### AreaId
   *
   * **Type**: Text
   *
   * **Database Column Name**: `areaid`
   */
  Areaid: Field("areaid", DataType.Text),
  /**
   * ### AreaManagerId
   *
   * **Type**: Number
   *
   * **Database Column Name**: `areamanagerid`
   */
  Areamanagerid: Field("areamanagerid", DataType.Number),
  /**
   * ### EndDataArea
   *
   * **Type**: Number
   *
   * **Database Column Name**: `enddataarea`
   */
  Enddataarea: Field("enddataarea", DataType.Number),
  /**
   * ### Location
   *
   * **Type**: Point
   *
   * **Database Column Name**: `location`
   */
  Location: Field("location", DataType.Point),
  /**
   * ### Location (address)
   *
   * **Type**: Text
   *
   * **Database Column Name**: `location_address`
   */
  LocationAddress: Field("location_address", DataType.Text),
  /**
   * ### Location (city)
   *
   * **Type**: Text
   *
   * **Database Column Name**: `location_city`
   */
  LocationCity: Field("location_city", DataType.Text),
  /**
   * ### Location (state)
   *
   * **Type**: Text
   *
   * **Database Column Name**: `location_state`
   */
  LocationState: Field("location_state", DataType.Text),
  /**
   * ### Location (zip)
   *
   * **Type**: Text
   *
   * **Database Column Name**: `location_zip`
   */
  LocationZip: Field("location_zip", DataType.Text),
  /**
   * ### StartDataArea
   *
   * **Type**: Number
   *
   * **Database Column Name**: `startdataarea`
   */
  Startdataarea: Field("startdataarea", DataType.Number),
  /**
   * ### UsageId
   *
   * **Type**: Text
   *
   * **Database Column Name**: `usageid`
   */
  Usageid: Field("usageid", DataType.Text),
};

export const Info = {
  fields: [
    "Areadesc",
    "Areaid",
    "Areamanagerid",
    "Enddataarea",
    "Location",
    "LocationAddress",
    "LocationCity",
    "LocationState",
    "LocationZip",
    "Startdataarea",
    "Usageid",
  ],
  dataset: "t5pc-eb34",
  domain: "opendata.rdw.nl",
  full_name: "GEO Parkeer Garages",
  provider_name: "GeoParkeerGarages",
  url: "https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/t5pc-eb34",
};

/**
 * ### GEO Parkeer Garages
 * GEO Data laag met Parkeer Garage locaties.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/t5pc-eb34
 *
 * **Dataset ID:** t5pc-eb34
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the GEO Parkeer Garages dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areadesc, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<GeoParkeerGarages_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const GeoParkeerGarages: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<GeoParkeerGarages_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
