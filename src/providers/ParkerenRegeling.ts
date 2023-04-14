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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.3/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.3/mod.ts";
export {
  Order,
  Select,
  SelectAll,
  SelectGreatest,
  SelectLeast,
  SelectRegrIntercept,
  SelectRegrR2,
  SelectRegrSlope,
  SystemFields,
  Where,
} from "https://deno.land/x/soda@0.4.3/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data Parkeren: REGELING
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
 *
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
   * ### EndDateRegulation
   *
   * Datum van het einde van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   */
  Enddateregulation: FieldObject<DataType.Text>;
  /**
   * ### MaximumDayCharge
   *
   * Het maximale tarief, incl. BTW, dat voor een recht in een gebied dat valt onder de betreffende regeling verschuldigd is (in euro).
   *
   * **Type**: Number
   */
  Maximumdaycharge: FieldObject<DataType.Number>;
  /**
   * ### RegulationDesc
   *
   * Omschrijving van een gebied- of verblijfsregeling
   *
   * **Type**: Text
   */
  Regulationdesc: FieldObject<DataType.Text>;
  /**
   * ### RegulationId
   *
   * Identificatiecode een gebied- of verblijfsregeling.
   *
   * **Type**: Text
   */
  Regulationid: FieldObject<DataType.Text>;
  /**
   * ### RegulationType
   *
   * Code die aangeeft wat voor soort gebied- of verblijfsregeling van toepassing is bij een bepaalde regeling. B: Basisregeling; A: Aanvullende regeling.
   *
   * **Type**: Text
   */
  Regulationtype: FieldObject<DataType.Text>;
  /**
   * ### StartDateRegulation
   *
   * Datum van het begin van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   */
  Startdateregulation: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddateregulation: Field("enddateregulation", DataType.Text),
  Maximumdaycharge: Field("maximumdaycharge", DataType.Number),
  Regulationdesc: Field("regulationdesc", DataType.Text),
  Regulationid: Field("regulationid", DataType.Text),
  Regulationtype: Field("regulationtype", DataType.Text),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
