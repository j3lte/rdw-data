// *******************************************************
//
// Name: GEO PenR
//
// GEO Data laag met Park en Ride locaties.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/GEO-PenR/6wzd-evwu
// Permalink: https://opendata.rdw.nl/d/6wzd-evwu
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for GEO PenR
 */
export interface ResponseData {
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
  location?: { latitude: string; longitude: string; human_address: null | string; };
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
 * Fieldnames for **GeoPenr**
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
export interface IFields {
  /**
   * ### AreaDesc
   *
   * **Type**: Text
   */
   Areadesc: FieldObject<DataType.Text>;
  /**
   * ### AreaId
   *
   * **Type**: Text
   */
   Areaid: FieldObject<DataType.Text>;
  /**
   * ### AreaManagerId
   *
   * **Type**: Number
   */
   Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### EndDataArea
   *
   * **Type**: Number
   */
   Enddataarea: FieldObject<DataType.Number>;
  /**
   * ### Location
   *
   * **Type**: Point
   */
   Location: FieldObject<DataType.Point>;
  /**
   * ### Location (address)
   *
   * **Type**: Text
   */
   LocationAddress: FieldObject<DataType.Text>;
  /**
   * ### Location (city)
   *
   * **Type**: Text
   */
   LocationCity: FieldObject<DataType.Text>;
  /**
   * ### Location (state)
   *
   * **Type**: Text
   */
   LocationState: FieldObject<DataType.Text>;
  /**
   * ### Location (zip)
   *
   * **Type**: Text
   */
   LocationZip: FieldObject<DataType.Text>;
  /**
   * ### StartDataArea
   *
   * **Type**: Number
   */
   Startdataarea: FieldObject<DataType.Number>;
  /**
   * ### UsageId
   *
   * **Type**: Text
   */
   Usageid: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  Areadesc: Field("areadesc", DataType.Text),
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddataarea: Field("enddataarea", DataType.Number),
  Location: Field("location", DataType.Point),
  LocationAddress: Field("location_address", DataType.Text),
  LocationCity: Field("location_city", DataType.Text),
  LocationState: Field("location_state", DataType.Text),
  LocationZip: Field("location_zip", DataType.Text),
  Startdataarea: Field("startdataarea", DataType.Number),
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
  dataset: "6wzd-evwu",
  domain: "opendata.rdw.nl",
  full_name: "GEO PenR",
  provider_name: "GeoPenr",
  url: "https://opendata.rdw.nl/Parkeren/GEO-PenR/6wzd-evwu",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/6wzd-evwu",
}

/**
 * ### GEO PenR
 * GEO Data laag met Park en Ride locaties.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/GEO-PenR/6wzd-evwu
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/6wzd-evwu
 *
 * **Dataset ID:** 6wzd-evwu
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
