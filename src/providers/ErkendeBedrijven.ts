// *******************************************************
//
// Name: Open Data RDW: Erkende Bedrijven
//
// Overzicht van de door RDW erkende bedrijven.
//
// Category: Erkende bedrijven
// Link: https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha
// Permalink: https://opendata.rdw.nl/d/5k74-3jha
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

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
export const Fields = {
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
}

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
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ErkendeBedrijven_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ErkendeBedrijven: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ErkendeBedrijven_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
