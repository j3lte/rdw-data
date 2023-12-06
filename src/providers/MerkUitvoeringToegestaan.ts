// *******************************************************
//
// Name: Open Data RDW: Merk Uitvoering Toegestaan
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Merk-Uitvoering-Toegestaan/fj7t-hhik
// Permalink: https://opendata.rdw.nl/d/fj7t-hhik
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Merk Uitvoering Toegestaan
 */
export interface ResponseData {
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
   * ### Merk registratie datum
   *
   * **Type**: Number
   */
  merk_registratie_datum?: string;
  /**
   * ### Merk registratie datum_DT
   *
   * **Type**: Calendar date
   */
  merk_registratie_datum_dt?: string;
  /**
   * ### Merkcode
   *
   * **Type**: Text
   */
  merkcode?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
}

/**
 * Fieldnames for **MerkUitvoeringToegestaan**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``MerkRegistratieDatum`` | ``merk_registratie_datum`` | _Number_ |
 * | ``MerkRegistratieDatumDt`` | ``merk_registratie_datum_dt`` | _Calendar date_ |
 * | ``Merkcode`` | ``merkcode`` | _Text_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
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
   * ### Merk registratie datum
   *
   * **Type**: Number
   */
   MerkRegistratieDatum: FieldObject<DataType.Number>;
  /**
   * ### Merk registratie datum_DT
   *
   * **Type**: Calendar date
   */
   MerkRegistratieDatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Merkcode
   *
   * **Type**: Text
   */
   Merkcode: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
   UitvoeringWijzigingsnummer: FieldObject<DataType.Number>;
};

export const Fields: IFields = {
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  MerkRegistratieDatum: Field("merk_registratie_datum", DataType.Number),
  MerkRegistratieDatumDt: Field("merk_registratie_datum_dt", DataType.FloatingTimestamp),
  Merkcode: Field("merkcode", DataType.Text),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
};

export const Info = {
  fields: [
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "MerkRegistratieDatum",
    "MerkRegistratieDatumDt",
    "Merkcode",
    "UitvoeringWijzigingsnummer",
  ],
  dataset: "fj7t-hhik",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Merk Uitvoering Toegestaan",
  provider_name: "MerkUitvoeringToegestaan",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Merk-Uitvoering-Toegestaan/fj7t-hhik",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/fj7t-hhik",
}

/**
 * ### Open Data RDW: Merk Uitvoering Toegestaan
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Merk-Uitvoering-Toegestaan/fj7t-hhik
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/fj7t-hhik
 *
 * **Dataset ID:** fj7t-hhik
 *
 * **Category:** Typegoedkeuring
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
