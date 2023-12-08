// *******************************************************
//
// Name: Open Data RDW: Plaatsaanduiding Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4
// Permalink: https://opendata.rdw.nl/d/mt8t-4ep4
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Plaatsaanduiding Uitvoering
 */
export interface PlaatsaanduidingUitvoering_ResponseData {
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
   * ### Plaats aanduiding volgnummer
   *
   * **Type**: Number
   */
  plaats_aanduiding_volgnummer?: string;
  /**
   * ### Plaatsaanduiding registratie datum
   *
   * **Type**: Number
   */
  plaatsaanduiding_registratie_datum?: string;
  /**
   * ### Plaatsaanduiding registratie datum_DT
   *
   * **Type**: Calendar date
   */
  plaatsaanduiding_registratie_datum_dt?: string;
  /**
   * ### Plaatscode voeruig identificatie
   *
   * **Type**: Text
   */
  plaatscode_voeruig_identificatie?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
}

/**
 * Fieldnames for **PlaatsaanduidingUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``PlaatsAanduidingVolgnummer`` | ``plaats_aanduiding_volgnummer`` | _Number_ |
 * | ``PlaatsaanduidingRegistratieDatum`` | ``plaatsaanduiding_registratie_datum`` | _Number_ |
 * | ``PlaatsaanduidingRegistratieDatumDt`` | ``plaatsaanduiding_registratie_datum_dt`` | _Calendar date_ |
 * | ``PlaatscodeVoeruigIdentificatie`` | ``plaatscode_voeruig_identificatie`` | _Text_ |
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
  * ### Plaats aanduiding volgnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `plaats_aanduiding_volgnummer`
  */
  PlaatsAanduidingVolgnummer: Field("plaats_aanduiding_volgnummer", DataType.Number),
  /**
  * ### Plaatsaanduiding registratie datum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `plaatsaanduiding_registratie_datum`
  */
  PlaatsaanduidingRegistratieDatum: Field("plaatsaanduiding_registratie_datum", DataType.Number),
  /**
  * ### Plaatsaanduiding registratie datum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `plaatsaanduiding_registratie_datum_dt`
  */
  PlaatsaanduidingRegistratieDatumDt: Field("plaatsaanduiding_registratie_datum_dt", DataType.FloatingTimestamp),
  /**
  * ### Plaatscode voeruig identificatie
  *
  * **Type**: Text
  *
  * **Database Column Name**: `plaatscode_voeruig_identificatie`
  */
  PlaatscodeVoeruigIdentificatie: Field("plaatscode_voeruig_identificatie", DataType.Text),
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
    "PlaatsAanduidingVolgnummer",
    "PlaatsaanduidingRegistratieDatum",
    "PlaatsaanduidingRegistratieDatumDt",
    "PlaatscodeVoeruigIdentificatie",
    "UitvoeringWijzigingsnummer",
  ],
  dataset: "mt8t-4ep4",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Plaatsaanduiding Uitvoering",
  provider_name: "PlaatsaanduidingUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/mt8t-4ep4",
}

/**
 * ### Open Data RDW: Plaatsaanduiding Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/mt8t-4ep4
 *
 * **Dataset ID:** mt8t-4ep4
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Plaatsaanduiding Uitvoering dataset.
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
  createQueryWithDataset<PlaatsaanduidingUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const PlaatsaanduidingUitvoering = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
