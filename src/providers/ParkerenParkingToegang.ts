// *******************************************************
//
// Name: Open Data Parkeren: PARKING TOEGANG
//
// Toegangstijden van een parkeergebied, -garage of -terrein. Als een toegang gesloten is kan de uitgang wel open zijn.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-TOEGANG/edv8-qiyg
// Permalink: https://opendata.rdw.nl/d/edv8-qiyg
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: PARKING TOEGANG
 */
export interface ParkerenParkingToegang_ResponseData {
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
   * ### Days
   * 
   * Naam van een bepaalde dag voor een gebiedsbeheerder, waarvoor toegangstijden zijn gespecificeerd.
   *
   * **Type**: Text
   */
  days?: string;
  /**
   * ### EndOfPeriod
   * 
   * Einddatum en -tijd van de periode waarin een bepaalde toegangstijd van een parkeergebied, -garage of -terrein geldig is.
   *
   * **Type**: Text
   */
  endofperiod?: string;
  /**
   * ### EnterFrom
   * 
   * Begintijd (uumm) vanaf wanneer op een bepaalde dag een parkeergebied, -garage of -terrein toegankelijk is.
   *
   * **Type**: Number
   */
  enterfrom?: string;
  /**
   * ### EnterUntil
   * 
   * Eindtijd (uumm) tot wanneer op een bepaalde dag een parkeergebied, -garage of -terrein toegankelijk is.
   *
   * **Type**: Number
   */
  enteruntil?: string;
  /**
   * ### StartOfPeriod
   * 
   * Begindatum en -tijd van de periode waarin een bepaalde toegangstijd van een parkeergebied, -garage of -terrein geldig is.
   *
   * **Type**: Text
   */
  startofperiod?: string;
}

/**
 * Fieldnames for **ParkerenParkingToegang**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Days`` | ``days`` | _Text_ |
 * | ``Endofperiod`` | ``endofperiod`` | _Text_ |
 * | ``Enterfrom`` | ``enterfrom`` | _Number_ |
 * | ``Enteruntil`` | ``enteruntil`` | _Number_ |
 * | ``Startofperiod`` | ``startofperiod`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
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
  * ### Days
  * 
  * Naam van een bepaalde dag voor een gebiedsbeheerder, waarvoor toegangstijden zijn gespecificeerd.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `days`
  */
  Days: Field("days", DataType.Text),
  /**
  * ### EndOfPeriod
  * 
  * Einddatum en -tijd van de periode waarin een bepaalde toegangstijd van een parkeergebied, -garage of -terrein geldig is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `endofperiod`
  */
  Endofperiod: Field("endofperiod", DataType.Text),
  /**
  * ### EnterFrom
  * 
  * Begintijd (uumm) vanaf wanneer op een bepaalde dag een parkeergebied, -garage of -terrein toegankelijk is.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `enterfrom`
  */
  Enterfrom: Field("enterfrom", DataType.Number),
  /**
  * ### EnterUntil
  * 
  * Eindtijd (uumm) tot wanneer op een bepaalde dag een parkeergebied, -garage of -terrein toegankelijk is.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `enteruntil`
  */
  Enteruntil: Field("enteruntil", DataType.Number),
  /**
  * ### StartOfPeriod
  * 
  * Begindatum en -tijd van de periode waarin een bepaalde toegangstijd van een parkeergebied, -garage of -terrein geldig is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `startofperiod`
  */
  Startofperiod: Field("startofperiod", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Days",
    "Endofperiod",
    "Enterfrom",
    "Enteruntil",
    "Startofperiod",
  ],
  dataset: "edv8-qiyg",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: PARKING TOEGANG",
  provider_name: "ParkerenParkingToegang",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-TOEGANG/edv8-qiyg",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/edv8-qiyg",
}

/**
 * ### Open Data Parkeren: PARKING TOEGANG
 * Toegangstijden van een parkeergebied, -garage of -terrein. Als een toegang gesloten is kan de uitgang wel open zijn.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-TOEGANG/edv8-qiyg
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/edv8-qiyg
 *
 * **Dataset ID:** edv8-qiyg
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: PARKING TOEGANG dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areaid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenParkingToegang_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenParkingToegang = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
