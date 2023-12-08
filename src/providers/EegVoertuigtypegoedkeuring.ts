// *******************************************************
//
// Name: Open Data RDW: EEG Voertuigtypegoedkeuring
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-EEG-Voertuigtypegoedkeuring/55kv-xf7m
// Permalink: https://opendata.rdw.nl/d/55kv-xf7m
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: EEG Voertuigtypegoedkeuring
 */
export interface EegVoertuigtypegoedkeuring_ResponseData {
  /**
   * ### API AS gegevens EEG uitvoering
   *
   * **Type**: Text
   */
  api_as_gegevens_eeg_uitvoering?: string;
  /**
   * ### API Basisgegevens EEG uitvoering
   *
   * **Type**: Text
   */
  api_basisgegevens_eeg_uitvoering?: string;
  /**
   * ### API Carrosserie uitvoering
   *
   * **Type**: Text
   */
  api_carrosserie_uitvoering?: string;
  /**
   * ### API Carrosserie uitvoering klasse
   *
   * **Type**: Text
   */
  api_carrosserie_uitvoering_klasse?: string;
  /**
   * ### API Carrosserie uitvoering nummerieke code
   *
   * **Type**: Text
   */
  api_carrosserie_uitvoering_nummerieke_code?: string;
  /**
   * ### API Handelsbenaming uitvoering
   *
   * **Type**: Text
   */
  api_handelsbenaming_uitvoering?: string;
  /**
   * ### API Merk uitvoering toegestaan
   *
   * **Type**: Text
   */
  api_merk_uitvoering_toegestaan?: string;
  /**
   * ### API Motor uitvoering
   *
   * **Type**: Text
   */
  api_motor_uitvoering?: string;
  /**
   * ### API Motor uitvoering brandstof
   *
   * **Type**: Text
   */
  api_motor_uitvoering_brandstof?: string;
  /**
   * ### API Plaatsaanduiding uitvoering
   *
   * **Type**: Text
   */
  api_plaatsaanduiding_uitvoering?: string;
  /**
   * ### API Subcategorie uitvoering
   *
   * **Type**: Text
   */
  api_subcategorie_uitvoering?: string;
  /**
   * ### API Uitvoeringverbruik per uitgave
   *
   * **Type**: Text
   */
  api_uitvoeringverbruik_per_uitgave?: string;
  /**
   * ### API Versnellingsbak uitvoering
   *
   * **Type**: Text
   */
  api_versnellingsbak_uitvoering?: string;
  /**
   * ### EEG basis goedkeuringsnummer
   *
   * **Type**: Number
   */
  eeg_basis_goedkeuringsnummer?: string;
  /**
   * ### EEG/ECE voertuig categorie bij type
   *
   * **Type**: Text
   */
  eeg_ece_voertuig_categorie_bij_type?: string;
  /**
   * ### EEG typegoedkeuringsdatum
   *
   * **Type**: Number
   */
  eeg_typegoedkeuringsdatum?: string;
  /**
   * ### EEG typegoedkeuringsdatum_DT
   *
   * **Type**: Calendar date
   */
  eeg_typegoedkeuringsdatum_dt?: string;
  /**
   * ### EEG uitbreiding goedkeuringsnummer
   *
   * **Type**: Number
   */
  eeg_uitbreiding_goedkeuringsnummer?: string;
  /**
   * ### EEG Voertuig cat toevoeging
   *
   * **Type**: Text
   */
  eeg_voertuig_cat_toevoeging?: string;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  eu_type_goedkeuringssleutel?: string;
  /**
   * ### Europese typegoedkeuring einddatum
   *
   * **Type**: Number
   */
  europese_typegoedkeuring_einddatum?: string;
  /**
   * ### Europese typegoedkeuring einddatum_DT
   *
   * **Type**: Calendar date
   */
  europese_typegoedkeuring_einddatum_dt?: string;
  /**
   * ### Europese typegoedkeuring intrek datum
   *
   * **Type**: Number
   */
  europese_typegoedkeuring_intrek_datum?: string;
  /**
   * ### Europese typegoedkeuring intrek datum_DT
   *
   * **Type**: Calendar date
   */
  europese_typegoedkeuring_intrek_datum_dt?: string;
  /**
   * ### Europese typegoedkeuring status
   *
   * **Type**: Text
   */
  europese_typegoedkeuring_status?: string;
  /**
   * ### Europese typegoedkeuring status datum
   *
   * **Type**: Number
   */
  europese_typegoedkeuring_status_datum?: string;
  /**
   * ### Europese typegoedkeuring status datum_DT
   *
   * **Type**: Calendar date
   */
  europese_typegoedkeuring_status_datum_dt?: string;
  /**
   * ### Europese typegoedkeurings registratie datum
   *
   * **Type**: Number
   */
  europese_typegoedkeurings_registratie_datum?: string;
  /**
   * ### Europese typegoedkeurings registratie datum_DT
   *
   * **Type**: Calendar date
   */
  europese_typegoedkeurings_registratie_datum_dt?: string;
  /**
   * ### Fabrikant
   *
   * **Type**: Text
   */
  fabrikant?: string;
  /**
   * ### Fabrikantcode type
   *
   * **Type**: Text
   */
  fabrikantcode_type?: string;
  /**
   * ### Landcode EEG typegoedkeuring
   *
   * **Type**: Text
   */
  landcode_eeg_typegoedkeuring?: string;
  /**
   * ### Richtlijn nr laatste wijziging
   *
   * **Type**: Text
   */
  richtlijn_nr_laatste_wijziging?: string;
  /**
   * ### Type fabrikant
   *
   * **Type**: Text
   */
  type_fabrikant?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### Vervaldatum typegoedkeuring
   *
   * **Type**: Number
   */
  vervaldatum_typegoedkeuring?: string;
  /**
   * ### Vervaldatum typegoedkeuring_DT
   *
   * **Type**: Calendar date
   */
  vervaldatum_typegoedkeuring_dt?: string;
}

/**
 * Fieldnames for **EegVoertuigtypegoedkeuring**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``ApiAsGegevensEegUitvoering`` | ``api_as_gegevens_eeg_uitvoering`` | _Text_ |
 * | ``ApiBasisgegevensEegUitvoering`` | ``api_basisgegevens_eeg_uitvoering`` | _Text_ |
 * | ``ApiCarrosserieUitvoering`` | ``api_carrosserie_uitvoering`` | _Text_ |
 * | ``ApiCarrosserieUitvoeringKlasse`` | ``api_carrosserie_uitvoering_klasse`` | _Text_ |
 * | ``ApiCarrosserieUitvoeringNummeriekeCode`` | ``api_carrosserie_uitvoering_nummerieke_code`` | _Text_ |
 * | ``ApiHandelsbenamingUitvoering`` | ``api_handelsbenaming_uitvoering`` | _Text_ |
 * | ``ApiMerkUitvoeringToegestaan`` | ``api_merk_uitvoering_toegestaan`` | _Text_ |
 * | ``ApiMotorUitvoering`` | ``api_motor_uitvoering`` | _Text_ |
 * | ``ApiMotorUitvoeringBrandstof`` | ``api_motor_uitvoering_brandstof`` | _Text_ |
 * | ``ApiPlaatsaanduidingUitvoering`` | ``api_plaatsaanduiding_uitvoering`` | _Text_ |
 * | ``ApiSubcategorieUitvoering`` | ``api_subcategorie_uitvoering`` | _Text_ |
 * | ``ApiUitvoeringverbruikPerUitgave`` | ``api_uitvoeringverbruik_per_uitgave`` | _Text_ |
 * | ``ApiVersnellingsbakUitvoering`` | ``api_versnellingsbak_uitvoering`` | _Text_ |
 * | ``EegBasisGoedkeuringsnummer`` | ``eeg_basis_goedkeuringsnummer`` | _Number_ |
 * | ``EegEceVoertuigCategorieBijType`` | ``eeg_ece_voertuig_categorie_bij_type`` | _Text_ |
 * | ``EegTypegoedkeuringsdatum`` | ``eeg_typegoedkeuringsdatum`` | _Number_ |
 * | ``EegTypegoedkeuringsdatumDt`` | ``eeg_typegoedkeuringsdatum_dt`` | _Calendar date_ |
 * | ``EegUitbreidingGoedkeuringsnummer`` | ``eeg_uitbreiding_goedkeuringsnummer`` | _Number_ |
 * | ``EegVoertuigCatToevoeging`` | ``eeg_voertuig_cat_toevoeging`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``EuropeseTypegoedkeuringEinddatum`` | ``europese_typegoedkeuring_einddatum`` | _Number_ |
 * | ``EuropeseTypegoedkeuringEinddatumDt`` | ``europese_typegoedkeuring_einddatum_dt`` | _Calendar date_ |
 * | ``EuropeseTypegoedkeuringIntrekDatum`` | ``europese_typegoedkeuring_intrek_datum`` | _Number_ |
 * | ``EuropeseTypegoedkeuringIntrekDatumDt`` | ``europese_typegoedkeuring_intrek_datum_dt`` | _Calendar date_ |
 * | ``EuropeseTypegoedkeuringStatus`` | ``europese_typegoedkeuring_status`` | _Text_ |
 * | ``EuropeseTypegoedkeuringStatusDatum`` | ``europese_typegoedkeuring_status_datum`` | _Number_ |
 * | ``EuropeseTypegoedkeuringStatusDatumDt`` | ``europese_typegoedkeuring_status_datum_dt`` | _Calendar date_ |
 * | ``EuropeseTypegoedkeuringsRegistratieDatum`` | ``europese_typegoedkeurings_registratie_datum`` | _Number_ |
 * | ``EuropeseTypegoedkeuringsRegistratieDatumDt`` | ``europese_typegoedkeurings_registratie_datum_dt`` | _Calendar date_ |
 * | ``Fabrikant`` | ``fabrikant`` | _Text_ |
 * | ``FabrikantcodeType`` | ``fabrikantcode_type`` | _Text_ |
 * | ``LandcodeEegTypegoedkeuring`` | ``landcode_eeg_typegoedkeuring`` | _Text_ |
 * | ``RichtlijnNrLaatsteWijziging`` | ``richtlijn_nr_laatste_wijziging`` | _Text_ |
 * | ``TypeFabrikant`` | ``type_fabrikant`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``VervaldatumTypegoedkeuring`` | ``vervaldatum_typegoedkeuring`` | _Number_ |
 * | ``VervaldatumTypegoedkeuringDt`` | ``vervaldatum_typegoedkeuring_dt`` | _Calendar date_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### API AS gegevens EEG uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_as_gegevens_eeg_uitvoering`
  */
  ApiAsGegevensEegUitvoering: Field("api_as_gegevens_eeg_uitvoering", DataType.Text),
  /**
  * ### API Basisgegevens EEG uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_basisgegevens_eeg_uitvoering`
  */
  ApiBasisgegevensEegUitvoering: Field("api_basisgegevens_eeg_uitvoering", DataType.Text),
  /**
  * ### API Carrosserie uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_carrosserie_uitvoering`
  */
  ApiCarrosserieUitvoering: Field("api_carrosserie_uitvoering", DataType.Text),
  /**
  * ### API Carrosserie uitvoering klasse
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_carrosserie_uitvoering_klasse`
  */
  ApiCarrosserieUitvoeringKlasse: Field("api_carrosserie_uitvoering_klasse", DataType.Text),
  /**
  * ### API Carrosserie uitvoering nummerieke code
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_carrosserie_uitvoering_nummerieke_code`
  */
  ApiCarrosserieUitvoeringNummeriekeCode: Field("api_carrosserie_uitvoering_nummerieke_code", DataType.Text),
  /**
  * ### API Handelsbenaming uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_handelsbenaming_uitvoering`
  */
  ApiHandelsbenamingUitvoering: Field("api_handelsbenaming_uitvoering", DataType.Text),
  /**
  * ### API Merk uitvoering toegestaan
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_merk_uitvoering_toegestaan`
  */
  ApiMerkUitvoeringToegestaan: Field("api_merk_uitvoering_toegestaan", DataType.Text),
  /**
  * ### API Motor uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_motor_uitvoering`
  */
  ApiMotorUitvoering: Field("api_motor_uitvoering", DataType.Text),
  /**
  * ### API Motor uitvoering brandstof
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_motor_uitvoering_brandstof`
  */
  ApiMotorUitvoeringBrandstof: Field("api_motor_uitvoering_brandstof", DataType.Text),
  /**
  * ### API Plaatsaanduiding uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_plaatsaanduiding_uitvoering`
  */
  ApiPlaatsaanduidingUitvoering: Field("api_plaatsaanduiding_uitvoering", DataType.Text),
  /**
  * ### API Subcategorie uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_subcategorie_uitvoering`
  */
  ApiSubcategorieUitvoering: Field("api_subcategorie_uitvoering", DataType.Text),
  /**
  * ### API Uitvoeringverbruik per uitgave
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_uitvoeringverbruik_per_uitgave`
  */
  ApiUitvoeringverbruikPerUitgave: Field("api_uitvoeringverbruik_per_uitgave", DataType.Text),
  /**
  * ### API Versnellingsbak uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_versnellingsbak_uitvoering`
  */
  ApiVersnellingsbakUitvoering: Field("api_versnellingsbak_uitvoering", DataType.Text),
  /**
  * ### EEG basis goedkeuringsnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `eeg_basis_goedkeuringsnummer`
  */
  EegBasisGoedkeuringsnummer: Field("eeg_basis_goedkeuringsnummer", DataType.Number),
  /**
  * ### EEG/ECE voertuig categorie bij type
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eeg_ece_voertuig_categorie_bij_type`
  */
  EegEceVoertuigCategorieBijType: Field("eeg_ece_voertuig_categorie_bij_type", DataType.Text),
  /**
  * ### EEG typegoedkeuringsdatum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `eeg_typegoedkeuringsdatum`
  */
  EegTypegoedkeuringsdatum: Field("eeg_typegoedkeuringsdatum", DataType.Number),
  /**
  * ### EEG typegoedkeuringsdatum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `eeg_typegoedkeuringsdatum_dt`
  */
  EegTypegoedkeuringsdatumDt: Field("eeg_typegoedkeuringsdatum_dt", DataType.FloatingTimestamp),
  /**
  * ### EEG uitbreiding goedkeuringsnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `eeg_uitbreiding_goedkeuringsnummer`
  */
  EegUitbreidingGoedkeuringsnummer: Field("eeg_uitbreiding_goedkeuringsnummer", DataType.Number),
  /**
  * ### EEG Voertuig cat toevoeging
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eeg_voertuig_cat_toevoeging`
  */
  EegVoertuigCatToevoeging: Field("eeg_voertuig_cat_toevoeging", DataType.Text),
  /**
  * ### EU Type goedkeuringssleutel
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eu_type_goedkeuringssleutel`
  */
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  /**
  * ### Europese typegoedkeuring einddatum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `europese_typegoedkeuring_einddatum`
  */
  EuropeseTypegoedkeuringEinddatum: Field("europese_typegoedkeuring_einddatum", DataType.Number),
  /**
  * ### Europese typegoedkeuring einddatum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `europese_typegoedkeuring_einddatum_dt`
  */
  EuropeseTypegoedkeuringEinddatumDt: Field("europese_typegoedkeuring_einddatum_dt", DataType.FloatingTimestamp),
  /**
  * ### Europese typegoedkeuring intrek datum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `europese_typegoedkeuring_intrek_datum`
  */
  EuropeseTypegoedkeuringIntrekDatum: Field("europese_typegoedkeuring_intrek_datum", DataType.Number),
  /**
  * ### Europese typegoedkeuring intrek datum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `europese_typegoedkeuring_intrek_datum_dt`
  */
  EuropeseTypegoedkeuringIntrekDatumDt: Field("europese_typegoedkeuring_intrek_datum_dt", DataType.FloatingTimestamp),
  /**
  * ### Europese typegoedkeuring status
  *
  * **Type**: Text
  *
  * **Database Column Name**: `europese_typegoedkeuring_status`
  */
  EuropeseTypegoedkeuringStatus: Field("europese_typegoedkeuring_status", DataType.Text),
  /**
  * ### Europese typegoedkeuring status datum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `europese_typegoedkeuring_status_datum`
  */
  EuropeseTypegoedkeuringStatusDatum: Field("europese_typegoedkeuring_status_datum", DataType.Number),
  /**
  * ### Europese typegoedkeuring status datum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `europese_typegoedkeuring_status_datum_dt`
  */
  EuropeseTypegoedkeuringStatusDatumDt: Field("europese_typegoedkeuring_status_datum_dt", DataType.FloatingTimestamp),
  /**
  * ### Europese typegoedkeurings registratie datum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `europese_typegoedkeurings_registratie_datum`
  */
  EuropeseTypegoedkeuringsRegistratieDatum: Field("europese_typegoedkeurings_registratie_datum", DataType.Number),
  /**
  * ### Europese typegoedkeurings registratie datum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `europese_typegoedkeurings_registratie_datum_dt`
  */
  EuropeseTypegoedkeuringsRegistratieDatumDt: Field("europese_typegoedkeurings_registratie_datum_dt", DataType.FloatingTimestamp),
  /**
  * ### Fabrikant
  *
  * **Type**: Text
  *
  * **Database Column Name**: `fabrikant`
  */
  Fabrikant: Field("fabrikant", DataType.Text),
  /**
  * ### Fabrikantcode type
  *
  * **Type**: Text
  *
  * **Database Column Name**: `fabrikantcode_type`
  */
  FabrikantcodeType: Field("fabrikantcode_type", DataType.Text),
  /**
  * ### Landcode EEG typegoedkeuring
  *
  * **Type**: Text
  *
  * **Database Column Name**: `landcode_eeg_typegoedkeuring`
  */
  LandcodeEegTypegoedkeuring: Field("landcode_eeg_typegoedkeuring", DataType.Text),
  /**
  * ### Richtlijn nr laatste wijziging
  *
  * **Type**: Text
  *
  * **Database Column Name**: `richtlijn_nr_laatste_wijziging`
  */
  RichtlijnNrLaatsteWijziging: Field("richtlijn_nr_laatste_wijziging", DataType.Text),
  /**
  * ### Type fabrikant
  *
  * **Type**: Text
  *
  * **Database Column Name**: `type_fabrikant`
  */
  TypeFabrikant: Field("type_fabrikant", DataType.Text),
  /**
  * ### Typegoedkeuringsnummer
  *
  * **Type**: Text
  *
  * **Database Column Name**: `typegoedkeuringsnummer`
  */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
  * ### Vervaldatum typegoedkeuring
  *
  * **Type**: Number
  *
  * **Database Column Name**: `vervaldatum_typegoedkeuring`
  */
  VervaldatumTypegoedkeuring: Field("vervaldatum_typegoedkeuring", DataType.Number),
  /**
  * ### Vervaldatum typegoedkeuring_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `vervaldatum_typegoedkeuring_dt`
  */
  VervaldatumTypegoedkeuringDt: Field("vervaldatum_typegoedkeuring_dt", DataType.FloatingTimestamp),
};

export const Info = {
  fields: [
    "ApiAsGegevensEegUitvoering",
    "ApiBasisgegevensEegUitvoering",
    "ApiCarrosserieUitvoering",
    "ApiCarrosserieUitvoeringKlasse",
    "ApiCarrosserieUitvoeringNummeriekeCode",
    "ApiHandelsbenamingUitvoering",
    "ApiMerkUitvoeringToegestaan",
    "ApiMotorUitvoering",
    "ApiMotorUitvoeringBrandstof",
    "ApiPlaatsaanduidingUitvoering",
    "ApiSubcategorieUitvoering",
    "ApiUitvoeringverbruikPerUitgave",
    "ApiVersnellingsbakUitvoering",
    "EegBasisGoedkeuringsnummer",
    "EegEceVoertuigCategorieBijType",
    "EegTypegoedkeuringsdatum",
    "EegTypegoedkeuringsdatumDt",
    "EegUitbreidingGoedkeuringsnummer",
    "EegVoertuigCatToevoeging",
    "EuTypeGoedkeuringssleutel",
    "EuropeseTypegoedkeuringEinddatum",
    "EuropeseTypegoedkeuringEinddatumDt",
    "EuropeseTypegoedkeuringIntrekDatum",
    "EuropeseTypegoedkeuringIntrekDatumDt",
    "EuropeseTypegoedkeuringStatus",
    "EuropeseTypegoedkeuringStatusDatum",
    "EuropeseTypegoedkeuringStatusDatumDt",
    "EuropeseTypegoedkeuringsRegistratieDatum",
    "EuropeseTypegoedkeuringsRegistratieDatumDt",
    "Fabrikant",
    "FabrikantcodeType",
    "LandcodeEegTypegoedkeuring",
    "RichtlijnNrLaatsteWijziging",
    "TypeFabrikant",
    "Typegoedkeuringsnummer",
    "VervaldatumTypegoedkeuring",
    "VervaldatumTypegoedkeuringDt",
  ],
  dataset: "55kv-xf7m",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: EEG Voertuigtypegoedkeuring",
  provider_name: "EegVoertuigtypegoedkeuring",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-EEG-Voertuigtypegoedkeuring/55kv-xf7m",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/55kv-xf7m",
}

/**
 * ### Open Data RDW: EEG Voertuigtypegoedkeuring
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-EEG-Voertuigtypegoedkeuring/55kv-xf7m
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/55kv-xf7m
 *
 * **Dataset ID:** 55kv-xf7m
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: EEG Voertuigtypegoedkeuring dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.ApiAsGegevensEegUitvoering, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<EegVoertuigtypegoedkeuring_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const EegVoertuigtypegoedkeuring: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<EegVoertuigtypegoedkeuring_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
