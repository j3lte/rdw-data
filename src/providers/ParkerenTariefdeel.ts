// *******************************************************
//
// Name: Open Data Parkeren: TARIEFDEEL
//
// Een tarief bestaat uit 1 of meerdere tariefdelen. Als er een vast tarief per tijdvak is, ongeacht de parkeerduur, dan is er 1 deel zonder tariefdeel duurbegrenzing. Als het tarief afhankelijk is van de parkeerduur (progressief/degressief tarief), zijn er meerdere tariefdelen, waarvan een aantal qua duur begrensd.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg
// Permalink: https://opendata.rdw.nl/d/534e-5vdg
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: TARIEFDEEL
 */
export interface ParkerenTariefdeel_ResponseData {
  /**
   * ### AmountCumulative
   * 
   * Het totaalbedrag van alle voorgaande tariefdelen binnen hetzelfde tarief.
   *
   * **Type**: Number
   */
  amountcumulative?: string;
  /**
   * ### AmountFarePart
   * 
   * Het bedrag in EUR dat per stapgrootte van het tariefdeel wordt geteld.
   *
   * **Type**: Number
   */
  amountfarepart?: string;
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateFarePart
   * 
   * Datum waarop een tariefdeel niet meer geldig is.
   *
   * **Type**: Number
   */
  enddatefarepart?: string;
  /**
   * ### EndDurationFarePart
   * 
   * Waarde die aangeeft tot welke minuut in dit tarief dit tariefdeel geldt. Bijzonderheden: Een tariefdeel van 0 tot 180 minuten wordt aangegeven met begintijd 0 en eindtijd 180. Als de eindtijd niet van onbeperkte duur is dan moet deze gelijk zijn aan de starttijd van het eropvolgend tariefdeel.
   *
   * **Type**: Number
   */
  enddurationfarepart?: string;
  /**
   * ### FareCalculationCode
   * 
   * Identificatiecode van een tariefberekening
   *
   * **Type**: Text
   */
  farecalculationcode?: string;
  /**
   * ### StartDateFarePart
   * 
   * Datum waarop een tariefdeel ingaat. Het tariefdeel is een onderdeel van de tariefberekening die aan een parkeer- of verblijfsregeling is gekoppeld. Met behulp van tariefdelen worden door de gebiedsbeheerder of parkeerexploitant o.a. lineaire of progressieve tarieven gedefinieerd.
   *
   * **Type**: Number
   */
  startdatefarepart?: string;
  /**
   * ### StartDurationFarePart
   * 
   * Waarde die aangeeft vanaf welke minuut in dit tarief dit tariefdeel geldt.
   *
   * **Type**: Number
   */
  startdurationfarepart?: string;
  /**
   * ### StepSizeFarePart
   * 
   * De stapgrootte in minuten waarmee het AmountFarePart rekent.
   *
   * **Type**: Number
   */
  stepsizefarepart?: string;
}

/**
 * Fieldnames for **ParkerenTariefdeel**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Amountcumulative`` | ``amountcumulative`` | _Number_ |
 * | ``Amountfarepart`` | ``amountfarepart`` | _Number_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatefarepart`` | ``enddatefarepart`` | _Number_ |
 * | ``Enddurationfarepart`` | ``enddurationfarepart`` | _Number_ |
 * | ``Farecalculationcode`` | ``farecalculationcode`` | _Text_ |
 * | ``Startdatefarepart`` | ``startdatefarepart`` | _Number_ |
 * | ``Startdurationfarepart`` | ``startdurationfarepart`` | _Number_ |
 * | ``Stepsizefarepart`` | ``stepsizefarepart`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### AmountCumulative
  * 
  * Het totaalbedrag van alle voorgaande tariefdelen binnen hetzelfde tarief.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `amountcumulative`
  */
  Amountcumulative: Field("amountcumulative", DataType.Number),
  /**
  * ### AmountFarePart
  * 
  * Het bedrag in EUR dat per stapgrootte van het tariefdeel wordt geteld.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `amountfarepart`
  */
  Amountfarepart: Field("amountfarepart", DataType.Number),
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
  * ### EndDateFarePart
  * 
  * Datum waarop een tariefdeel niet meer geldig is.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `enddatefarepart`
  */
  Enddatefarepart: Field("enddatefarepart", DataType.Number),
  /**
  * ### EndDurationFarePart
  * 
  * Waarde die aangeeft tot welke minuut in dit tarief dit tariefdeel geldt. Bijzonderheden: Een tariefdeel van 0 tot 180 minuten wordt aangegeven met begintijd 0 en eindtijd 180. Als de eindtijd niet van onbeperkte duur is dan moet deze gelijk zijn aan de starttijd van het eropvolgend tariefdeel.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `enddurationfarepart`
  */
  Enddurationfarepart: Field("enddurationfarepart", DataType.Number),
  /**
  * ### FareCalculationCode
  * 
  * Identificatiecode van een tariefberekening
  *
  * **Type**: Text
  *
  * **Database Column Name**: `farecalculationcode`
  */
  Farecalculationcode: Field("farecalculationcode", DataType.Text),
  /**
  * ### StartDateFarePart
  * 
  * Datum waarop een tariefdeel ingaat. Het tariefdeel is een onderdeel van de tariefberekening die aan een parkeer- of verblijfsregeling is gekoppeld. Met behulp van tariefdelen worden door de gebiedsbeheerder of parkeerexploitant o.a. lineaire of progressieve tarieven gedefinieerd.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `startdatefarepart`
  */
  Startdatefarepart: Field("startdatefarepart", DataType.Number),
  /**
  * ### StartDurationFarePart
  * 
  * Waarde die aangeeft vanaf welke minuut in dit tarief dit tariefdeel geldt.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `startdurationfarepart`
  */
  Startdurationfarepart: Field("startdurationfarepart", DataType.Number),
  /**
  * ### StepSizeFarePart
  * 
  * De stapgrootte in minuten waarmee het AmountFarePart rekent.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `stepsizefarepart`
  */
  Stepsizefarepart: Field("stepsizefarepart", DataType.Number),
};

export const Info = {
  fields: [
    "Amountcumulative",
    "Amountfarepart",
    "Areamanagerid",
    "Enddatefarepart",
    "Enddurationfarepart",
    "Farecalculationcode",
    "Startdatefarepart",
    "Startdurationfarepart",
    "Stepsizefarepart",
  ],
  dataset: "534e-5vdg",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: TARIEFDEEL",
  provider_name: "ParkerenTariefdeel",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/534e-5vdg",
}

/**
 * ### Open Data Parkeren: TARIEFDEEL
 * Een tarief bestaat uit 1 of meerdere tariefdelen. Als er een vast tarief per tijdvak is, ongeacht de parkeerduur, dan is er 1 deel zonder tariefdeel duurbegrenzing. Als het tarief afhankelijk is van de parkeerduur (progressief/degressief tarief), zijn er meerdere tariefdelen, waarvan een aantal qua duur begrensd.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/534e-5vdg
 *
 * **Dataset ID:** 534e-5vdg
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: TARIEFDEEL dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Amountcumulative, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenTariefdeel_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenTariefdeel = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
