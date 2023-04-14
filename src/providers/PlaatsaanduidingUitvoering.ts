// *******************************************************
//
// Name: Open Data RDW: Plaatsaanduiding Uitvoering
//
//
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4
// Permalink: https://opendata.rdw.nl/d/mt8t-4ep4
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
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
 * Return Data for Open Data RDW: Plaatsaanduiding Uitvoering
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
 *
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
   * ### Plaats aanduiding volgnummer
   *
   * **Type**: Number
   */
  PlaatsAanduidingVolgnummer: FieldObject<DataType.Number>;
  /**
   * ### Plaatsaanduiding registratie datum
   *
   * **Type**: Number
   */
  PlaatsaanduidingRegistratieDatum: FieldObject<DataType.Number>;
  /**
   * ### Plaatsaanduiding registratie datum_DT
   *
   * **Type**: Calendar date
   */
  PlaatsaanduidingRegistratieDatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Plaatscode voeruig identificatie
   *
   * **Type**: Text
   */
  PlaatscodeVoeruigIdentificatie: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  UitvoeringWijzigingsnummer: FieldObject<DataType.Number>;
}

export const Fields: IFields = {
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  PlaatsAanduidingVolgnummer: Field("plaats_aanduiding_volgnummer", DataType.Number),
  PlaatsaanduidingRegistratieDatum: Field("plaatsaanduiding_registratie_datum", DataType.Number),
  PlaatsaanduidingRegistratieDatumDt: Field(
    "plaatsaanduiding_registratie_datum_dt",
    DataType.FloatingTimestamp,
  ),
  PlaatscodeVoeruigIdentificatie: Field("plaatscode_voeruig_identificatie", DataType.Text),
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
  url:
    "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/mt8t-4ep4",
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
