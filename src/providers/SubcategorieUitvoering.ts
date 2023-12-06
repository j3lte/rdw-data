// *******************************************************
//
// Name: Open Data RDW: Subcategorie Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Subcategorie-Uitvoering/h9pa-e9ta
// Permalink: https://opendata.rdw.nl/d/h9pa-e9ta
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Subcategorie Uitvoering
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
   * ### Subcateg uitvoering europees
   *
   * **Type**: Text
   */
  subcateg_uitvoering_europees?: string;
  /**
   * ### Subcategorie uitvoering volgnr
   *
   * **Type**: Number
   */
  subcategorie_uitvoering_volgnr?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
}

/**
 * Fieldnames for **SubcategorieUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``SubcategUitvoeringEuropees`` | ``subcateg_uitvoering_europees`` | _Text_ |
 * | ``SubcategorieUitvoeringVolgnr`` | ``subcategorie_uitvoering_volgnr`` | _Number_ |
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
   * ### Subcateg uitvoering europees
   *
   * **Type**: Text
   */
   SubcategUitvoeringEuropees: FieldObject<DataType.Text>;
  /**
   * ### Subcategorie uitvoering volgnr
   *
   * **Type**: Number
   */
   SubcategorieUitvoeringVolgnr: FieldObject<DataType.Number>;
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
  SubcategUitvoeringEuropees: Field("subcateg_uitvoering_europees", DataType.Text),
  SubcategorieUitvoeringVolgnr: Field("subcategorie_uitvoering_volgnr", DataType.Number),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
};

export const Info = {
  fields: [
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "SubcategUitvoeringEuropees",
    "SubcategorieUitvoeringVolgnr",
    "UitvoeringWijzigingsnummer",
  ],
  dataset: "h9pa-e9ta",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Subcategorie Uitvoering",
  provider_name: "SubcategorieUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Subcategorie-Uitvoering/h9pa-e9ta",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/h9pa-e9ta",
}

/**
 * ### Open Data RDW: Subcategorie Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Subcategorie-Uitvoering/h9pa-e9ta
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/h9pa-e9ta
 *
 * **Dataset ID:** h9pa-e9ta
 *
 * **Category:** Typegoedkeuring
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
