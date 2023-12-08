// *******************************************************
//
// Name: Open Data Parkeren: GEOMETRIE GEBIED
//
// Een overzicht van de geometrieën van parkeergebieden en -faciliteiten, in coördinatenstelsel WGS84 (EPSG: 4326).
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7
// Permalink: https://opendata.rdw.nl/d/nsk3-v9n7
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: GEOMETRIE GEBIED
 */
export interface ParkerenGeometrieGebied_ResponseData {
  /**
   * ### GeoDataAsText
   * 
   * Geometrie van een parkeergebied of -faciliteit, in cordinatenstelsel WGS84 (EPSG: 4326)
   *
   * **Type**: Text
   */
  areageometryastext?: string;
  /**
   * ### AreaId
   * 
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   */
  areaid?: string;
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateArea
   * 
   * Datum waarop een parkeergebied of -faciliteit niet meer geldig is.
   *
   * **Type**: Calendar date
   */
  enddatearea?: string;
  /**
   * ### StartDateArea
   * 
   * Datum vanaf wanneer een parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Calendar date
   */
  startdatearea?: string;
}

/**
 * Fieldnames for **ParkerenGeometrieGebied**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areageometryastext`` | ``areageometryastext`` | _Text_ |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatearea`` | ``enddatearea`` | _Calendar date_ |
 * | ``Startdatearea`` | ``startdatearea`` | _Calendar date_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### GeoDataAsText
  * 
  * Geometrie van een parkeergebied of -faciliteit, in cordinatenstelsel WGS84 (EPSG: 4326)
  *
  * **Type**: Text
  *
  * **Database Column Name**: `areageometryastext`
  */
  Areageometryastext: Field("areageometryastext", DataType.Text),
  /**
  * ### AreaId
  * 
  * Identificatiecode van een parkeergebied of - faciliteit.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `areaid`
  */
  Areaid: Field("areaid", DataType.Text),
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
  * ### EndDateArea
  * 
  * Datum waarop een parkeergebied of -faciliteit niet meer geldig is.
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `enddatearea`
  */
  Enddatearea: Field("enddatearea", DataType.FloatingTimestamp),
  /**
  * ### StartDateArea
  * 
  * Datum vanaf wanneer een parkeergebied of -faciliteit geldig is.
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `startdatearea`
  */
  Startdatearea: Field("startdatearea", DataType.FloatingTimestamp),
};

export const Info = {
  fields: [
    "Areageometryastext",
    "Areaid",
    "Areamanagerid",
    "Enddatearea",
    "Startdatearea",
  ],
  dataset: "nsk3-v9n7",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEOMETRIE GEBIED",
  provider_name: "ParkerenGeometrieGebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/nsk3-v9n7",
}

/**
 * ### Open Data Parkeren: GEOMETRIE GEBIED
 * Een overzicht van de geometrieën van parkeergebieden en -faciliteiten, in coördinatenstelsel WGS84 (EPSG: 4326).
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/nsk3-v9n7
 *
 * **Dataset ID:** nsk3-v9n7
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: GEOMETRIE GEBIED dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areageometryastext, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenGeometrieGebied_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenGeometrieGebied: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ParkerenGeometrieGebied_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
