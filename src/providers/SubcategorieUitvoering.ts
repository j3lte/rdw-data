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

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Subcategorie Uitvoering
 */
export interface SubcategorieUitvoering_ResponseData {
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
export const Fields = {
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
  * ### Subcateg uitvoering europees
  *
  * **Type**: Text
  *
  * **Database Column Name**: `subcateg_uitvoering_europees`
  */
  SubcategUitvoeringEuropees: Field("subcateg_uitvoering_europees", DataType.Text),
  /**
  * ### Subcategorie uitvoering volgnr
  *
  * **Type**: Number
  *
  * **Database Column Name**: `subcategorie_uitvoering_volgnr`
  */
  SubcategorieUitvoeringVolgnr: Field("subcategorie_uitvoering_volgnr", DataType.Number),
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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Subcategorie Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.EegUitvoeringscode, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<SubcategorieUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const SubcategorieUitvoering = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
