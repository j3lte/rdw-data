// *******************************************************
//
// Name: Open Data RDW: TGK Speciale Doeleinden
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Speciale-Doeleinden/m692-vvff
// Permalink: https://opendata.rdw.nl/d/m692-vvff
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Speciale Doeleinden
 */
export interface TgkSpecialeDoeleinden_ResponseData {
  /**
   * ### CodeSpecialeDoeleinden
   *
   * **Type**: Text
   */
  codespecialedoeleinden?: string;
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
   * ### VolgnummerSpecialeDoeleinden
   *
   * **Type**: Number
   */
  volgnummerspecialedoeleinden?: string;
}

/**
 * Fieldnames for **TgkSpecialeDoeleinden**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Codespecialedoeleinden`` | ``codespecialedoeleinden`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 * | ``Volgnummerspecialedoeleinden`` | ``volgnummerspecialedoeleinden`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### CodeSpecialeDoeleinden
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codespecialedoeleinden`
   */
  Codespecialedoeleinden: Field("codespecialedoeleinden", DataType.Text),
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
   * ### VolgnummerSpecialeDoeleinden
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerspecialedoeleinden`
   */
  Volgnummerspecialedoeleinden: Field("volgnummerspecialedoeleinden", DataType.Number),
};

export const Info = {
  fields: [
    "Codespecialedoeleinden",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Typegoedkeuringsnummer",
    "Volgnummerrevisieuitvoering",
    "Volgnummerspecialedoeleinden",
  ],
  dataset: "m692-vvff",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Speciale Doeleinden",
  provider_name: "TgkSpecialeDoeleinden",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Speciale-Doeleinden/m692-vvff",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/m692-vvff",
};

/**
 * ### Open Data RDW: TGK Speciale Doeleinden
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Speciale-Doeleinden/m692-vvff
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/m692-vvff
 *
 * **Dataset ID:** m692-vvff
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Speciale Doeleinden dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Codespecialedoeleinden, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkSpecialeDoeleinden_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkSpecialeDoeleinden: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkSpecialeDoeleinden_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
