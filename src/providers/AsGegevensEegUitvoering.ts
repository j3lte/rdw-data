// *******************************************************
//
// Name: Open Data RDW: AS Gegevens EEG Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-AS-Gegevens-EEG-Uitvoering/ahsi-8uyu
// Permalink: https://opendata.rdw.nl/d/ahsi-8uyu
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: AS Gegevens EEG Uitvoering
 */
export interface AsGegevensEegUitvoering_ResponseData {
  /**
   * ### Aangedreven as
   *
   * **Type**: Text
   */
  aangedreven_as?: string;
  /**
   * ### Afstand volgende as bovengrens
   *
   * **Type**: Number
   */
  afstand_volgende_as_bovengrens?: string;
  /**
   * ### Afstand volgende as ondergrens
   *
   * **Type**: Number
   */
  afstand_volgende_as_ondergrens?: string;
  /**
   * ### Asnummer
   *
   * **Type**: Text
   */
  asnummer?: string;
  /**
   * ### Dubbele montage
   *
   * **Type**: Text
   */
  dubbele_montage?: string;
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
   * ### Gelijkwaardig aan luchtvering
   *
   * **Type**: Text
   */
  gelijkwaardig_aan_luchtvering?: string;
  /**
   * ### Gestuurde as indicator
   *
   * **Type**: Text
   */
  gestuurde_as_indicator?: string;
  /**
   * ### Hefas
   *
   * **Type**: Text
   */
  hefas?: string;
  /**
   * ### Luchtvering
   *
   * **Type**: Text
   */
  luchtvering?: string;
  /**
   * ### Plaats as code
   *
   * **Type**: Text
   */
  plaats_as_code?: string;
  /**
   * ### Rolstraal bovengrens
   *
   * **Type**: Number
   */
  rolstraal_bovengrens?: string;
  /**
   * ### Rolstraal ondergrens
   *
   * **Type**: Number
   */
  rolstraal_ondergrens?: string;
  /**
   * ### Snelheidssymbool ondergrens
   *
   * **Type**: Text
   */
  snelheidssymbool_ondergrens?: string;
  /**
   * ### Spoorbreedte bovengrens
   *
   * **Type**: Number
   */
  spoorbreedte_bovengrens?: string;
  /**
   * ### Spoorbreedte ondergrens
   *
   * **Type**: Number
   */
  spoorbreedte_ondergrens?: string;
  /**
   * ### Techn max last as bovengrens
   *
   * **Type**: Number
   */
  techn_max_last_as_bovengrens?: string;
  /**
   * ### Techn max last as ondergrens
   *
   * **Type**: Number
   */
  techn_max_last_as_ondergrens?: string;
  /**
   * ### Techn max last asstel bovengr
   *
   * **Type**: Number
   */
  techn_max_last_asstel_bovengr?: string;
  /**
   * ### Techn max last asstel ondergr
   *
   * **Type**: Number
   */
  techn_max_last_asstel_ondergr?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
}

/**
 * Fieldnames for **AsGegevensEegUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AangedrevenAs`` | ``aangedreven_as`` | _Text_ |
 * | ``AfstandVolgendeAsBovengrens`` | ``afstand_volgende_as_bovengrens`` | _Number_ |
 * | ``AfstandVolgendeAsOndergrens`` | ``afstand_volgende_as_ondergrens`` | _Number_ |
 * | ``Asnummer`` | ``asnummer`` | _Text_ |
 * | ``DubbeleMontage`` | ``dubbele_montage`` | _Text_ |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``GelijkwaardigAanLuchtvering`` | ``gelijkwaardig_aan_luchtvering`` | _Text_ |
 * | ``GestuurdeAsIndicator`` | ``gestuurde_as_indicator`` | _Text_ |
 * | ``Hefas`` | ``hefas`` | _Text_ |
 * | ``Luchtvering`` | ``luchtvering`` | _Text_ |
 * | ``PlaatsAsCode`` | ``plaats_as_code`` | _Text_ |
 * | ``RolstraalBovengrens`` | ``rolstraal_bovengrens`` | _Number_ |
 * | ``RolstraalOndergrens`` | ``rolstraal_ondergrens`` | _Number_ |
 * | ``SnelheidssymboolOndergrens`` | ``snelheidssymbool_ondergrens`` | _Text_ |
 * | ``SpoorbreedteBovengrens`` | ``spoorbreedte_bovengrens`` | _Number_ |
 * | ``SpoorbreedteOndergrens`` | ``spoorbreedte_ondergrens`` | _Number_ |
 * | ``TechnMaxLastAsBovengrens`` | ``techn_max_last_as_bovengrens`` | _Number_ |
 * | ``TechnMaxLastAsOndergrens`` | ``techn_max_last_as_ondergrens`` | _Number_ |
 * | ``TechnMaxLastAsstelBovengr`` | ``techn_max_last_asstel_bovengr`` | _Number_ |
 * | ``TechnMaxLastAsstelOndergr`` | ``techn_max_last_asstel_ondergr`` | _Number_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Aangedreven as
  *
  * **Type**: Text
  *
  * **Database Column Name**: `aangedreven_as`
  */
  AangedrevenAs: Field("aangedreven_as", DataType.Text),
  /**
  * ### Afstand volgende as bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `afstand_volgende_as_bovengrens`
  */
  AfstandVolgendeAsBovengrens: Field("afstand_volgende_as_bovengrens", DataType.Number),
  /**
  * ### Afstand volgende as ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `afstand_volgende_as_ondergrens`
  */
  AfstandVolgendeAsOndergrens: Field("afstand_volgende_as_ondergrens", DataType.Number),
  /**
  * ### Asnummer
  *
  * **Type**: Text
  *
  * **Database Column Name**: `asnummer`
  */
  Asnummer: Field("asnummer", DataType.Text),
  /**
  * ### Dubbele montage
  *
  * **Type**: Text
  *
  * **Database Column Name**: `dubbele_montage`
  */
  DubbeleMontage: Field("dubbele_montage", DataType.Text),
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
  * ### Gelijkwaardig aan luchtvering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `gelijkwaardig_aan_luchtvering`
  */
  GelijkwaardigAanLuchtvering: Field("gelijkwaardig_aan_luchtvering", DataType.Text),
  /**
  * ### Gestuurde as indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `gestuurde_as_indicator`
  */
  GestuurdeAsIndicator: Field("gestuurde_as_indicator", DataType.Text),
  /**
  * ### Hefas
  *
  * **Type**: Text
  *
  * **Database Column Name**: `hefas`
  */
  Hefas: Field("hefas", DataType.Text),
  /**
  * ### Luchtvering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `luchtvering`
  */
  Luchtvering: Field("luchtvering", DataType.Text),
  /**
  * ### Plaats as code
  *
  * **Type**: Text
  *
  * **Database Column Name**: `plaats_as_code`
  */
  PlaatsAsCode: Field("plaats_as_code", DataType.Text),
  /**
  * ### Rolstraal bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `rolstraal_bovengrens`
  */
  RolstraalBovengrens: Field("rolstraal_bovengrens", DataType.Number),
  /**
  * ### Rolstraal ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `rolstraal_ondergrens`
  */
  RolstraalOndergrens: Field("rolstraal_ondergrens", DataType.Number),
  /**
  * ### Snelheidssymbool ondergrens
  *
  * **Type**: Text
  *
  * **Database Column Name**: `snelheidssymbool_ondergrens`
  */
  SnelheidssymboolOndergrens: Field("snelheidssymbool_ondergrens", DataType.Text),
  /**
  * ### Spoorbreedte bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `spoorbreedte_bovengrens`
  */
  SpoorbreedteBovengrens: Field("spoorbreedte_bovengrens", DataType.Number),
  /**
  * ### Spoorbreedte ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `spoorbreedte_ondergrens`
  */
  SpoorbreedteOndergrens: Field("spoorbreedte_ondergrens", DataType.Number),
  /**
  * ### Techn max last as bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `techn_max_last_as_bovengrens`
  */
  TechnMaxLastAsBovengrens: Field("techn_max_last_as_bovengrens", DataType.Number),
  /**
  * ### Techn max last as ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `techn_max_last_as_ondergrens`
  */
  TechnMaxLastAsOndergrens: Field("techn_max_last_as_ondergrens", DataType.Number),
  /**
  * ### Techn max last asstel bovengr
  *
  * **Type**: Number
  *
  * **Database Column Name**: `techn_max_last_asstel_bovengr`
  */
  TechnMaxLastAsstelBovengr: Field("techn_max_last_asstel_bovengr", DataType.Number),
  /**
  * ### Techn max last asstel ondergr
  *
  * **Type**: Number
  *
  * **Database Column Name**: `techn_max_last_asstel_ondergr`
  */
  TechnMaxLastAsstelOndergr: Field("techn_max_last_asstel_ondergr", DataType.Number),
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
    "AangedrevenAs",
    "AfstandVolgendeAsBovengrens",
    "AfstandVolgendeAsOndergrens",
    "Asnummer",
    "DubbeleMontage",
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "GelijkwaardigAanLuchtvering",
    "GestuurdeAsIndicator",
    "Hefas",
    "Luchtvering",
    "PlaatsAsCode",
    "RolstraalBovengrens",
    "RolstraalOndergrens",
    "SnelheidssymboolOndergrens",
    "SpoorbreedteBovengrens",
    "SpoorbreedteOndergrens",
    "TechnMaxLastAsBovengrens",
    "TechnMaxLastAsOndergrens",
    "TechnMaxLastAsstelBovengr",
    "TechnMaxLastAsstelOndergr",
    "UitvoeringWijzigingsnummer",
  ],
  dataset: "ahsi-8uyu",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: AS Gegevens EEG Uitvoering",
  provider_name: "AsGegevensEegUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-AS-Gegevens-EEG-Uitvoering/ahsi-8uyu",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/ahsi-8uyu",
}

/**
 * ### Open Data RDW: AS Gegevens EEG Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-AS-Gegevens-EEG-Uitvoering/ahsi-8uyu
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/ahsi-8uyu
 *
 * **Dataset ID:** ahsi-8uyu
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: AS Gegevens EEG Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.AangedrevenAs, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<AsGegevensEegUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const AsGegevensEegUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<AsGegevensEegUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
