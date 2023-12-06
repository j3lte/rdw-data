// *******************************************************
//
// Name: Open Data RDW: Carrosserie Uitvoering Nummerieke Code
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Nummerieke-Co/nypm-t8hx
// Permalink: https://opendata.rdw.nl/d/nypm-t8hx
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Carrosserie Uitvoering Nummerieke Code
 */
export interface ResponseData {
  /**
   * ### Carrosserie uitvoering numeriek Europees
   *
   * **Type**: Text
   */
  carrosserie_uitvoering_numeriek_europees?: string;
  /**
   * ### Carrosserie uitvoering numeriek volgnummer
   *
   * **Type**: Number
   */
  carrosserie_uitvoering_numeriek_volgnummer?: string;
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
 * Fieldnames for **CarrosserieUitvoeringNummeriekeCode**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieUitvoeringNumeriekEuropees`` | ``carrosserie_uitvoering_numeriek_europees`` | _Text_ |
 * | ``CarrosserieUitvoeringNumeriekVolgnummer`` | ``carrosserie_uitvoering_numeriek_volgnummer`` | _Number_ |
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
   * ### Carrosserie uitvoering numeriek Europees
   *
   * **Type**: Text
   */
   CarrosserieUitvoeringNumeriekEuropees: FieldObject<DataType.Text>;
  /**
   * ### Carrosserie uitvoering numeriek volgnummer
   *
   * **Type**: Number
   */
   CarrosserieUitvoeringNumeriekVolgnummer: FieldObject<DataType.Number>;
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
};

export const Fields: IFields = {
  CarrosserieUitvoeringNumeriekEuropees: Field("carrosserie_uitvoering_numeriek_europees", DataType.Text),
  CarrosserieUitvoeringNumeriekVolgnummer: Field("carrosserie_uitvoering_numeriek_volgnummer", DataType.Number),
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Number),
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
};

export const Info = {
  fields: [
    "CarrosserieUitvoeringNumeriekEuropees",
    "CarrosserieUitvoeringNumeriekVolgnummer",
    "CarrosserieVolgnummer",
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "UitvoeringWijzigingsnummer",
  ],
  dataset: "nypm-t8hx",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Carrosserie Uitvoering Nummerieke Code",
  provider_name: "CarrosserieUitvoeringNummeriekeCode",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Nummerieke-Co/nypm-t8hx",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/nypm-t8hx",
}

/**
 * ### Open Data RDW: Carrosserie Uitvoering Nummerieke Code
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Nummerieke-Co/nypm-t8hx
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/nypm-t8hx
 *
 * **Dataset ID:** nypm-t8hx
 *
 * **Category:** Typegoedkeuring
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
