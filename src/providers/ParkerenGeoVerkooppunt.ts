// *******************************************************
//
// Name: Open Data Parkeren: GEO VERKOOPPUNT
//
// Tabel met geografische informatie van een verkooppunt.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp
// Permalink: https://opendata.rdw.nl/d/cgqw-pfbp
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data Parkeren: GEO VERKOOPPUNT
 */
export interface ResponseData {
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateSellingPoint
   * 
   * Datum waarop een bepaald verkooppunt niet meer actief is.
   *
   * **Type**: Text
   */
  enddatesellingpoint?: string;
  /**
   * ### Location
   * 
   * De cordinaten van een verkooppunt.
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
   * ### SellingPointDesc
   * 
   * Omschrijving van een verkooppunt.
   *
   * **Type**: Text
   */
  sellingpointdesc?: string;
  /**
   * ### SellingPointId
   * 
   * Identificatiecode van een verkooppunt. Het SellingPointId is numeriek en hoeft niet uniek te zijn. Een SellingPointId kan op meerdere locaties voorkomen, die samen een verkooppuntgroep vormen.
   *
   * **Type**: Number
   */
  sellingpointid?: string;
  /**
   * ### StartDateSellingPoint
   * 
   * Datum vanaf wanneer een bepaald verkooppunt actief is.
   *
   * **Type**: Text
   */
  startdatesellingpoint?: string;
}

/**
 * Fieldnames for **ParkerenGeoVerkooppunt**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatesellingpoint`` | ``enddatesellingpoint`` | _Text_ |
 * | ``Location`` | ``location`` | _Point_ |
 * | ``LocationAddress`` | ``location_address`` | _Text_ |
 * | ``LocationCity`` | ``location_city`` | _Text_ |
 * | ``LocationState`` | ``location_state`` | _Text_ |
 * | ``LocationZip`` | ``location_zip`` | _Text_ |
 * | ``Sellingpointdesc`` | ``sellingpointdesc`` | _Text_ |
 * | ``Sellingpointid`` | ``sellingpointid`` | _Number_ |
 * | ``Startdatesellingpoint`` | ``startdatesellingpoint`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
   Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### EndDateSellingPoint
   * 
   * Datum waarop een bepaald verkooppunt niet meer actief is.
   *
   * **Type**: Text
   */
   Enddatesellingpoint: FieldObject<DataType.Text>;
  /**
   * ### Location
   * 
   * De cordinaten van een verkooppunt.
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
   * ### SellingPointDesc
   * 
   * Omschrijving van een verkooppunt.
   *
   * **Type**: Text
   */
   Sellingpointdesc: FieldObject<DataType.Text>;
  /**
   * ### SellingPointId
   * 
   * Identificatiecode van een verkooppunt. Het SellingPointId is numeriek en hoeft niet uniek te zijn. Een SellingPointId kan op meerdere locaties voorkomen, die samen een verkooppuntgroep vormen.
   *
   * **Type**: Number
   */
   Sellingpointid: FieldObject<DataType.Number>;
  /**
   * ### StartDateSellingPoint
   * 
   * Datum vanaf wanneer een bepaald verkooppunt actief is.
   *
   * **Type**: Text
   */
   Startdatesellingpoint: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddatesellingpoint: Field("enddatesellingpoint", DataType.Text),
  Location: Field("location", DataType.Point),
  LocationAddress: Field("location_address", DataType.Text),
  LocationCity: Field("location_city", DataType.Text),
  LocationState: Field("location_state", DataType.Text),
  LocationZip: Field("location_zip", DataType.Text),
  Sellingpointdesc: Field("sellingpointdesc", DataType.Text),
  Sellingpointid: Field("sellingpointid", DataType.Number),
  Startdatesellingpoint: Field("startdatesellingpoint", DataType.Text),
};

export const Info = {
  fields: [
    "Areamanagerid",
    "Enddatesellingpoint",
    "Location",
    "LocationAddress",
    "LocationCity",
    "LocationState",
    "LocationZip",
    "Sellingpointdesc",
    "Sellingpointid",
    "Startdatesellingpoint",
  ],
  dataset: "cgqw-pfbp",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEO VERKOOPPUNT",
  provider_name: "ParkerenGeoVerkooppunt",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/cgqw-pfbp",
}

/**
 * ### Open Data Parkeren: GEO VERKOOPPUNT
 * Tabel met geografische informatie van een verkooppunt.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/cgqw-pfbp
 *
 * **Dataset ID:** cgqw-pfbp
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
