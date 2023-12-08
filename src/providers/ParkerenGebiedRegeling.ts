// *******************************************************
//
// Name: Open Data Parkeren: GEBIED REGELING
//
// Regeling of regelingen die op een gebied van toepassing zijn. Op een bepaald moment is op één gebied maar één regeling van toepassing, maar de regeling die van toepassing is op een gebied, kan periodiek veranderen
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8
// Permalink: https://opendata.rdw.nl/d/qtex-qwd8
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: GEBIED REGELING
 */
export interface ParkerenGebiedRegeling_ResponseData {
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
   * ### EndDateAreaRegulation
   * 
   * Einddatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een gebied.
   *
   * **Type**: Text
   */
  enddatearearegulation?: string;
  /**
   * ### RegulationId
   * 
   * Identificatiecode van een regeling.
   *
   * **Type**: Text
   */
  regulationid?: string;
  /**
   * ### StartDateAreaRegulation
   * 
   * Begindatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  startdatearearegulation?: string;
}

/**
 * Fieldnames for **ParkerenGebiedRegeling**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatearearegulation`` | ``enddatearearegulation`` | _Text_ |
 * | ``Regulationid`` | ``regulationid`` | _Text_ |
 * | ``Startdatearearegulation`` | ``startdatearearegulation`` | _Text_ |
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
  * ### EndDateAreaRegulation
  * 
  * Einddatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een gebied.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `enddatearearegulation`
  */
  Enddatearearegulation: Field("enddatearearegulation", DataType.Text),
  /**
  * ### RegulationId
  * 
  * Identificatiecode van een regeling.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `regulationid`
  */
  Regulationid: Field("regulationid", DataType.Text),
  /**
  * ### StartDateAreaRegulation
  * 
  * Begindatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een parkeergebied of -faciliteit.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `startdatearearegulation`
  */
  Startdatearearegulation: Field("startdatearearegulation", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Enddatearearegulation",
    "Regulationid",
    "Startdatearearegulation",
  ],
  dataset: "qtex-qwd8",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEBIED REGELING",
  provider_name: "ParkerenGebiedRegeling",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/qtex-qwd8",
}

/**
 * ### Open Data Parkeren: GEBIED REGELING
 * Regeling of regelingen die op een gebied van toepassing zijn. Op een bepaald moment is op één gebied maar één regeling van toepassing, maar de regeling die van toepassing is op een gebied, kan periodiek veranderen
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/qtex-qwd8
 *
 * **Dataset ID:** qtex-qwd8
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: GEBIED REGELING dataset.
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
  createQueryWithDataset<ParkerenGebiedRegeling_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenGebiedRegeling = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
