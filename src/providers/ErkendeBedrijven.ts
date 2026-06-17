// *******************************************************
//
// Name: Open Data RDW: Erkende Bedrijven
//
// Overzicht van de door RDW erkende bedrijven.
//
// Category: Erkende bedrijven
// Tags: erkende bedrijven
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha
// Permalink: https://opendata.rdw.nl/d/5k74-3jha
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-08-13T06:28:19.000Z
// Structure last updated: 2026-01-30T09:38:55.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Erkende Bedrijven
 */
export interface ErkendeBedrijven_ResponseData {
  /**
   * ### api_bedrijf_erkenningen
   *
   * **Type**: Text
   */
  api_bedrijf_erkenningen?: string;
  /**
   * ### Gevelnaam
   *
   * **Type**: Text
   */
  gevelnaam?: string;
  /**
   * ### Huisnummer
   *
   * **Type**: Text
   */
  huisnummer?: string;
  /**
   * ### Huisnummer toevoeging
   *
   * **Type**: Text
   */
  huisnummer_toevoeging?: string;
  /**
   * ### Naam bedrijf
   *
   * **Type**: Text
   */
  naam_bedrijf?: string;
  /**
   * ### Plaats
   *
   * **Type**: Text
   */
  plaats?: string;
  /**
   * ### Postcode alfanumeriek
   *
   * **Type**: Text
   */
  postcode_alfanumeriek?: string;
  /**
   * ### Postcode numeriek
   *
   * **Type**: Number
   */
  postcode_numeriek?: string;
  /**
   * ### Straat
   *
   * **Type**: Text
   */
  straat?: string;
  /**
   * ### Volgnummer
   *
   * **Type**: Number
   */
  volgnummer?: string;
}

/**
 * Fieldnames for **ErkendeBedrijven**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``ApiBedrijfErkenningen`` | ``api_bedrijf_erkenningen`` | _Text_ |
 * | ``Gevelnaam`` | ``gevelnaam`` | _Text_ |
 * | ``Huisnummer`` | ``huisnummer`` | _Text_ |
 * | ``HuisnummerToevoeging`` | ``huisnummer_toevoeging`` | _Text_ |
 * | ``NaamBedrijf`` | ``naam_bedrijf`` | _Text_ |
 * | ``Plaats`` | ``plaats`` | _Text_ |
 * | ``PostcodeAlfanumeriek`` | ``postcode_alfanumeriek`` | _Text_ |
 * | ``PostcodeNumeriek`` | ``postcode_numeriek`` | _Number_ |
 * | ``Straat`` | ``straat`` | _Text_ |
 * | ``Volgnummer`` | ``volgnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  ApiBedrijfErkenningen: FieldObject<DataType.Text>;
  Gevelnaam: FieldObject<DataType.Text>;
  Huisnummer: FieldObject<DataType.Text>;
  HuisnummerToevoeging: FieldObject<DataType.Text>;
  NaamBedrijf: FieldObject<DataType.Text>;
  Plaats: FieldObject<DataType.Text>;
  PostcodeAlfanumeriek: FieldObject<DataType.Text>;
  PostcodeNumeriek: FieldObject<DataType.Number>;
  Straat: FieldObject<DataType.Text>;
  Volgnummer: FieldObject<DataType.Number>;
} = {
  /**
   * ### api_bedrijf_erkenningen
   *
   * **Type**: Text
   *
   * **Database Column Name**: `api_bedrijf_erkenningen`
   */
  ApiBedrijfErkenningen: Field("api_bedrijf_erkenningen", DataType.Text),
  /**
   * ### Gevelnaam
   *
   * **Type**: Text
   *
   * **Database Column Name**: `gevelnaam`
   */
  Gevelnaam: Field("gevelnaam", DataType.Text),
  /**
   * ### Huisnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `huisnummer`
   */
  Huisnummer: Field("huisnummer", DataType.Text),
  /**
   * ### Huisnummer toevoeging
   *
   * **Type**: Text
   *
   * **Database Column Name**: `huisnummer_toevoeging`
   */
  HuisnummerToevoeging: Field("huisnummer_toevoeging", DataType.Text),
  /**
   * ### Naam bedrijf
   *
   * **Type**: Text
   *
   * **Database Column Name**: `naam_bedrijf`
   */
  NaamBedrijf: Field("naam_bedrijf", DataType.Text),
  /**
   * ### Plaats
   *
   * **Type**: Text
   *
   * **Database Column Name**: `plaats`
   */
  Plaats: Field("plaats", DataType.Text),
  /**
   * ### Postcode alfanumeriek
   *
   * **Type**: Text
   *
   * **Database Column Name**: `postcode_alfanumeriek`
   */
  PostcodeAlfanumeriek: Field("postcode_alfanumeriek", DataType.Text),
  /**
   * ### Postcode numeriek
   *
   * **Type**: Number
   *
   * **Database Column Name**: `postcode_numeriek`
   */
  PostcodeNumeriek: Field("postcode_numeriek", DataType.Number),
  /**
   * ### Straat
   *
   * **Type**: Text
   *
   * **Database Column Name**: `straat`
   */
  Straat: Field("straat", DataType.Text),
  /**
   * ### Volgnummer
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummer`
   */
  Volgnummer: Field("volgnummer", DataType.Number),
};

/**
 * Dataset metadata for **ErkendeBedrijven**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "ApiBedrijfErkenningen",
    "Gevelnaam",
    "Huisnummer",
    "HuisnummerToevoeging",
    "NaamBedrijf",
    "Plaats",
    "PostcodeAlfanumeriek",
    "PostcodeNumeriek",
    "Straat",
    "Volgnummer",
  ],
  dataset: "5k74-3jha",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Erkende Bedrijven",
  provider_name: "ErkendeBedrijven",
  url: "https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/5k74-3jha",
  category: "Erkende bedrijven",
  tags: ["erkende bedrijven"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-08-13T06:28:19.000Z",
  metadata_updated_at: "2026-01-30T09:38:55.000Z",
} as const;

/**
 * ### Open Data RDW: Erkende Bedrijven
 * Overzicht van de door RDW erkende bedrijven.
 *
 * **URL:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/5k74-3jha
 *
 * **Dataset ID:** 5k74-3jha
 *
 * **Category:** Erkende bedrijven
 *
 * **Tags:** erkende bedrijven
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-08-13T06:28:19.000Z
 *
 * **Structure last updated:** 2026-01-30T09:38:55.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Erkende Bedrijven dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.ApiBedrijfErkenningen, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ErkendeBedrijven_ResponseData> =>
  createQueryWithDataset<ErkendeBedrijven_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Erkende Bedrijven**
 * Overzicht van de door RDW erkende bedrijven.
 *
 * Provider for the Open Data RDW: Erkende Bedrijven dataset. Bundles:
 * - {@link ErkendeBedrijven.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ErkendeBedrijven.Fields} — the queryable field definitions
 * - {@link ErkendeBedrijven.Info} — dataset metadata
 *
 * **Category:** Erkende bedrijven
 *
 * **Tags:** erkende bedrijven
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** 5k74-3jha
 *
 * **URL:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha
 *
 * **Published:** 2024-08-13T06:28:19.000Z
 *
 * **Structure last updated:** 2026-01-30T09:38:55.000Z
 *
 * @example
 * ```ts
 * const { data } = await ErkendeBedrijven.RDWQuery()
 *   .where(Where.like(ErkendeBedrijven.Fields.ApiBedrijfErkenningen, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ErkendeBedrijven = {
  RDWQuery,
  Fields,
  Info,
};
