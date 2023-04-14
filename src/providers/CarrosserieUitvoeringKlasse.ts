// *******************************************************
//
// Name: Open Data RDW: Carrosserie Uitvoering Klasse
//
//
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh
// Permalink: https://opendata.rdw.nl/d/q7fi-ijjh
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.3/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.3/mod.ts";
export {
  Order,
  Select,
  SelectAll,
  SelectGreatest,
  SelectLeast,
  SelectRegrIntercept,
  SelectRegrR2,
  SelectRegrSlope,
  SystemFields,
  Where,
} from "https://deno.land/x/soda@0.4.3/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data RDW: Carrosserie Uitvoering Klasse
 */
export interface ResponseData {
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
 *
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
export interface IFields {
  /**
   * ### Carrosserie klasse europees
   *
   * **Type**: Text
   */
  CarrosserieKlasseEuropees: FieldObject<DataType.Text>;
  /**
   * ### Carrosserie klasse volgnummer
   *
   * **Type**: Number
   */
  CarrosserieKlasseVolgnummer: FieldObject<DataType.Number>;
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Number
   */
  CarrosserieVolgnummer: FieldObject<DataType.Number>;
  /**
   * ### EEG Uitvoeringscode
   *
   * **Type**: Text
   */
  EegUitvoeringscode: FieldObject<DataType.Text>;
  /**
   * ### EEG variantcode
   *
   * **Type**: Text
   */
  EegVariantcode: FieldObject<DataType.Text>;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  EuTypeGoedkeuringssleutel: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  UitvoeringWijzigingsnummer: FieldObject<DataType.Number>;
}

export const Fields: IFields = {
  CarrosserieKlasseEuropees: Field("carrosserie_klasse_europees", DataType.Text),
  CarrosserieKlasseVolgnummer: Field("carrosserie_klasse_volgnummer", DataType.Number),
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Number),
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
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
  url:
    "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/q7fi-ijjh",
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
