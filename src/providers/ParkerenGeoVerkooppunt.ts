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

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: GEO VERKOOPPUNT
 */
export interface ParkerenGeoVerkooppunt_ResponseData {
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
export const Fields = {
  /**
  * ### AreaManagerId
  * 
  * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `areamanagerid`
  */
  Areamanagerid: Field("areamanagerid", DataType.Number),
  /**
  * ### EndDateSellingPoint
  * 
  * Datum waarop een bepaald verkooppunt niet meer actief is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `enddatesellingpoint`
  */
  Enddatesellingpoint: Field("enddatesellingpoint", DataType.Text),
  /**
  * ### Location
  * 
  * De cordinaten van een verkooppunt.
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
  * ### SellingPointDesc
  * 
  * Omschrijving van een verkooppunt.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `sellingpointdesc`
  */
  Sellingpointdesc: Field("sellingpointdesc", DataType.Text),
  /**
  * ### SellingPointId
  * 
  * Identificatiecode van een verkooppunt. Het SellingPointId is numeriek en hoeft niet uniek te zijn. Een SellingPointId kan op meerdere locaties voorkomen, die samen een verkooppuntgroep vormen.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `sellingpointid`
  */
  Sellingpointid: Field("sellingpointid", DataType.Number),
  /**
  * ### StartDateSellingPoint
  * 
  * Datum vanaf wanneer een bepaald verkooppunt actief is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `startdatesellingpoint`
  */
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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: GEO VERKOOPPUNT dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areamanagerid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenGeoVerkooppunt_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenGeoVerkooppunt: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ParkerenGeoVerkooppunt_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
