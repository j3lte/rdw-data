// *******************************************************
//
// Name: GEO Parkeer Garages
//
// GEO Data laag met Parkeer Garage locaties.
//
// Category: Parkeren
// Tags:
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
// Permalink: https://opendata.rdw.nl/d/t5pc-eb34
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2017-04-21T11:41:32.000Z
// Structure last updated: 2025-03-03T02:07:24.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
export const Fields: {
  Areadesc: FieldObject<DataType.Text>;
  Areaid: FieldObject<DataType.Text>;
  Areamanagerid: FieldObject<DataType.Number>;
  Enddataarea: FieldObject<DataType.Number>;
  Location: FieldObject<DataType.Point>;
  LocationAddress: FieldObject<DataType.Text>;
  LocationCity: FieldObject<DataType.Text>;
  LocationState: FieldObject<DataType.Text>;
  LocationZip: FieldObject<DataType.Text>;
  Startdataarea: FieldObject<DataType.Number>;
  Usageid: FieldObject<DataType.Text>;
} = {
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

/**
 * Dataset metadata for **GeoParkeerGarages**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
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
  category: "Parkeren",
  tags: [],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2017-04-21T11:41:32.000Z",
  metadata_updated_at: "2025-03-03T02:07:24.000Z",
} as const;

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
 * **Tags:**
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2017-04-21T11:41:32.000Z
 *
 * **Structure last updated:** 2025-03-03T02:07:24.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<GeoParkeerGarages_ResponseData> =>
  createQueryWithDataset<GeoParkeerGarages_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **GEO Parkeer Garages**
 * GEO Data laag met Parkeer Garage locaties.
 *
 * Provider for the GEO Parkeer Garages dataset. Bundles:
 * - {@link GeoParkeerGarages.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link GeoParkeerGarages.Fields} — the queryable field definitions
 * - {@link GeoParkeerGarages.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:**
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** t5pc-eb34
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
 *
 * **Published:** 2017-04-21T11:41:32.000Z
 *
 * **Structure last updated:** 2025-03-03T02:07:24.000Z
 *
 * @example
 * ```ts
 * const { data } = await GeoParkeerGarages.RDWQuery()
 *   .where(Where.like(GeoParkeerGarages.Fields.Areadesc, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const GeoParkeerGarages = {
  RDWQuery,
  Fields,
  Info,
};
