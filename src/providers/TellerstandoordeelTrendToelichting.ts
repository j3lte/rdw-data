// *******************************************************
//
// Name: Open Data RDW: Tellerstandoordeel Trend Toelichting
//
// De tellerstandoordelen worden in gekentekende voertuigen vermeld als codes. Deze tabel helpt de gebruiker om die codes om te zetten in begrijpbare toelichtingen.
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw
// Permalink: https://opendata.rdw.nl/d/jqs4-4kvw
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Tellerstandoordeel Trend Toelichting
 */
export interface TellerstandoordeelTrendToelichting_ResponseData {
  /**
   * ### Code toelichting tellerstandoordeel
   * 
   * Deze code geeft het oordeel aan. Tevens sleutelveld voor de uitgebreide omschrijving.
   *
   * **Type**: Text
   */
  code_toelichting_tellerstandoordeel?: string;
  /**
   * ### Toelichting tellerstandoordeel
   * 
   * Uitleg van het oordeel dat gegeven wordt. De reeks die na de laatste registratie ontstaat, bepaalt het getoonde oordeel.
   *
   * **Type**: Text
   */
  toelichting_tellerstandoordeel?: string;
}

/**
 * Fieldnames for **TellerstandoordeelTrendToelichting**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CodeToelichtingTellerstandoordeel`` | ``code_toelichting_tellerstandoordeel`` | _Text_ |
 * | ``ToelichtingTellerstandoordeel`` | ``toelichting_tellerstandoordeel`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Code toelichting tellerstandoordeel
  * 
  * Deze code geeft het oordeel aan. Tevens sleutelveld voor de uitgebreide omschrijving.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `code_toelichting_tellerstandoordeel`
  */
  CodeToelichtingTellerstandoordeel: Field("code_toelichting_tellerstandoordeel", DataType.Text),
  /**
  * ### Toelichting tellerstandoordeel
  * 
  * Uitleg van het oordeel dat gegeven wordt. De reeks die na de laatste registratie ontstaat, bepaalt het getoonde oordeel.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `toelichting_tellerstandoordeel`
  */
  ToelichtingTellerstandoordeel: Field("toelichting_tellerstandoordeel", DataType.Text),
};

export const Info = {
  fields: [
    "CodeToelichtingTellerstandoordeel",
    "ToelichtingTellerstandoordeel",
  ],
  dataset: "jqs4-4kvw",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Tellerstandoordeel Trend Toelichting",
  provider_name: "TellerstandoordeelTrendToelichting",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/jqs4-4kvw",
}

/**
 * ### Open Data RDW: Tellerstandoordeel Trend Toelichting
 * De tellerstandoordelen worden in gekentekende voertuigen vermeld als codes. Deze tabel helpt de gebruiker om die codes om te zetten in begrijpbare toelichtingen.
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/jqs4-4kvw
 *
 * **Dataset ID:** jqs4-4kvw
 *
 * **Category:** Voertuigen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Tellerstandoordeel Trend Toelichting dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CodeToelichtingTellerstandoordeel, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TellerstandoordeelTrendToelichting_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TellerstandoordeelTrendToelichting = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TellerstandoordeelTrendToelichting_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
