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

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Carrosserie Uitvoering Nummerieke Code
 */
export interface CarrosserieUitvoeringNummeriekeCode_ResponseData {
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
export const Fields = {
  /**
  * ### Carrosserie uitvoering numeriek Europees
  *
  * **Type**: Text
  *
  * **Database Column Name**: `carrosserie_uitvoering_numeriek_europees`
  */
  CarrosserieUitvoeringNumeriekEuropees: Field("carrosserie_uitvoering_numeriek_europees", DataType.Text),
  /**
  * ### Carrosserie uitvoering numeriek volgnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `carrosserie_uitvoering_numeriek_volgnummer`
  */
  CarrosserieUitvoeringNumeriekVolgnummer: Field("carrosserie_uitvoering_numeriek_volgnummer", DataType.Number),
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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Carrosserie Uitvoering Nummerieke Code dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CarrosserieUitvoeringNumeriekEuropees, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<CarrosserieUitvoeringNummeriekeCode_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const CarrosserieUitvoeringNummeriekeCode = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<CarrosserieUitvoeringNummeriekeCode_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
