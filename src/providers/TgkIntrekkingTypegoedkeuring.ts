// *******************************************************
//
// Name: Open Data RDW: TGK Intrekking Typegoedkeuring
//
// Category: Typegoedkeuring
// Tags: typegoedkeuring
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z
// Permalink: https://opendata.rdw.nl/d/9s6a-b42z
// Owner: BICC
// Creator: BICC
// Published: 2024-04-16T14:29:10.000Z
// Structure last updated: 2025-03-17T14:29:52.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: TGK Intrekking Typegoedkeuring
 */
export interface TgkIntrekkingTypegoedkeuring_ResponseData {
  /**
   * ### BegindatumIntrekkingTgk
   *
   * **Type**: Calendar date
   */
  begindatumintrekkingtgk?: string;
  /**
   * ### EinddatumIntrekkingTgk
   *
   * **Type**: Calendar date
   */
  einddatumintrekkingtgk?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### VolgnummerIntrekkingTgk
   *
   * **Type**: Number
   */
  volgnummerintrekkingtgk?: string;
}

/**
 * Fieldnames for **TgkIntrekkingTypegoedkeuring**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Begindatumintrekkingtgk`` | ``begindatumintrekkingtgk`` | _Calendar date_ |
 * | ``Einddatumintrekkingtgk`` | ``einddatumintrekkingtgk`` | _Calendar date_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerintrekkingtgk`` | ``volgnummerintrekkingtgk`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Begindatumintrekkingtgk: FieldObject<DataType.FloatingTimestamp>;
  Einddatumintrekkingtgk: FieldObject<DataType.FloatingTimestamp>;
  Typegoedkeuringsnummer: FieldObject<DataType.Text>;
  Volgnummerintrekkingtgk: FieldObject<DataType.Number>;
} = {
  /**
   * ### BegindatumIntrekkingTgk
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `begindatumintrekkingtgk`
   */
  Begindatumintrekkingtgk: Field("begindatumintrekkingtgk", DataType.FloatingTimestamp),
  /**
   * ### EinddatumIntrekkingTgk
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `einddatumintrekkingtgk`
   */
  Einddatumintrekkingtgk: Field("einddatumintrekkingtgk", DataType.FloatingTimestamp),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### VolgnummerIntrekkingTgk
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerintrekkingtgk`
   */
  Volgnummerintrekkingtgk: Field("volgnummerintrekkingtgk", DataType.Number),
};

/**
 * Dataset metadata for **TgkIntrekkingTypegoedkeuring**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Begindatumintrekkingtgk",
    "Einddatumintrekkingtgk",
    "Typegoedkeuringsnummer",
    "Volgnummerintrekkingtgk",
  ],
  dataset: "9s6a-b42z",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Intrekking Typegoedkeuring",
  provider_name: "TgkIntrekkingTypegoedkeuring",
  url:
    "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/9s6a-b42z",
  category: "Typegoedkeuring",
  tags: ["typegoedkeuring"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-04-16T14:29:10.000Z",
  metadata_updated_at: "2025-03-17T14:29:52.000Z",
} as const;

/**
 * ### Open Data RDW: TGK Intrekking Typegoedkeuring
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/9s6a-b42z
 *
 * **Dataset ID:** 9s6a-b42z
 *
 * **Category:** Typegoedkeuring
 *
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-04-16T14:29:10.000Z
 *
 * **Structure last updated:** 2025-03-17T14:29:52.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Intrekking Typegoedkeuring dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Begindatumintrekkingtgk, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TgkIntrekkingTypegoedkeuring_ResponseData> =>
  createQueryWithDataset<TgkIntrekkingTypegoedkeuring_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data RDW: TGK Intrekking Typegoedkeuring**
 *
 * Provider for the Open Data RDW: TGK Intrekking Typegoedkeuring dataset. Bundles:
 * - {@link TgkIntrekkingTypegoedkeuring.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TgkIntrekkingTypegoedkeuring.Fields} — the queryable field definitions
 * - {@link TgkIntrekkingTypegoedkeuring.Info} — dataset metadata
 *
 * **Category:** Typegoedkeuring
 *
 * **Tags:** typegoedkeuring
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** 9s6a-b42z
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z
 *
 * **Published:** 2024-04-16T14:29:10.000Z
 *
 * **Structure last updated:** 2025-03-17T14:29:52.000Z
 *
 * @example
 * ```ts
 * const { data } = await TgkIntrekkingTypegoedkeuring.RDWQuery()
 *   .where(Where.like(TgkIntrekkingTypegoedkeuring.Fields.Begindatumintrekkingtgk, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TgkIntrekkingTypegoedkeuring = {
  RDWQuery,
  Fields,
  Info,
};
