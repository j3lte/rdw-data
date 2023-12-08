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

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Merk Uitvoering Toegestaan
 */
export interface MerkUitvoeringToegestaan_ResponseData {
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
  * ### Merk registratie datum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `merk_registratie_datum`
  */
  MerkRegistratieDatum: Field("merk_registratie_datum", DataType.Number),
  /**
  * ### Merk registratie datum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `merk_registratie_datum_dt`
  */
  MerkRegistratieDatumDt: Field("merk_registratie_datum_dt", DataType.FloatingTimestamp),
  /**
  * ### Merkcode
  *
  * **Type**: Text
  *
  * **Database Column Name**: `merkcode`
  */
  Merkcode: Field("merkcode", DataType.Text),
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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Merk Uitvoering Toegestaan dataset.
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
  createQueryWithDataset<MerkUitvoeringToegestaan_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const MerkUitvoeringToegestaan = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<MerkUitvoeringToegestaan_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
