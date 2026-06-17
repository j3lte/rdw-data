// *******************************************************
//
// Name: Open Data RDW: TGK Merk Uitvoering
//
// Category: Typegoedkeuring
// Tags: typegoedkeuring
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Merk-Uitvoering/kyri-nuah
// Permalink: https://opendata.rdw.nl/d/kyri-nuah
// Owner: BICC
// Creator: BICC
// Published: 2024-04-17T08:39:10.000Z
// Structure last updated: 2025-03-17T14:56:37.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
export const Fields: {
  Codeuitvoeringtgk: FieldObject<DataType.Text>;
  Codevarianttgk: FieldObject<DataType.Text>;
  Merkcoderdw: FieldObject<DataType.Text>;
  Typegoedkeuringsnummer: FieldObject<DataType.Text>;
  Volgnummermerk: FieldObject<DataType.Text>;
  Volgnummerrevisieuitvoering: FieldObject<DataType.Text>;
} = {
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

/**
 * Dataset metadata for **TgkMerkUitvoering**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
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
  category: "Typegoedkeuring",
  tags: ["typegoedkeuring"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-04-17T08:39:10.000Z",
  metadata_updated_at: "2025-03-17T14:56:37.000Z",
} as const;

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
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-04-17T08:39:10.000Z
 *
 * **Structure last updated:** 2025-03-17T14:56:37.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TgkMerkUitvoering_ResponseData> =>
  createQueryWithDataset<TgkMerkUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: TGK Merk Uitvoering**
 *
 * Provider for the Open Data RDW: TGK Merk Uitvoering dataset. Bundles:
 * - {@link TgkMerkUitvoering.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TgkMerkUitvoering.Fields} — the queryable field definitions
 * - {@link TgkMerkUitvoering.Info} — dataset metadata
 *
 * **Category:** Typegoedkeuring
 *
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** kyri-nuah
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Merk-Uitvoering/kyri-nuah
 *
 * **Published:** 2024-04-17T08:39:10.000Z
 *
 * **Structure last updated:** 2025-03-17T14:56:37.000Z
 *
 * @example
 * ```ts
 * const { data } = await TgkMerkUitvoering.RDWQuery()
 *   .where(Where.like(TgkMerkUitvoering.Fields.Codeuitvoeringtgk, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TgkMerkUitvoering = {
  RDWQuery,
  Fields,
  Info,
};
