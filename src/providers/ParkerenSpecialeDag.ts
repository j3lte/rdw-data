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

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: SPECIALE DAG
 */
export interface ParkerenSpecialeDag_ResponseData {
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
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Datespecialday`` | ``datespecialday`` | _Number_ |
 * | ``Namespecialday`` | ``namespecialday`` | _Text_ |
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
  * ### DateSpecialDay
  * 
  * Datum van een speciaal etmaal (dag).
  *
  * **Type**: Number
  *
  * **Database Column Name**: `datespecialday`
  */
  Datespecialday: Field("datespecialday", DataType.Number),
  /**
  * ### NameSpecialDay
  * 
  * Naam van een speciaal etmaal (dag), bv. Marktdag, Koopzondag, AutoRAI of Sinterklaasintocht die op een bepaalde datum voor een gebiedsbeheerder van toepassing is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `namespecialday`
  */
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
}

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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: SPECIALE DAG dataset.
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
  createQueryWithDataset<ParkerenSpecialeDag_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenSpecialeDag: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ParkerenSpecialeDag_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
