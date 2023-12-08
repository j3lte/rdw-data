// *******************************************************
//
// Name: Open Data Parkeren: PARKING OPEN
//
// Een periode waarin een parkeergebied, -garage of -terrein open (in bedrijf) is. Dit is niet de openingstijd op een bepaalde dag.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-OPEN/figd-gux7
// Permalink: https://opendata.rdw.nl/d/figd-gux7
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: PARKING OPEN
 */
export interface ParkerenParkingOpen_ResponseData {
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
   * ### EndOfPeriod
   * 
   * Einddatum en -tijd van een periode waarin een bepaalde parkeerfaciliteit is opengesteld.
   *
   * **Type**: Text
   */
  endofperiod?: string;
  /**
   * ### ExitPossibleAllDay
   * 
   * Indicator die aangeeft of uitrijden de hele dag mogelijk is bij een parkeergebied, -garage of -terrein.
   *
   * **Type**: Number
   */
  exitpossibleallday?: string;
  /**
   * ### OpenAllYear
   * 
   * Indicator die aangeeft of een parkeerfaciliteit het hele jaar open is of niet.
   *
   * **Type**: Number
   */
  openallyear?: string;
  /**
   * ### PeriodName
   * 
   * Naam die een bepaalde openstellingsperiode van een parkeergebied, -garage of -terrein aanduidt.
   *
   * **Type**: Text
   */
  periodname?: string;
  /**
   * ### StartOfPeriod
   * 
   * Begindatum en -tijd van een periode waarin een bepaald parkeerfaciliteit is opengesteld.
   *
   * **Type**: Text
   */
  startofperiod?: string;
}

/**
 * Fieldnames for **ParkerenParkingOpen**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Endofperiod`` | ``endofperiod`` | _Text_ |
 * | ``Exitpossibleallday`` | ``exitpossibleallday`` | _Number_ |
 * | ``Openallyear`` | ``openallyear`` | _Number_ |
 * | ``Periodname`` | ``periodname`` | _Text_ |
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
  * ### EndOfPeriod
  * 
  * Einddatum en -tijd van een periode waarin een bepaalde parkeerfaciliteit is opengesteld.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `endofperiod`
  */
  Endofperiod: Field("endofperiod", DataType.Text),
  /**
  * ### ExitPossibleAllDay
  * 
  * Indicator die aangeeft of uitrijden de hele dag mogelijk is bij een parkeergebied, -garage of -terrein.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `exitpossibleallday`
  */
  Exitpossibleallday: Field("exitpossibleallday", DataType.Number),
  /**
  * ### OpenAllYear
  * 
  * Indicator die aangeeft of een parkeerfaciliteit het hele jaar open is of niet.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `openallyear`
  */
  Openallyear: Field("openallyear", DataType.Number),
  /**
  * ### PeriodName
  * 
  * Naam die een bepaalde openstellingsperiode van een parkeergebied, -garage of -terrein aanduidt.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `periodname`
  */
  Periodname: Field("periodname", DataType.Text),
  /**
  * ### StartOfPeriod
  * 
  * Begindatum en -tijd van een periode waarin een bepaald parkeerfaciliteit is opengesteld.
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
    "Endofperiod",
    "Exitpossibleallday",
    "Openallyear",
    "Periodname",
    "Startofperiod",
  ],
  dataset: "figd-gux7",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: PARKING OPEN",
  provider_name: "ParkerenParkingOpen",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-OPEN/figd-gux7",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/figd-gux7",
}

/**
 * ### Open Data Parkeren: PARKING OPEN
 * Een periode waarin een parkeergebied, -garage of -terrein open (in bedrijf) is. Dit is niet de openingstijd op een bepaalde dag.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-OPEN/figd-gux7
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/figd-gux7
 *
 * **Dataset ID:** figd-gux7
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: PARKING OPEN dataset.
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
  createQueryWithDataset<ParkerenParkingOpen_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenParkingOpen = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ParkerenParkingOpen_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
