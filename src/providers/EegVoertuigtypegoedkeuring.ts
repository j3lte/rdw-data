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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: EEG Voertuigtypegoedkeuring
 */
export interface ResponseData {
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
export interface IFields {
  /**
   * ### API AS gegevens EEG uitvoering
   *
   * **Type**: Text
   */
  ApiAsGegevensEegUitvoering: FieldObject<DataType.Text>;
  /**
   * ### API Basisgegevens EEG uitvoering
   *
   * **Type**: Text
   */
  ApiBasisgegevensEegUitvoering: FieldObject<DataType.Text>;
  /**
   * ### API Carrosserie uitvoering
   *
   * **Type**: Text
   */
  ApiCarrosserieUitvoering: FieldObject<DataType.Text>;
  /**
   * ### API Carrosserie uitvoering klasse
   *
   * **Type**: Text
   */
  ApiCarrosserieUitvoeringKlasse: FieldObject<DataType.Text>;
  /**
   * ### API Carrosserie uitvoering nummerieke code
   *
   * **Type**: Text
   */
  ApiCarrosserieUitvoeringNummeriekeCode: FieldObject<DataType.Text>;
  /**
   * ### API Handelsbenaming uitvoering
   *
   * **Type**: Text
   */
  ApiHandelsbenamingUitvoering: FieldObject<DataType.Text>;
  /**
   * ### API Merk uitvoering toegestaan
   *
   * **Type**: Text
   */
  ApiMerkUitvoeringToegestaan: FieldObject<DataType.Text>;
  /**
   * ### API Motor uitvoering
   *
   * **Type**: Text
   */
  ApiMotorUitvoering: FieldObject<DataType.Text>;
  /**
   * ### API Motor uitvoering brandstof
   *
   * **Type**: Text
   */
  ApiMotorUitvoeringBrandstof: FieldObject<DataType.Text>;
  /**
   * ### API Plaatsaanduiding uitvoering
   *
   * **Type**: Text
   */
  ApiPlaatsaanduidingUitvoering: FieldObject<DataType.Text>;
  /**
   * ### API Subcategorie uitvoering
   *
   * **Type**: Text
   */
  ApiSubcategorieUitvoering: FieldObject<DataType.Text>;
  /**
   * ### API Uitvoeringverbruik per uitgave
   *
   * **Type**: Text
   */
  ApiUitvoeringverbruikPerUitgave: FieldObject<DataType.Text>;
  /**
   * ### API Versnellingsbak uitvoering
   *
   * **Type**: Text
   */
  ApiVersnellingsbakUitvoering: FieldObject<DataType.Text>;
  /**
   * ### EEG basis goedkeuringsnummer
   *
   * **Type**: Number
   */
  EegBasisGoedkeuringsnummer: FieldObject<DataType.Number>;
  /**
   * ### EEG/ECE voertuig categorie bij type
   *
   * **Type**: Text
   */
  EegEceVoertuigCategorieBijType: FieldObject<DataType.Text>;
  /**
   * ### EEG typegoedkeuringsdatum
   *
   * **Type**: Number
   */
  EegTypegoedkeuringsdatum: FieldObject<DataType.Number>;
  /**
   * ### EEG typegoedkeuringsdatum_DT
   *
   * **Type**: Calendar date
   */
  EegTypegoedkeuringsdatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### EEG uitbreiding goedkeuringsnummer
   *
   * **Type**: Number
   */
  EegUitbreidingGoedkeuringsnummer: FieldObject<DataType.Number>;
  /**
   * ### EEG Voertuig cat toevoeging
   *
   * **Type**: Text
   */
  EegVoertuigCatToevoeging: FieldObject<DataType.Text>;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  EuTypeGoedkeuringssleutel: FieldObject<DataType.Text>;
  /**
   * ### Europese typegoedkeuring einddatum
   *
   * **Type**: Number
   */
  EuropeseTypegoedkeuringEinddatum: FieldObject<DataType.Number>;
  /**
   * ### Europese typegoedkeuring einddatum_DT
   *
   * **Type**: Calendar date
   */
  EuropeseTypegoedkeuringEinddatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Europese typegoedkeuring intrek datum
   *
   * **Type**: Number
   */
  EuropeseTypegoedkeuringIntrekDatum: FieldObject<DataType.Number>;
  /**
   * ### Europese typegoedkeuring intrek datum_DT
   *
   * **Type**: Calendar date
   */
  EuropeseTypegoedkeuringIntrekDatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Europese typegoedkeuring status
   *
   * **Type**: Text
   */
  EuropeseTypegoedkeuringStatus: FieldObject<DataType.Text>;
  /**
   * ### Europese typegoedkeuring status datum
   *
   * **Type**: Number
   */
  EuropeseTypegoedkeuringStatusDatum: FieldObject<DataType.Number>;
  /**
   * ### Europese typegoedkeuring status datum_DT
   *
   * **Type**: Calendar date
   */
  EuropeseTypegoedkeuringStatusDatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Europese typegoedkeurings registratie datum
   *
   * **Type**: Number
   */
  EuropeseTypegoedkeuringsRegistratieDatum: FieldObject<DataType.Number>;
  /**
   * ### Europese typegoedkeurings registratie datum_DT
   *
   * **Type**: Calendar date
   */
  EuropeseTypegoedkeuringsRegistratieDatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Fabrikant
   *
   * **Type**: Text
   */
  Fabrikant: FieldObject<DataType.Text>;
  /**
   * ### Fabrikantcode type
   *
   * **Type**: Text
   */
  FabrikantcodeType: FieldObject<DataType.Text>;
  /**
   * ### Landcode EEG typegoedkeuring
   *
   * **Type**: Text
   */
  LandcodeEegTypegoedkeuring: FieldObject<DataType.Text>;
  /**
   * ### Richtlijn nr laatste wijziging
   *
   * **Type**: Text
   */
  RichtlijnNrLaatsteWijziging: FieldObject<DataType.Text>;
  /**
   * ### Type fabrikant
   *
   * **Type**: Text
   */
  TypeFabrikant: FieldObject<DataType.Text>;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  Typegoedkeuringsnummer: FieldObject<DataType.Text>;
  /**
   * ### Vervaldatum typegoedkeuring
   *
   * **Type**: Number
   */
  VervaldatumTypegoedkeuring: FieldObject<DataType.Number>;
  /**
   * ### Vervaldatum typegoedkeuring_DT
   *
   * **Type**: Calendar date
   */
  VervaldatumTypegoedkeuringDt: FieldObject<DataType.FloatingTimestamp>;
}

export const Fields: IFields = {
  ApiAsGegevensEegUitvoering: Field("api_as_gegevens_eeg_uitvoering", DataType.Text),
  ApiBasisgegevensEegUitvoering: Field("api_basisgegevens_eeg_uitvoering", DataType.Text),
  ApiCarrosserieUitvoering: Field("api_carrosserie_uitvoering", DataType.Text),
  ApiCarrosserieUitvoeringKlasse: Field("api_carrosserie_uitvoering_klasse", DataType.Text),
  ApiCarrosserieUitvoeringNummeriekeCode: Field(
    "api_carrosserie_uitvoering_nummerieke_code",
    DataType.Text,
  ),
  ApiHandelsbenamingUitvoering: Field("api_handelsbenaming_uitvoering", DataType.Text),
  ApiMerkUitvoeringToegestaan: Field("api_merk_uitvoering_toegestaan", DataType.Text),
  ApiMotorUitvoering: Field("api_motor_uitvoering", DataType.Text),
  ApiMotorUitvoeringBrandstof: Field("api_motor_uitvoering_brandstof", DataType.Text),
  ApiPlaatsaanduidingUitvoering: Field("api_plaatsaanduiding_uitvoering", DataType.Text),
  ApiSubcategorieUitvoering: Field("api_subcategorie_uitvoering", DataType.Text),
  ApiUitvoeringverbruikPerUitgave: Field("api_uitvoeringverbruik_per_uitgave", DataType.Text),
  ApiVersnellingsbakUitvoering: Field("api_versnellingsbak_uitvoering", DataType.Text),
  EegBasisGoedkeuringsnummer: Field("eeg_basis_goedkeuringsnummer", DataType.Number),
  EegEceVoertuigCategorieBijType: Field("eeg_ece_voertuig_categorie_bij_type", DataType.Text),
  EegTypegoedkeuringsdatum: Field("eeg_typegoedkeuringsdatum", DataType.Number),
  EegTypegoedkeuringsdatumDt: Field("eeg_typegoedkeuringsdatum_dt", DataType.FloatingTimestamp),
  EegUitbreidingGoedkeuringsnummer: Field("eeg_uitbreiding_goedkeuringsnummer", DataType.Number),
  EegVoertuigCatToevoeging: Field("eeg_voertuig_cat_toevoeging", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  EuropeseTypegoedkeuringEinddatum: Field("europese_typegoedkeuring_einddatum", DataType.Number),
  EuropeseTypegoedkeuringEinddatumDt: Field(
    "europese_typegoedkeuring_einddatum_dt",
    DataType.FloatingTimestamp,
  ),
  EuropeseTypegoedkeuringIntrekDatum: Field(
    "europese_typegoedkeuring_intrek_datum",
    DataType.Number,
  ),
  EuropeseTypegoedkeuringIntrekDatumDt: Field(
    "europese_typegoedkeuring_intrek_datum_dt",
    DataType.FloatingTimestamp,
  ),
  EuropeseTypegoedkeuringStatus: Field("europese_typegoedkeuring_status", DataType.Text),
  EuropeseTypegoedkeuringStatusDatum: Field(
    "europese_typegoedkeuring_status_datum",
    DataType.Number,
  ),
  EuropeseTypegoedkeuringStatusDatumDt: Field(
    "europese_typegoedkeuring_status_datum_dt",
    DataType.FloatingTimestamp,
  ),
  EuropeseTypegoedkeuringsRegistratieDatum: Field(
    "europese_typegoedkeurings_registratie_datum",
    DataType.Number,
  ),
  EuropeseTypegoedkeuringsRegistratieDatumDt: Field(
    "europese_typegoedkeurings_registratie_datum_dt",
    DataType.FloatingTimestamp,
  ),
  Fabrikant: Field("fabrikant", DataType.Text),
  FabrikantcodeType: Field("fabrikantcode_type", DataType.Text),
  LandcodeEegTypegoedkeuring: Field("landcode_eeg_typegoedkeuring", DataType.Text),
  RichtlijnNrLaatsteWijziging: Field("richtlijn_nr_laatste_wijziging", DataType.Text),
  TypeFabrikant: Field("type_fabrikant", DataType.Text),
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  VervaldatumTypegoedkeuring: Field("vervaldatum_typegoedkeuring", DataType.Number),
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
  url:
    "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-EEG-Voertuigtypegoedkeuring/55kv-xf7m",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/55kv-xf7m",
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
