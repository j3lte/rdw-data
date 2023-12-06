// *******************************************************
//
// Name: Open Data Parkeren: SPECIALE DAG
//
// Een door de gebiedsbeheerder benoemd etmaal waarop afwijkende tarieven gelden (lokale feestdagen, evenementen, koopzondagen, etc.).
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq
// Permalink: https://opendata.rdw.nl/d/hpi4-mynq
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
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
 * Return Data for Open Data Parkeren: SPECIALE DAG
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
   * ### DateSpecialDay
   *
   * Datum van een speciaal etmaal (dag).
   *
   * **Type**: Number
   */
  datespecialday?: string;
  /**
   * ### NameSpecialDay
   *
   * Naam van een speciaal etmaal (dag), bv. Marktdag, Koopzondag, AutoRAI of Sinterklaasintocht die op een bepaalde datum voor een gebiedsbeheerder van toepassing is.
   *
   * **Type**: Text
   */
  namespecialday?: string;
}

/**
 * Fieldnames for **ParkerenSpecialeDag**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Datespecialday`` | ``datespecialday`` | _Number_ |
 * | ``Namespecialday`` | ``namespecialday`` | _Text_ |
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
   * ### DateSpecialDay
   *
   * Datum van een speciaal etmaal (dag).
   *
   * **Type**: Number
   */
  Datespecialday: FieldObject<DataType.Number>;
  /**
   * ### NameSpecialDay
   *
   * Naam van een speciaal etmaal (dag), bv. Marktdag, Koopzondag, AutoRAI of Sinterklaasintocht die op een bepaalde datum voor een gebiedsbeheerder van toepassing is.
   *
   * **Type**: Text
   */
  Namespecialday: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Datespecialday: Field("datespecialday", DataType.Number),
  Namespecialday: Field("namespecialday", DataType.Text),
};

export const Info = {
  fields: [
    "Areamanagerid",
    "Datespecialday",
    "Namespecialday",
  ],
  dataset: "hpi4-mynq",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: SPECIALE DAG",
  provider_name: "ParkerenSpecialeDag",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/hpi4-mynq",
};

/**
 * ### Open Data Parkeren: SPECIALE DAG
 * Een door de gebiedsbeheerder benoemd etmaal waarop afwijkende tarieven gelden (lokale feestdagen, evenementen, koopzondagen, etc.).
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/hpi4-mynq
 *
 * **Dataset ID:** hpi4-mynq
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
