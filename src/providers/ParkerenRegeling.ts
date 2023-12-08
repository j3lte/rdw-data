// *******************************************************
//
// Name: Open Data Parkeren: REGELING
//
// Een regeling bevat alle condities die gelden wanneer iemand een recht voor een bepaald gebied verwerft.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq
// Permalink: https://opendata.rdw.nl/d/yefi-qfiq
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: REGELING
 */
export interface ParkerenRegeling_ResponseData {
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateRegulation
   * 
   * Datum van het einde van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   */
  enddateregulation?: string;
  /**
   * ### MaximumDayCharge
   * 
   * Het maximale tarief, incl. BTW, dat voor een recht in een gebied dat valt onder de betreffende regeling verschuldigd is (in euro).
   *
   * **Type**: Number
   */
  maximumdaycharge?: string;
  /**
   * ### RegulationDesc
   * 
   * Omschrijving van een gebied- of verblijfsregeling
   *
   * **Type**: Text
   */
  regulationdesc?: string;
  /**
   * ### RegulationId
   * 
   * Identificatiecode een gebied- of verblijfsregeling.
   *
   * **Type**: Text
   */
  regulationid?: string;
  /**
   * ### RegulationType
   * 
   * Code die aangeeft wat voor soort gebied- of verblijfsregeling van toepassing is bij een bepaalde regeling. B: Basisregeling; A: Aanvullende regeling.
   *
   * **Type**: Text
   */
  regulationtype?: string;
  /**
   * ### StartDateRegulation
   * 
   * Datum van het begin van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   */
  startdateregulation?: string;
}

/**
 * Fieldnames for **ParkerenRegeling**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddateregulation`` | ``enddateregulation`` | _Text_ |
 * | ``Maximumdaycharge`` | ``maximumdaycharge`` | _Number_ |
 * | ``Regulationdesc`` | ``regulationdesc`` | _Text_ |
 * | ``Regulationid`` | ``regulationid`` | _Text_ |
 * | ``Regulationtype`` | ``regulationtype`` | _Text_ |
 * | ``Startdateregulation`` | ``startdateregulation`` | _Text_ |
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
  * ### EndDateRegulation
  * 
  * Datum van het einde van een periode waarin een gebied- of verblijfsregeling van kracht is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `enddateregulation`
  */
  Enddateregulation: Field("enddateregulation", DataType.Text),
  /**
  * ### MaximumDayCharge
  * 
  * Het maximale tarief, incl. BTW, dat voor een recht in een gebied dat valt onder de betreffende regeling verschuldigd is (in euro).
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximumdaycharge`
  */
  Maximumdaycharge: Field("maximumdaycharge", DataType.Number),
  /**
  * ### RegulationDesc
  * 
  * Omschrijving van een gebied- of verblijfsregeling
  *
  * **Type**: Text
  *
  * **Database Column Name**: `regulationdesc`
  */
  Regulationdesc: Field("regulationdesc", DataType.Text),
  /**
  * ### RegulationId
  * 
  * Identificatiecode een gebied- of verblijfsregeling.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `regulationid`
  */
  Regulationid: Field("regulationid", DataType.Text),
  /**
  * ### RegulationType
  * 
  * Code die aangeeft wat voor soort gebied- of verblijfsregeling van toepassing is bij een bepaalde regeling. B: Basisregeling; A: Aanvullende regeling.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `regulationtype`
  */
  Regulationtype: Field("regulationtype", DataType.Text),
  /**
  * ### StartDateRegulation
  * 
  * Datum van het begin van een periode waarin een gebied- of verblijfsregeling van kracht is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `startdateregulation`
  */
  Startdateregulation: Field("startdateregulation", DataType.Text),
};

export const Info = {
  fields: [
    "Areamanagerid",
    "Enddateregulation",
    "Maximumdaycharge",
    "Regulationdesc",
    "Regulationid",
    "Regulationtype",
    "Startdateregulation",
  ],
  dataset: "yefi-qfiq",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: REGELING",
  provider_name: "ParkerenRegeling",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/yefi-qfiq",
}

/**
 * ### Open Data Parkeren: REGELING
 * Een regeling bevat alle condities die gelden wanneer iemand een recht voor een bepaald gebied verwerft.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/yefi-qfiq
 *
 * **Dataset ID:** yefi-qfiq
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: REGELING dataset.
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
  createQueryWithDataset<ParkerenRegeling_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenRegeling: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ParkerenRegeling_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
