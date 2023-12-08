// *******************************************************
//
// Name: Test_Producer_API
//
// Category: Unknown
// Link: https://opendata.rdw.nl/dataset/Test_Producer_API/sgwh-cvkk
// Permalink: https://opendata.rdw.nl/d/sgwh-cvkk
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Test_Producer_API
 */
export interface TestProducerApi_ResponseData {
  /**
   * ### Carrosserie klasse europees
   *
   * **Type**: Text
   */
  carrosserie_klasse_europees?: string;
  /**
   * ### EEG Uitvoeringscode
   *
   * **Type**: Number
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
  /**
   * ### UniekeCode
   *
   * **Type**: Text
   */
  uniekecode?: string;
}

/**
 * Fieldnames for **TestProducerApi**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieKlasseEuropees`` | ``carrosserie_klasse_europees`` | _Text_ |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Number_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 * | ``Uniekecode`` | ``uniekecode`` | _Text_ |
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
  * ### EEG Uitvoeringscode
  *
  * **Type**: Number
  *
  * **Database Column Name**: `eeg_uitvoeringscode`
  */
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Number),
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
  /**
  * ### UniekeCode
  *
  * **Type**: Text
  *
  * **Database Column Name**: `uniekecode`
  */
  Uniekecode: Field("uniekecode", DataType.Text),
};

export const Info = {
  fields: [
    "CarrosserieKlasseEuropees",
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "UitvoeringWijzigingsnummer",
    "Uniekecode",
  ],
  dataset: "sgwh-cvkk",
  domain: "opendata.rdw.nl",
  full_name: "Test_Producer_API",
  provider_name: "TestProducerApi",
  url: "https://opendata.rdw.nl/dataset/Test_Producer_API/sgwh-cvkk",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/sgwh-cvkk",
}

/**
 * ### Test_Producer_API
 *
 * **URL:** https://opendata.rdw.nl/dataset/Test_Producer_API/sgwh-cvkk
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/sgwh-cvkk
 *
 * **Dataset ID:** sgwh-cvkk
 *
 * **Category:** Unknown
 *
 * -----------------------
 * This generates a SodaQuery for the Test_Producer_API dataset.
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
  createQueryWithDataset<TestProducerApi_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TestProducerApi = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
