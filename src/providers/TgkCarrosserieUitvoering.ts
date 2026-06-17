// *******************************************************
//
// Name: Open Data RDW: TGK Carrosserie Uitvoering
//
// Category: Typegoedkeuring
// Tags: typegoedkeuring
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad
// Permalink: https://opendata.rdw.nl/d/ky2r-jqad
// Owner: BICC
// Creator: BICC
// Published: 2024-09-04T06:36:37.000Z
// Structure last updated: 2025-03-17T14:21:41.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
   * ### VolgnummerCarrosserietype
   *
   * **Type**: Number
   */
  volgnummercarrosserietype?: string;
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
 * | ``Volgnummercarrosserietype`` | ``volgnummercarrosserietype`` | _Number_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 * | ``Volgnummervoertuigklasse`` | ``volgnummervoertuigklasse`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Codecarrosseriecode: FieldObject<DataType.Text>;
  Codecarrosserietype: FieldObject<DataType.Text>;
  Codeuitvoeringtgk: FieldObject<DataType.Text>;
  Codevarianttgk: FieldObject<DataType.Text>;
  Codevoertuigklasse: FieldObject<DataType.Text>;
  Typegoedkeuringsnummer: FieldObject<DataType.Text>;
  Volgnummercarrosseriecode: FieldObject<DataType.Number>;
  Volgnummercarrosserietype: FieldObject<DataType.Number>;
  Volgnummerrevisieuitvoering: FieldObject<DataType.Number>;
  Volgnummervoertuigklasse: FieldObject<DataType.Number>;
} = {
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
   * ### VolgnummerCarrosserietype
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummercarrosserietype`
   */
  Volgnummercarrosserietype: Field("volgnummercarrosserietype", DataType.Number),
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
};

/**
 * Dataset metadata for **TgkCarrosserieUitvoering**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Codecarrosseriecode",
    "Codecarrosserietype",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Codevoertuigklasse",
    "Typegoedkeuringsnummer",
    "Volgnummercarrosseriecode",
    "Volgnummercarrosserietype",
    "Volgnummerrevisieuitvoering",
    "Volgnummervoertuigklasse",
  ],
  dataset: "ky2r-jqad",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Carrosserie Uitvoering",
  provider_name: "TgkCarrosserieUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/ky2r-jqad",
  category: "Typegoedkeuring",
  tags: ["typegoedkeuring"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-09-04T06:36:37.000Z",
  metadata_updated_at: "2025-03-17T14:21:41.000Z",
} as const;

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
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-09-04T06:36:37.000Z
 *
 * **Structure last updated:** 2025-03-17T14:21:41.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TgkCarrosserieUitvoering_ResponseData> =>
  createQueryWithDataset<TgkCarrosserieUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: TGK Carrosserie Uitvoering**
 *
 * Provider for the Open Data RDW: TGK Carrosserie Uitvoering dataset. Bundles:
 * - {@link TgkCarrosserieUitvoering.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TgkCarrosserieUitvoering.Fields} — the queryable field definitions
 * - {@link TgkCarrosserieUitvoering.Info} — dataset metadata
 *
 * **Category:** Typegoedkeuring
 *
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** ky2r-jqad
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad
 *
 * **Published:** 2024-09-04T06:36:37.000Z
 *
 * **Structure last updated:** 2025-03-17T14:21:41.000Z
 *
 * @example
 * ```ts
 * const { data } = await TgkCarrosserieUitvoering.RDWQuery()
 *   .where(Where.like(TgkCarrosserieUitvoering.Fields.Codecarrosseriecode, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TgkCarrosserieUitvoering = {
  RDWQuery,
  Fields,
  Info,
};
