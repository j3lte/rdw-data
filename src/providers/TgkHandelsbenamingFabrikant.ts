// *******************************************************
//
// Name: Open Data RDW: TGK Handelsbenaming Fabrikant
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Handelsbenaming-Fabrikant/x5v3-sewk
// Permalink: https://opendata.rdw.nl/d/x5v3-sewk
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Handelsbenaming Fabrikant
 */
export interface TgkHandelsbenamingFabrikant_ResponseData {
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
  codevariantgk?: string;
  /**
   * ### HandelsbenamingFabrikant
   *
   * **Type**: Text
   */
  handelsbenamingfabrikant?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### VolgnummerHandelsbenamingFabr
   *
   * **Type**: Number
   */
  volgnummerhandelsbenamingfabr?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
}

/**
 * Fieldnames for **TgkHandelsbenamingFabrikant**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevariantgk`` | ``codevariantgk`` | _Text_ |
 * | ``Handelsbenamingfabrikant`` | ``handelsbenamingfabrikant`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerhandelsbenamingfabr`` | ``volgnummerhandelsbenamingfabr`` | _Number_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
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
   * **Database Column Name**: `codevariantgk`
   */
  Codevariantgk: Field("codevariantgk", DataType.Text),
  /**
   * ### HandelsbenamingFabrikant
   *
   * **Type**: Text
   *
   * **Database Column Name**: `handelsbenamingfabrikant`
   */
  Handelsbenamingfabrikant: Field("handelsbenamingfabrikant", DataType.Text),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### VolgnummerHandelsbenamingFabr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerhandelsbenamingfabr`
   */
  Volgnummerhandelsbenamingfabr: Field("volgnummerhandelsbenamingfabr", DataType.Number),
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Number),
};

export const Info = {
  fields: [
    "Codeuitvoeringtgk",
    "Codevariantgk",
    "Handelsbenamingfabrikant",
    "Typegoedkeuringsnummer",
    "Volgnummerhandelsbenamingfabr",
    "Volgnummerrevisieuitvoering",
  ],
  dataset: "x5v3-sewk",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Handelsbenaming Fabrikant",
  provider_name: "TgkHandelsbenamingFabrikant",
  url:
    "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Handelsbenaming-Fabrikant/x5v3-sewk",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/x5v3-sewk",
};

/**
 * ### Open Data RDW: TGK Handelsbenaming Fabrikant
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Handelsbenaming-Fabrikant/x5v3-sewk
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/x5v3-sewk
 *
 * **Dataset ID:** x5v3-sewk
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Handelsbenaming Fabrikant dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Codeuitvoeringtgk, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkHandelsbenamingFabrikant_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

export const TgkHandelsbenamingFabrikant: {
  RDWQuery: (
    auth?: AuthOpts,
    opts?: Options,
  ) => SodaQuery<TgkHandelsbenamingFabrikant_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
