// *******************************************************
//
// Name: Open Data RDW: Versnellingsbak Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Versnellingsbak-Uitvoering/r7cw-67gs
// Permalink: https://opendata.rdw.nl/d/r7cw-67gs
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Versnellingsbak Uitvoering
 */
export interface ResponseData {
  /**
   * ### Aantal versnellingen bovengrens
   *
   * **Type**: Number
   */
  aantal_versnellingen_bovengrens?: string;
  /**
   * ### Aantal versnellingen ondergrens
   *
   * **Type**: Number
   */
  aantal_versnellingen_ondergrens?: string;
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
   * ### Type versnellingsbak
   *
   * **Type**: Text
   */
  type_versnellingsbak?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
  /**
   * ### Volgnummer versnellingsbak
   *
   * **Type**: Number
   */
  volgnummer?: string;
}

/**
 * Fieldnames for **VersnellingsbakUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AantalVersnellingenBovengrens`` | ``aantal_versnellingen_bovengrens`` | _Number_ |
 * | ``AantalVersnellingenOndergrens`` | ``aantal_versnellingen_ondergrens`` | _Number_ |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``TypeVersnellingsbak`` | ``type_versnellingsbak`` | _Text_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 * | ``Volgnummer`` | ``volgnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Aantal versnellingen bovengrens
   *
   * **Type**: Number
   */
   AantalVersnellingenBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal versnellingen ondergrens
   *
   * **Type**: Number
   */
   AantalVersnellingenOndergrens: FieldObject<DataType.Number>;
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
   * ### Type versnellingsbak
   *
   * **Type**: Text
   */
   TypeVersnellingsbak: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
   UitvoeringWijzigingsnummer: FieldObject<DataType.Number>;
  /**
   * ### Volgnummer versnellingsbak
   *
   * **Type**: Number
   */
   Volgnummer: FieldObject<DataType.Number>;
};

export const Fields: IFields = {
  AantalVersnellingenBovengrens: Field("aantal_versnellingen_bovengrens", DataType.Number),
  AantalVersnellingenOndergrens: Field("aantal_versnellingen_ondergrens", DataType.Number),
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  TypeVersnellingsbak: Field("type_versnellingsbak", DataType.Text),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
  Volgnummer: Field("volgnummer", DataType.Number),
};

export const Info = {
  fields: [
    "AantalVersnellingenBovengrens",
    "AantalVersnellingenOndergrens",
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "TypeVersnellingsbak",
    "UitvoeringWijzigingsnummer",
    "Volgnummer",
  ],
  dataset: "r7cw-67gs",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Versnellingsbak Uitvoering",
  provider_name: "VersnellingsbakUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Versnellingsbak-Uitvoering/r7cw-67gs",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/r7cw-67gs",
}

/**
 * ### Open Data RDW: Versnellingsbak Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Versnellingsbak-Uitvoering/r7cw-67gs
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/r7cw-67gs
 *
 * **Dataset ID:** r7cw-67gs
 *
 * **Category:** Typegoedkeuring
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
