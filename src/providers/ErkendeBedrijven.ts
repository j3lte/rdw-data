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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Erkende Bedrijven
 */
export interface ResponseData {
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
export interface IFields {
  /**
   * ### api_bedrijf_erkenningen
   *
   * **Type**: Text
   */
  ApiBedrijfErkenningen: FieldObject<DataType.Text>;
  /**
   * ### Gevelnaam
   *
   * **Type**: Text
   */
  Gevelnaam: FieldObject<DataType.Text>;
  /**
   * ### Huisnummer
   *
   * **Type**: Text
   */
  Huisnummer: FieldObject<DataType.Text>;
  /**
   * ### Huisnummer toevoeging
   *
   * **Type**: Text
   */
  HuisnummerToevoeging: FieldObject<DataType.Text>;
  /**
   * ### Naam bedrijf
   *
   * **Type**: Text
   */
  NaamBedrijf: FieldObject<DataType.Text>;
  /**
   * ### Plaats
   *
   * **Type**: Text
   */
  Plaats: FieldObject<DataType.Text>;
  /**
   * ### Postcode alfanumeriek
   *
   * **Type**: Text
   */
  PostcodeAlfanumeriek: FieldObject<DataType.Text>;
  /**
   * ### Postcode numeriek
   *
   * **Type**: Number
   */
  PostcodeNumeriek: FieldObject<DataType.Number>;
  /**
   * ### Straat
   *
   * **Type**: Text
   */
  Straat: FieldObject<DataType.Text>;
  /**
   * ### Volgnummer
   *
   * **Type**: Number
   */
  Volgnummer: FieldObject<DataType.Number>;
}

export const Fields: IFields = {
  ApiBedrijfErkenningen: Field("api_bedrijf_erkenningen", DataType.Text),
  Gevelnaam: Field("gevelnaam", DataType.Text),
  Huisnummer: Field("huisnummer", DataType.Text),
  HuisnummerToevoeging: Field("huisnummer_toevoeging", DataType.Text),
  NaamBedrijf: Field("naam_bedrijf", DataType.Text),
  Plaats: Field("plaats", DataType.Text),
  PostcodeAlfanumeriek: Field("postcode_alfanumeriek", DataType.Text),
  PostcodeNumeriek: Field("postcode_numeriek", DataType.Number),
  Straat: Field("straat", DataType.Text),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
