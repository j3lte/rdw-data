// *******************************************************
//
// Name: Open Data Parkeren: TIJDVAK
//
// Een deel van een benoemd etmaal waarin een bepaalde regeling van toepassing is. In een etmaal kan voor nul, een of meerdere tijdvakken worden geregistreerd welk tarief van toepassing is en kunnen andere aspecten van een regeling worden vastgelegd. Tijdvakken mogen niet overlappen, maar tijdvakken hoeven niet aaneen te sluiten. Voor die gedeelten van het etmaal waarvoor geen tijdvak is, geldt dat volgens de regeling het recht geen tarief heeft, bv. overdag betaald parkeren, maar 's avonds en 's nachts gratis.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq
// Permalink: https://opendata.rdw.nl/d/ixf8-gtwq
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: TIJDVAK
 */
export interface ParkerenTijdvak_ResponseData {
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### ClaimRightPossible
   * 
   * Indicatie of het mogelijk is binnen dit TimeFrame een recht te verwerven of niet. J: in dit tijdvak is het wel mogelijk rechten te verwerven, N: in dit tijdvak is het niet mogelijk rechten te verwerven.
   *
   * **Type**: Text
   */
  claimrightpossible?: string;
  /**
   * ### DayTimeFrame
   * 
   * Naam van een bepaalde dag voor een gebiedsbeheerder. Dit zijn de weekdagen maandag tot en met zondag, en de namen van de speciale dagen.
   *
   * **Type**: Text
   */
  daytimeframe?: string;
  /**
   * ### EndDateTimeFrame
   * 
   * Datum en tijd van het einde van een periode waarin een bepaald tijdvak geldig is.
   *
   * **Type**: Text
   */
  enddatetimeframe?: string;
  /**
   * ### EndTimeTimeFrame
   * 
   * Tijdstip (uumm) waarop het tijdvak eindigt. Voor aansluitende tijdvakken is de EndTimeTimeFrame van het eerste tijdvak gelijk aan StartTimeTimeFrame van het tweede.
   *
   * **Type**: Number
   */
  endtimetimeframe?: string;
  /**
   * ### FareCalculationCode
   * 
   * Verwijzing naar het tarief, indien voor een recht in een tijdvak een tarief verschuldigd is. Kan alleen van toepassing zijn als ClaimRightPossible = J
   *
   * **Type**: Text
   */
  farecalculationcode?: string;
  /**
   * ### MaxDurationRight
   * 
   * De maximale tijdsduur waarvoor in een gebied dat valt onder de betreffende regeling, in dit betreffende tijdvak een recht kan worden verworven (minuten).
   *
   * **Type**: Number
   */
  maxdurationright?: string;
  /**
   * ### MinParkingInterruption
   * 
   * De minimale tijdsduur  in minuten tussen twee rechten in hetzelfde gebied voor hetzelfde voertuig die geldt bij dit TimeFrame.
   *
   * **Type**: Number
   */
  minparkinginterruption?: string;
  /**
   * ### RegulationId
   * 
   * Identificatiecode van een regeling binnen een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  regulationid?: string;
  /**
   * ### StartDateTimeFrame
   * 
   * Datum en tijd van het begin van een periode waarop een bepaald tijdvak geldig is.
   *
   * **Type**: Text
   */
  startdatetimeframe?: string;
  /**
   * ### StartTimeTimeFrame
   * 
   * Tijdstip (uumm) waarop een bepaald tijdvak begint.
   *
   * **Type**: Number
   */
  starttimetimeframe?: string;
}

/**
 * Fieldnames for **ParkerenTijdvak**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Claimrightpossible`` | ``claimrightpossible`` | _Text_ |
 * | ``Daytimeframe`` | ``daytimeframe`` | _Text_ |
 * | ``Enddatetimeframe`` | ``enddatetimeframe`` | _Text_ |
 * | ``Endtimetimeframe`` | ``endtimetimeframe`` | _Number_ |
 * | ``Farecalculationcode`` | ``farecalculationcode`` | _Text_ |
 * | ``Maxdurationright`` | ``maxdurationright`` | _Number_ |
 * | ``Minparkinginterruption`` | ``minparkinginterruption`` | _Number_ |
 * | ``Regulationid`` | ``regulationid`` | _Text_ |
 * | ``Startdatetimeframe`` | ``startdatetimeframe`` | _Text_ |
 * | ``Starttimetimeframe`` | ``starttimetimeframe`` | _Number_ |
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
  * ### ClaimRightPossible
  * 
  * Indicatie of het mogelijk is binnen dit TimeFrame een recht te verwerven of niet. J: in dit tijdvak is het wel mogelijk rechten te verwerven, N: in dit tijdvak is het niet mogelijk rechten te verwerven.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `claimrightpossible`
  */
  Claimrightpossible: Field("claimrightpossible", DataType.Text),
  /**
  * ### DayTimeFrame
  * 
  * Naam van een bepaalde dag voor een gebiedsbeheerder. Dit zijn de weekdagen maandag tot en met zondag, en de namen van de speciale dagen.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `daytimeframe`
  */
  Daytimeframe: Field("daytimeframe", DataType.Text),
  /**
  * ### EndDateTimeFrame
  * 
  * Datum en tijd van het einde van een periode waarin een bepaald tijdvak geldig is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `enddatetimeframe`
  */
  Enddatetimeframe: Field("enddatetimeframe", DataType.Text),
  /**
  * ### EndTimeTimeFrame
  * 
  * Tijdstip (uumm) waarop het tijdvak eindigt. Voor aansluitende tijdvakken is de EndTimeTimeFrame van het eerste tijdvak gelijk aan StartTimeTimeFrame van het tweede.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `endtimetimeframe`
  */
  Endtimetimeframe: Field("endtimetimeframe", DataType.Number),
  /**
  * ### FareCalculationCode
  * 
  * Verwijzing naar het tarief, indien voor een recht in een tijdvak een tarief verschuldigd is. Kan alleen van toepassing zijn als ClaimRightPossible = J
  *
  * **Type**: Text
  *
  * **Database Column Name**: `farecalculationcode`
  */
  Farecalculationcode: Field("farecalculationcode", DataType.Text),
  /**
  * ### MaxDurationRight
  * 
  * De maximale tijdsduur waarvoor in een gebied dat valt onder de betreffende regeling, in dit betreffende tijdvak een recht kan worden verworven (minuten).
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maxdurationright`
  */
  Maxdurationright: Field("maxdurationright", DataType.Number),
  /**
  * ### MinParkingInterruption
  * 
  * De minimale tijdsduur  in minuten tussen twee rechten in hetzelfde gebied voor hetzelfde voertuig die geldt bij dit TimeFrame.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `minparkinginterruption`
  */
  Minparkinginterruption: Field("minparkinginterruption", DataType.Number),
  /**
  * ### RegulationId
  * 
  * Identificatiecode van een regeling binnen een parkeergebied of -faciliteit.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `regulationid`
  */
  Regulationid: Field("regulationid", DataType.Text),
  /**
  * ### StartDateTimeFrame
  * 
  * Datum en tijd van het begin van een periode waarop een bepaald tijdvak geldig is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `startdatetimeframe`
  */
  Startdatetimeframe: Field("startdatetimeframe", DataType.Text),
  /**
  * ### StartTimeTimeFrame
  * 
  * Tijdstip (uumm) waarop een bepaald tijdvak begint.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `starttimetimeframe`
  */
  Starttimetimeframe: Field("starttimetimeframe", DataType.Number),
};

export const Info = {
  fields: [
    "Areamanagerid",
    "Claimrightpossible",
    "Daytimeframe",
    "Enddatetimeframe",
    "Endtimetimeframe",
    "Farecalculationcode",
    "Maxdurationright",
    "Minparkinginterruption",
    "Regulationid",
    "Startdatetimeframe",
    "Starttimetimeframe",
  ],
  dataset: "ixf8-gtwq",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: TIJDVAK",
  provider_name: "ParkerenTijdvak",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/ixf8-gtwq",
}

/**
 * ### Open Data Parkeren: TIJDVAK
 * Een deel van een benoemd etmaal waarin een bepaalde regeling van toepassing is. In een etmaal kan voor nul, een of meerdere tijdvakken worden geregistreerd welk tarief van toepassing is en kunnen andere aspecten van een regeling worden vastgelegd. Tijdvakken mogen niet overlappen, maar tijdvakken hoeven niet aaneen te sluiten. Voor die gedeelten van het etmaal waarvoor geen tijdvak is, geldt dat volgens de regeling het recht geen tarief heeft, bv. overdag betaald parkeren, maar 's avonds en 's nachts gratis.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/ixf8-gtwq
 *
 * **Dataset ID:** ixf8-gtwq
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: TIJDVAK dataset.
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
  createQueryWithDataset<ParkerenTijdvak_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenTijdvak = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
