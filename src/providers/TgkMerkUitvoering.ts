// *******************************************************
//
// Name: Open Data RDW: TGK Merk Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Merk-Uitvoering/kyri-nuah
// Permalink: https://opendata.rdw.nl/d/kyri-nuah
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Merk Uitvoering
 */
export interface TgkMerkUitvoering_ResponseData {
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
   * ### MerkcodeRdw
   *
   * **Type**: Text
   */
  merkcoderdw?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### VolgnummerMerk
   *
   * **Type**: Text
   */
  volgnummermerk?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Text
   */
  volgnummerrevisieuitvoering?: string;
}

/**
 * Fieldnames for **TgkMerkUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Merkcoderdw`` | ``merkcoderdw`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummermerk`` | ``volgnummermerk`` | _Text_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Text_ |
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
   * **Database Column Name**: `codevarianttgk`
   */
  Codevarianttgk: Field("codevarianttgk", DataType.Text),
  /**
   * ### MerkcodeRdw
   *
   * **Type**: Text
   *
   * **Database Column Name**: `merkcoderdw`
   */
  Merkcoderdw: Field("merkcoderdw", DataType.Text),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### VolgnummerMerk
   *
   * **Type**: Text
   *
   * **Database Column Name**: `volgnummermerk`
   */
  Volgnummermerk: Field("volgnummermerk", DataType.Text),
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Text
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Text),
};

export const Info = {
  fields: [
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Merkcoderdw",
    "Typegoedkeuringsnummer",
    "Volgnummermerk",
    "Volgnummerrevisieuitvoering",
  ],
  dataset: "kyri-nuah",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Merk Uitvoering",
  provider_name: "TgkMerkUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Merk-Uitvoering/kyri-nuah",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/kyri-nuah",
};

/**
 * ### Open Data RDW: TGK Merk Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Merk-Uitvoering/kyri-nuah
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/kyri-nuah
 *
 * **Dataset ID:** kyri-nuah
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Merk Uitvoering dataset.
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
  createQueryWithDataset<TgkMerkUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkMerkUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkMerkUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
