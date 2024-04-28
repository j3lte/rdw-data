// *******************************************************
//
// Name: Open Data RDW: TGK Carrosserie Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad
// Permalink: https://opendata.rdw.nl/d/ky2r-jqad
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Carrosserie Uitvoering
 */
export interface TgkCarrosserieUitvoering_ResponseData {
  /**
   * ### CodeCarrosseriecode
   *
   * **Type**: Text
   */
  codecarrosseriecode?: string;
  /**
   * ### CodeCarrosserietype
   *
   * **Type**: Text
   */
  codecarrosserietype?: string;
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
   * ### CodeVoertuigklasse
   *
   * **Type**: Text
   */
  codevoertuigklasse?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### VolgnummerCarrosseriecode
   *
   * **Type**: Number
   */
  volgnummercarrosseriecode?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
  /**
   * ### VolgnummerVoertuigklasse
   *
   * **Type**: Number
   */
  volgnummervoertuigklasse?: string;
  /**
   * ### VolgummerCarrosserietype
   *
   * **Type**: Number
   */
  volgummercarrosserietype?: string;
}

/**
 * Fieldnames for **TgkCarrosserieUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Codecarrosseriecode`` | ``codecarrosseriecode`` | _Text_ |
 * | ``Codecarrosserietype`` | ``codecarrosserietype`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Codevoertuigklasse`` | ``codevoertuigklasse`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummercarrosseriecode`` | ``volgnummercarrosseriecode`` | _Number_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 * | ``Volgnummervoertuigklasse`` | ``volgnummervoertuigklasse`` | _Number_ |
 * | ``Volgummercarrosserietype`` | ``volgummercarrosserietype`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### CodeCarrosseriecode
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codecarrosseriecode`
   */
  Codecarrosseriecode: Field("codecarrosseriecode", DataType.Text),
  /**
   * ### CodeCarrosserietype
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codecarrosserietype`
   */
  Codecarrosserietype: Field("codecarrosserietype", DataType.Text),
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
   * ### CodeVoertuigklasse
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codevoertuigklasse`
   */
  Codevoertuigklasse: Field("codevoertuigklasse", DataType.Text),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### VolgnummerCarrosseriecode
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummercarrosseriecode`
   */
  Volgnummercarrosseriecode: Field("volgnummercarrosseriecode", DataType.Number),
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Number),
  /**
   * ### VolgnummerVoertuigklasse
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummervoertuigklasse`
   */
  Volgnummervoertuigklasse: Field("volgnummervoertuigklasse", DataType.Number),
  /**
   * ### VolgummerCarrosserietype
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgummercarrosserietype`
   */
  Volgummercarrosserietype: Field("volgummercarrosserietype", DataType.Number),
};

export const Info = {
  fields: [
    "Codecarrosseriecode",
    "Codecarrosserietype",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Codevoertuigklasse",
    "Typegoedkeuringsnummer",
    "Volgnummercarrosseriecode",
    "Volgnummerrevisieuitvoering",
    "Volgnummervoertuigklasse",
    "Volgummercarrosserietype",
  ],
  dataset: "ky2r-jqad",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Carrosserie Uitvoering",
  provider_name: "TgkCarrosserieUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/ky2r-jqad",
};

/**
 * ### Open Data RDW: TGK Carrosserie Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/ky2r-jqad
 *
 * **Dataset ID:** ky2r-jqad
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Carrosserie Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Codecarrosseriecode, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkCarrosserieUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkCarrosserieUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkCarrosserieUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
