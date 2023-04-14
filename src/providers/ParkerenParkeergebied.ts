// *******************************************************
//
// Name: Open Data Parkeren: PARKEERGEBIED
//
// Deze tabel legt een koppeling tussen de gebieden zoals deze vastgelegd zijn in het NPR en de gebieden zoals deze voor Open Data Parkeren volgens de standaard SPDP2.0 gepubliceerd worden.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED/mz4f-59fw
// Permalink: https://opendata.rdw.nl/d/mz4f-59fw
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
 * Return Data for Open Data Parkeren: PARKEERGEBIED
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
   * ### AreaName
   *
   * Een naam die door een externe partij gebruikt kan worden om een bepaald parkeergebied aan te duiden.
   *
   * **Type**: Text
   */
  areaname?: string;
  /**
   * ### UUID
   *
   * Een UUID die een parkeergebied, -garage of -terrein identificeert.
   *
   * **Type**: Text
   */
  uuid?: string;
}

/**
 * Fieldnames for **ParkerenParkeergebied**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Areaname`` | ``areaname`` | _Text_ |
 * | ``Uuid`` | ``uuid`` | _Text_ |
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
   * ### AreaName
   *
   * Een naam die door een externe partij gebruikt kan worden om een bepaald parkeergebied aan te duiden.
   *
   * **Type**: Text
   */
  Areaname: FieldObject<DataType.Text>;
  /**
   * ### UUID
   *
   * Een UUID die een parkeergebied, -garage of -terrein identificeert.
   *
   * **Type**: Text
   */
  Uuid: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Areaname: Field("areaname", DataType.Text),
  Uuid: Field("uuid", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Areaname",
    "Uuid",
  ],
  dataset: "mz4f-59fw",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: PARKEERGEBIED",
  provider_name: "ParkerenParkeergebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED/mz4f-59fw",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/mz4f-59fw",
};

/**
 * ### Open Data Parkeren: PARKEERGEBIED
 * Deze tabel legt een koppeling tussen de gebieden zoals deze vastgelegd zijn in het NPR en de gebieden zoals deze voor Open Data Parkeren volgens de standaard SPDP2.0 gepubliceerd worden.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED/mz4f-59fw
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/mz4f-59fw
 *
 * **Dataset ID:** mz4f-59fw
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
