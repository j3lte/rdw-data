// *******************************************************
//
// Name: Open Data RDW: TGK Speciale Doeleinden
//
// Category: Typegoedkeuring
// Tags: typegoedkeuring
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Speciale-Doeleinden/m692-vvff
// Permalink: https://opendata.rdw.nl/d/m692-vvff
// Owner: BICC
// Creator: BICC
// Published: 2024-04-16T16:14:28.000Z
// Structure last updated: 2025-03-17T14:48:40.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
export const Fields: {
  Codespecialedoeleinden: FieldObject<DataType.Text>;
  Codeuitvoeringtgk: FieldObject<DataType.Text>;
  Codevarianttgk: FieldObject<DataType.Text>;
  Typegoedkeuringsnummer: FieldObject<DataType.Text>;
  Volgnummerrevisieuitvoering: FieldObject<DataType.Number>;
  Volgnummerspecialedoeleinden: FieldObject<DataType.Number>;
} = {
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

/**
 * Dataset metadata for **TgkSpecialeDoeleinden**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
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
  category: "Typegoedkeuring",
  tags: ["typegoedkeuring"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-04-16T16:14:28.000Z",
  metadata_updated_at: "2025-03-17T14:48:40.000Z",
} as const;

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
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-04-16T16:14:28.000Z
 *
 * **Structure last updated:** 2025-03-17T14:48:40.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TgkSpecialeDoeleinden_ResponseData> =>
  createQueryWithDataset<TgkSpecialeDoeleinden_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: TGK Speciale Doeleinden**
 *
 * Provider for the Open Data RDW: TGK Speciale Doeleinden dataset. Bundles:
 * - {@link TgkSpecialeDoeleinden.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TgkSpecialeDoeleinden.Fields} — the queryable field definitions
 * - {@link TgkSpecialeDoeleinden.Info} — dataset metadata
 *
 * **Category:** Typegoedkeuring
 *
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** m692-vvff
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Speciale-Doeleinden/m692-vvff
 *
 * **Published:** 2024-04-16T16:14:28.000Z
 *
 * **Structure last updated:** 2025-03-17T14:48:40.000Z
 *
 * @example
 * ```ts
 * const { data } = await TgkSpecialeDoeleinden.RDWQuery()
 *   .where(Where.like(TgkSpecialeDoeleinden.Fields.Codespecialedoeleinden, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TgkSpecialeDoeleinden = {
  RDWQuery,
  Fields,
  Info,
};
