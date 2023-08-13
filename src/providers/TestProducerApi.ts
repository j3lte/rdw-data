// *******************************************************
//
// Name: Test_Producer_API
//
//
//
// Category: Unknown
// Link: https://opendata.rdw.nl/dataset/Test_Producer_API/sgwh-cvkk
// Permalink: https://opendata.rdw.nl/d/sgwh-cvkk
// Owner: BICC
// Creator: BICC
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
 * Return Data for Test_Producer_API
 */
export interface ResponseData {
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
 *
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
export interface IFields {
  /**
   * ### Carrosserie klasse europees
   *
   * **Type**: Text
   */
  CarrosserieKlasseEuropees: FieldObject<DataType.Text>;
  /**
   * ### EEG Uitvoeringscode
   *
   * **Type**: Number
   */
  EegUitvoeringscode: FieldObject<DataType.Number>;
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
  /**
   * ### UniekeCode
   *
   * **Type**: Text
   */
  Uniekecode: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  CarrosserieKlasseEuropees: Field("carrosserie_klasse_europees", DataType.Text),
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Number),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
