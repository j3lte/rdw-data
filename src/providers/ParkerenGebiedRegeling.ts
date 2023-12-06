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
 * Return Data for Open Data Parkeren: GEBIED REGELING
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
 *
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
   * ### EndDateAreaRegulation
   *
   * Einddatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een gebied.
   *
   * **Type**: Text
   */
  Enddatearearegulation: FieldObject<DataType.Text>;
  /**
   * ### RegulationId
   *
   * Identificatiecode van een regeling.
   *
   * **Type**: Text
   */
  Regulationid: FieldObject<DataType.Text>;
  /**
   * ### StartDateAreaRegulation
   *
   * Begindatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  Startdatearearegulation: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddatearearegulation: Field("enddatearearegulation", DataType.Text),
  Regulationid: Field("regulationid", DataType.Text),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
