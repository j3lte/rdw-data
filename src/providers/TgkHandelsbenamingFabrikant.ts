// *******************************************************
//
// Name: Open Data RDW: TGK Handelsbenaming Fabrikant
//
// Category: Typegoedkeuring
// Tags: typegoedkeuring
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Handelsbenaming-Fabrikant/x5v3-sewk
// Permalink: https://opendata.rdw.nl/d/x5v3-sewk
// Owner: BICC
// Creator: BICC
// Published: 2025-03-17T15:58:57.000Z
// Structure last updated: 2025-03-17T15:58:57.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
   * ### TypeAanduidingFabrikant
   *
   * **Type**: Text
   */
  typeaanduidingfabrikant?: string;
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
 * | ``Typeaanduidingfabrikant`` | ``typeaanduidingfabrikant`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerhandelsbenamingfabr`` | ``volgnummerhandelsbenamingfabr`` | _Number_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Codeuitvoeringtgk: FieldObject<DataType.Text>;
  Codevariantgk: FieldObject<DataType.Text>;
  Handelsbenamingfabrikant: FieldObject<DataType.Text>;
  Typeaanduidingfabrikant: FieldObject<DataType.Text>;
  Typegoedkeuringsnummer: FieldObject<DataType.Text>;
  Volgnummerhandelsbenamingfabr: FieldObject<DataType.Number>;
  Volgnummerrevisieuitvoering: FieldObject<DataType.Number>;
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
   * ### TypeAanduidingFabrikant
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typeaanduidingfabrikant`
   */
  Typeaanduidingfabrikant: Field("typeaanduidingfabrikant", DataType.Text),
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

/**
 * Dataset metadata for **TgkHandelsbenamingFabrikant**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Codeuitvoeringtgk",
    "Codevariantgk",
    "Handelsbenamingfabrikant",
    "Typeaanduidingfabrikant",
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
  category: "Typegoedkeuring",
  tags: ["typegoedkeuring"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2025-03-17T15:58:57.000Z",
  metadata_updated_at: "2025-03-17T15:58:57.000Z",
} as const;

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
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2025-03-17T15:58:57.000Z
 *
 * **Structure last updated:** 2025-03-17T15:58:57.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TgkHandelsbenamingFabrikant_ResponseData> =>
  createQueryWithDataset<TgkHandelsbenamingFabrikant_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data RDW: TGK Handelsbenaming Fabrikant**
 *
 * Provider for the Open Data RDW: TGK Handelsbenaming Fabrikant dataset. Bundles:
 * - {@link TgkHandelsbenamingFabrikant.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TgkHandelsbenamingFabrikant.Fields} — the queryable field definitions
 * - {@link TgkHandelsbenamingFabrikant.Info} — dataset metadata
 *
 * **Category:** Typegoedkeuring
 *
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** x5v3-sewk
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Handelsbenaming-Fabrikant/x5v3-sewk
 *
 * **Published:** 2025-03-17T15:58:57.000Z
 *
 * **Structure last updated:** 2025-03-17T15:58:57.000Z
 *
 * @example
 * ```ts
 * const { data } = await TgkHandelsbenamingFabrikant.RDWQuery()
 *   .where(Where.like(TgkHandelsbenamingFabrikant.Fields.Codeuitvoeringtgk, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TgkHandelsbenamingFabrikant = {
  RDWQuery,
  Fields,
  Info,
};
