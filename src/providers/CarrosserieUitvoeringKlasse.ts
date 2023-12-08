// *******************************************************
//
// Name: Open Data RDW: Carrosserie Uitvoering Klasse
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh
// Permalink: https://opendata.rdw.nl/d/q7fi-ijjh
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Carrosserie Uitvoering Klasse
 */
export interface CarrosserieUitvoeringKlasse_ResponseData {
  /**
   * ### Carrosserie klasse europees
   *
   * **Type**: Text
   */
  carrosserie_klasse_europees?: string;
  /**
   * ### Carrosserie klasse volgnummer
   *
   * **Type**: Number
   */
  carrosserie_klasse_volgnummer?: string;
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Number
   */
  carrosserie_volgnummer?: string;
  /**
   * ### EEG Uitvoeringscode
   *
   * **Type**: Text
   */
  eeg_uitvoeringscode?: string;
  /**
   * ### EEG variantcode
   *
   * **Type**: Text
   */
  eeg_variantcode?: string;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  eu_type_goedkeuringssleutel?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
}

/**
 * Fieldnames for **CarrosserieUitvoeringKlasse**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieKlasseEuropees`` | ``carrosserie_klasse_europees`` | _Text_ |
 * | ``CarrosserieKlasseVolgnummer`` | ``carrosserie_klasse_volgnummer`` | _Number_ |
 * | ``CarrosserieVolgnummer`` | ``carrosserie_volgnummer`` | _Number_ |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Carrosserie klasse europees
  *
  * **Type**: Text
  *
  * **Database Column Name**: `carrosserie_klasse_europees`
  */
  CarrosserieKlasseEuropees: Field("carrosserie_klasse_europees", DataType.Text),
  /**
  * ### Carrosserie klasse volgnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `carrosserie_klasse_volgnummer`
  */
  CarrosserieKlasseVolgnummer: Field("carrosserie_klasse_volgnummer", DataType.Number),
  /**
  * ### Carrosserie volgnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `carrosserie_volgnummer`
  */
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Number),
  /**
  * ### EEG Uitvoeringscode
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eeg_uitvoeringscode`
  */
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  /**
  * ### EEG variantcode
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eeg_variantcode`
  */
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  /**
  * ### EU Type goedkeuringssleutel
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eu_type_goedkeuringssleutel`
  */
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  /**
  * ### Uitvoering wijzigingsnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `uitvoering_wijzigingsnummer`
  */
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
};

export const Info = {
  fields: [
    "CarrosserieKlasseEuropees",
    "CarrosserieKlasseVolgnummer",
    "CarrosserieVolgnummer",
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "UitvoeringWijzigingsnummer",
  ],
  dataset: "q7fi-ijjh",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Carrosserie Uitvoering Klasse",
  provider_name: "CarrosserieUitvoeringKlasse",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/q7fi-ijjh",
}

/**
 * ### Open Data RDW: Carrosserie Uitvoering Klasse
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/q7fi-ijjh
 *
 * **Dataset ID:** q7fi-ijjh
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Carrosserie Uitvoering Klasse dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CarrosserieKlasseEuropees, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<CarrosserieUitvoeringKlasse_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const CarrosserieUitvoeringKlasse = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
