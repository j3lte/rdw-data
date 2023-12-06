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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";
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
} from "https://deno.land/x/soda@0.4.4/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data Parkeren: PARKING TOEGANG
 */
export interface ResponseData {
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
 *
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
export interface IFields {
  /**
   * ### AreaId
   *
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   */
  Areaid: FieldObject<DataType.Text>;
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### Days
   *
   * Naam van een bepaalde dag voor een gebiedsbeheerder, waarvoor toegangstijden zijn gespecificeerd.
   *
   * **Type**: Text
   */
  Days: FieldObject<DataType.Text>;
  /**
   * ### EndOfPeriod
   *
   * Einddatum en -tijd van de periode waarin een bepaalde toegangstijd van een parkeergebied, -garage of -terrein geldig is.
   *
   * **Type**: Text
   */
  Endofperiod: FieldObject<DataType.Text>;
  /**
   * ### EnterFrom
   *
   * Begintijd (uumm) vanaf wanneer op een bepaalde dag een parkeergebied, -garage of -terrein toegankelijk is.
   *
   * **Type**: Number
   */
  Enterfrom: FieldObject<DataType.Number>;
  /**
   * ### EnterUntil
   *
   * Eindtijd (uumm) tot wanneer op een bepaalde dag een parkeergebied, -garage of -terrein toegankelijk is.
   *
   * **Type**: Number
   */
  Enteruntil: FieldObject<DataType.Number>;
  /**
   * ### StartOfPeriod
   *
   * Begindatum en -tijd van de periode waarin een bepaalde toegangstijd van een parkeergebied, -garage of -terrein geldig is.
   *
   * **Type**: Text
   */
  Startofperiod: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Days: Field("days", DataType.Text),
  Endofperiod: Field("endofperiod", DataType.Text),
  Enterfrom: Field("enterfrom", DataType.Number),
  Enteruntil: Field("enteruntil", DataType.Number),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
