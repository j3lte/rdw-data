// *******************************************************
//
// Name: Open Data RDW: Handelsbenaming Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Handelsbenaming-Uitvoering/mdqe-txpd
// Permalink: https://opendata.rdw.nl/d/mdqe-txpd
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Handelsbenaming Uitvoering
 */
export interface HandelsbenamingUitvoering_ResponseData {
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
   * ### Handelsbenaming fabrikant
   *
   * **Type**: Text
   */
  handelsbenaming_fabrikant?: string;
  /**
   * ### Registratiedatum handelsbenaming
   *
   * **Type**: Number
   */
  registratiedatum_handelsbenaming?: string;
  /**
   * ### Registratiedatum handelsbenaming_DT
   *
   * **Type**: Calendar date
   */
  registratiedatum_handelsbenaming_dt?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
  /**
   * ### Volgnummer handelsbenaming
   *
   * **Type**: Number
   */
  volgnummer?: string;
}

/**
 * Fieldnames for **HandelsbenamingUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``HandelsbenamingFabrikant`` | ``handelsbenaming_fabrikant`` | _Text_ |
 * | ``RegistratiedatumHandelsbenaming`` | ``registratiedatum_handelsbenaming`` | _Number_ |
 * | ``RegistratiedatumHandelsbenamingDt`` | ``registratiedatum_handelsbenaming_dt`` | _Calendar date_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 * | ``Volgnummer`` | ``volgnummer`` | _Number_ |
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
   * ### Handelsbenaming fabrikant
   *
   * **Type**: Text
   *
   * **Database Column Name**: `handelsbenaming_fabrikant`
   */
  HandelsbenamingFabrikant: Field("handelsbenaming_fabrikant", DataType.Text),
  /**
   * ### Registratiedatum handelsbenaming
   *
   * **Type**: Number
   *
   * **Database Column Name**: `registratiedatum_handelsbenaming`
   */
  RegistratiedatumHandelsbenaming: Field("registratiedatum_handelsbenaming", DataType.Number),
  /**
   * ### Registratiedatum handelsbenaming_DT
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `registratiedatum_handelsbenaming_dt`
   */
  RegistratiedatumHandelsbenamingDt: Field(
    "registratiedatum_handelsbenaming_dt",
    DataType.FloatingTimestamp,
  ),
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   *
   * **Database Column Name**: `uitvoering_wijzigingsnummer`
   */
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
  /**
   * ### Volgnummer handelsbenaming
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummer`
   */
  Volgnummer: Field("volgnummer", DataType.Number),
};

export const Info = {
  fields: [
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "HandelsbenamingFabrikant",
    "RegistratiedatumHandelsbenaming",
    "RegistratiedatumHandelsbenamingDt",
    "UitvoeringWijzigingsnummer",
    "Volgnummer",
  ],
  dataset: "mdqe-txpd",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Handelsbenaming Uitvoering",
  provider_name: "HandelsbenamingUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Handelsbenaming-Uitvoering/mdqe-txpd",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/mdqe-txpd",
};

/**
 * ### Open Data RDW: Handelsbenaming Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Handelsbenaming-Uitvoering/mdqe-txpd
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/mdqe-txpd
 *
 * **Dataset ID:** mdqe-txpd
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Handelsbenaming Uitvoering dataset.
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
  createQueryWithDataset<HandelsbenamingUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const HandelsbenamingUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<HandelsbenamingUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
