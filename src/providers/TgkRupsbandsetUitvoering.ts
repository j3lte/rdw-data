// *******************************************************
//
// Name: Open Data RDW: TGK Rupsbandset Uitvoering
//
// Category: Typegoedkeuring
// Tags: typegoedkeuring
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Rupsbandset-Uitvoering/xn6e-huse
// Permalink: https://opendata.rdw.nl/d/xn6e-huse
// Owner: BICC
// Creator: BICC
// Published: 2024-04-16T14:32:56.000Z
// Structure last updated: 2025-03-17T14:48:59.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
export const Fields: {
  Aangedrevenrupsbandsetind: FieldObject<DataType.Text>;
  Codeuitvoeringtgk: FieldObject<DataType.Text>;
  Codevarianttgk: FieldObject<DataType.Text>;
  Geremderupsbandsetindicator: FieldObject<DataType.Number>;
  Maximummassarupsbandsetbgr: FieldObject<DataType.Number>;
  Maximummassarupsbandsetogr: FieldObject<DataType.Number>;
  Typegoedkeuringsnummer: FieldObject<DataType.Text>;
  Volgnummerrevisieuitvoering: FieldObject<DataType.Number>;
  Volgnummerrupsbandset: FieldObject<DataType.Number>;
} = {
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

/**
 * Dataset metadata for **TgkRupsbandsetUitvoering**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
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
  category: "Typegoedkeuring",
  tags: ["typegoedkeuring"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-04-16T14:32:56.000Z",
  metadata_updated_at: "2025-03-17T14:48:59.000Z",
} as const;

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
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-04-16T14:32:56.000Z
 *
 * **Structure last updated:** 2025-03-17T14:48:59.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TgkRupsbandsetUitvoering_ResponseData> =>
  createQueryWithDataset<TgkRupsbandsetUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: TGK Rupsbandset Uitvoering**
 *
 * Provider for the Open Data RDW: TGK Rupsbandset Uitvoering dataset. Bundles:
 * - {@link TgkRupsbandsetUitvoering.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TgkRupsbandsetUitvoering.Fields} — the queryable field definitions
 * - {@link TgkRupsbandsetUitvoering.Info} — dataset metadata
 *
 * **Category:** Typegoedkeuring
 *
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** xn6e-huse
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Rupsbandset-Uitvoering/xn6e-huse
 *
 * **Published:** 2024-04-16T14:32:56.000Z
 *
 * **Structure last updated:** 2025-03-17T14:48:59.000Z
 *
 * @example
 * ```ts
 * const { data } = await TgkRupsbandsetUitvoering.RDWQuery()
 *   .where(Where.like(TgkRupsbandsetUitvoering.Fields.Aangedrevenrupsbandsetind, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TgkRupsbandsetUitvoering = {
  RDWQuery,
  Fields,
  Info,
};
