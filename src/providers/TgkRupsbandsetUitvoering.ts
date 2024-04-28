// *******************************************************
//
// Name: Open Data RDW: TGK Rupsbandset Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Rupsbandset-Uitvoering/xn6e-huse
// Permalink: https://opendata.rdw.nl/d/xn6e-huse
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Rupsbandset Uitvoering
 */
export interface TgkRupsbandsetUitvoering_ResponseData {
  /**
   * ### AangedrevenRupsbandsetInd
   *
   * **Type**: Text
   */
  aangedrevenrupsbandsetind?: string;
  /**
   * ### CodeUitvoeringTgk
   *
   * **Type**: Text
   */
  codeuitvoeringtgk?: string;
  /**
   * ### CodeVariantTgk
   *
   * **Type**: Text
   */
  codevarianttgk?: string;
  /**
   * ### GeremdeRupsbandsetIndicator
   *
   * **Type**: Number
   */
  geremderupsbandsetindicator?: string;
  /**
   * ### MaximummassaRupsbandsetBgr
   *
   * **Type**: Number
   */
  maximummassarupsbandsetbgr?: string;
  /**
   * ### MaximummassaRupsbandsetOgr
   *
   * **Type**: Number
   */
  maximummassarupsbandsetogr?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
  /**
   * ### VolgnummerRupsbandset
   *
   * **Type**: Number
   */
  volgnummerrupsbandset?: string;
}

/**
 * Fieldnames for **TgkRupsbandsetUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Aangedrevenrupsbandsetind`` | ``aangedrevenrupsbandsetind`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Geremderupsbandsetindicator`` | ``geremderupsbandsetindicator`` | _Number_ |
 * | ``Maximummassarupsbandsetbgr`` | ``maximummassarupsbandsetbgr`` | _Number_ |
 * | ``Maximummassarupsbandsetogr`` | ``maximummassarupsbandsetogr`` | _Number_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 * | ``Volgnummerrupsbandset`` | ``volgnummerrupsbandset`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### AangedrevenRupsbandsetInd
   *
   * **Type**: Text
   *
   * **Database Column Name**: `aangedrevenrupsbandsetind`
   */
  Aangedrevenrupsbandsetind: Field("aangedrevenrupsbandsetind", DataType.Text),
  /**
   * ### CodeUitvoeringTgk
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codeuitvoeringtgk`
   */
  Codeuitvoeringtgk: Field("codeuitvoeringtgk", DataType.Text),
  /**
   * ### CodeVariantTgk
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codevarianttgk`
   */
  Codevarianttgk: Field("codevarianttgk", DataType.Text),
  /**
   * ### GeremdeRupsbandsetIndicator
   *
   * **Type**: Number
   *
   * **Database Column Name**: `geremderupsbandsetindicator`
   */
  Geremderupsbandsetindicator: Field("geremderupsbandsetindicator", DataType.Number),
  /**
   * ### MaximummassaRupsbandsetBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassarupsbandsetbgr`
   */
  Maximummassarupsbandsetbgr: Field("maximummassarupsbandsetbgr", DataType.Number),
  /**
   * ### MaximummassaRupsbandsetOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassarupsbandsetogr`
   */
  Maximummassarupsbandsetogr: Field("maximummassarupsbandsetogr", DataType.Number),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Number),
  /**
   * ### VolgnummerRupsbandset
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerrupsbandset`
   */
  Volgnummerrupsbandset: Field("volgnummerrupsbandset", DataType.Number),
};

export const Info = {
  fields: [
    "Aangedrevenrupsbandsetind",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Geremderupsbandsetindicator",
    "Maximummassarupsbandsetbgr",
    "Maximummassarupsbandsetogr",
    "Typegoedkeuringsnummer",
    "Volgnummerrevisieuitvoering",
    "Volgnummerrupsbandset",
  ],
  dataset: "xn6e-huse",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Rupsbandset Uitvoering",
  provider_name: "TgkRupsbandsetUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Rupsbandset-Uitvoering/xn6e-huse",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/xn6e-huse",
};

/**
 * ### Open Data RDW: TGK Rupsbandset Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Rupsbandset-Uitvoering/xn6e-huse
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/xn6e-huse
 *
 * **Dataset ID:** xn6e-huse
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Rupsbandset Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Aangedrevenrupsbandsetind, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkRupsbandsetUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkRupsbandsetUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkRupsbandsetUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
