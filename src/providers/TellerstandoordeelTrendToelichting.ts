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
 * Return Data for Open Data RDW: Tellerstandoordeel Trend Toelichting
 */
export interface ResponseData {
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
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CodeToelichtingTellerstandoordeel`` | ``code_toelichting_tellerstandoordeel`` | _Text_ |
 * | ``ToelichtingTellerstandoordeel`` | ``toelichting_tellerstandoordeel`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Code toelichting tellerstandoordeel
   *
   * Deze code geeft het oordeel aan. Tevens sleutelveld voor de uitgebreide omschrijving.
   *
   * **Type**: Text
   */
  CodeToelichtingTellerstandoordeel: FieldObject<DataType.Text>;
  /**
   * ### Toelichting tellerstandoordeel
   *
   * Uitleg van het oordeel dat gegeven wordt. De reeks die na de laatste registratie ontstaat, bepaalt het getoonde oordeel.
   *
   * **Type**: Text
   */
  ToelichtingTellerstandoordeel: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  CodeToelichtingTellerstandoordeel: Field("code_toelichting_tellerstandoordeel", DataType.Text),
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
  url:
    "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/jqs4-4kvw",
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
