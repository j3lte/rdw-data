// *******************************************************
//
// Name: Open Data RDW: TGK Versnelling Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Versnelling-Uitvoering/7rjk-eycs
// Permalink: https://opendata.rdw.nl/d/7rjk-eycs
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Versnelling Uitvoering
 */
export interface TgkVersnellingUitvoering_ResponseData {
  /**
   * ### AantalVersnellingenBovengrens
   *
   * **Type**: Text
   */
  aantalversnellingenbovengrens?: string;
  /**
   * ### AantalVersnellingenOndergrens
   *
   * **Type**: Text
   */
  aantalversnellingenondergrens?: string;
  /**
   * ### CodeTypeVersnellingsbak
   *
   * **Type**: Text
   */
  codetypeversnellingsbak?: string;
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
   * **Type**: Text
   */
  volgnummerrevisieuitvoering?: string;
  /**
   * ### VolgnummerVersnelling
   *
   * **Type**: Text
   */
  volgnummerversnelling?: string;
}

/**
 * Fieldnames for **TgkVersnellingUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Aantalversnellingenbovengrens`` | ``aantalversnellingenbovengrens`` | _Text_ |
 * | ``Aantalversnellingenondergrens`` | ``aantalversnellingenondergrens`` | _Text_ |
 * | ``Codetypeversnellingsbak`` | ``codetypeversnellingsbak`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Text_ |
 * | ``Volgnummerversnelling`` | ``volgnummerversnelling`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### AantalVersnellingenBovengrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `aantalversnellingenbovengrens`
   */
  Aantalversnellingenbovengrens: Field("aantalversnellingenbovengrens", DataType.Text),
  /**
   * ### AantalVersnellingenOndergrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `aantalversnellingenondergrens`
   */
  Aantalversnellingenondergrens: Field("aantalversnellingenondergrens", DataType.Text),
  /**
   * ### CodeTypeVersnellingsbak
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codetypeversnellingsbak`
   */
  Codetypeversnellingsbak: Field("codetypeversnellingsbak", DataType.Text),
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
   * **Type**: Text
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Text),
  /**
   * ### VolgnummerVersnelling
   *
   * **Type**: Text
   *
   * **Database Column Name**: `volgnummerversnelling`
   */
  Volgnummerversnelling: Field("volgnummerversnelling", DataType.Text),
};

export const Info = {
  fields: [
    "Aantalversnellingenbovengrens",
    "Aantalversnellingenondergrens",
    "Codetypeversnellingsbak",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Typegoedkeuringsnummer",
    "Volgnummerrevisieuitvoering",
    "Volgnummerversnelling",
  ],
  dataset: "7rjk-eycs",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Versnelling Uitvoering",
  provider_name: "TgkVersnellingUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Versnelling-Uitvoering/7rjk-eycs",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/7rjk-eycs",
};

/**
 * ### Open Data RDW: TGK Versnelling Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Versnelling-Uitvoering/7rjk-eycs
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/7rjk-eycs
 *
 * **Dataset ID:** 7rjk-eycs
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Versnelling Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Aantalversnellingenbovengrens, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkVersnellingUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkVersnellingUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkVersnellingUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
