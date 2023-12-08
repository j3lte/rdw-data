// *******************************************************
//
// Name: Open Data RDW: Motor Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering/g2s6-ehxa
// Permalink: https://opendata.rdw.nl/d/g2s6-ehxa
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Motor Uitvoering
 */
export interface MotorUitvoering_ResponseData {
  /**
   * ### Aantal cilinders
   *
   * **Type**: Number
   */
  aantal_cilinders?: string;
  /**
   * ### Brandstofcode
   *
   * **Type**: Text
   */
  brandstofcode?: string;
  /**
   * ### Brandstofverbruik buitenweg
   *
   * **Type**: Number
   */
  brandstofverbruik_buitenweg?: string;
  /**
   * ### Brandstofverbruik combin rit
   *
   * **Type**: Number
   */
  brandstofverbruik_combin_rit?: string;
  /**
   * ### Brandstofverbruik stadsrit
   *
   * **Type**: Number
   */
  brandstofverbruik_stadsrit?: string;
  /**
   * ### Cilinderinhoud (cm3)
   *
   * **Type**: Number
   */
  cilinderinhoud_cm3?: string;
  /**
   * ### CNG Systeem
   *
   * **Type**: Text
   */
  cng_systeem?: string;
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
   * ### Electromotor af fabriek indicator
   *
   * **Type**: Text
   */
  electromotor_af_fabriek_indicator?: string;
  /**
   * ### Emissie co bij koude start
   *
   * **Type**: Number
   */
  emissie_co_bij_koude_start?: string;
  /**
   * ### Emissie co2 buitenweg
   *
   * **Type**: Number
   */
  emissie_co2_buitenweg?: string;
  /**
   * ### Emissie co2 combinatierit
   *
   * **Type**: Number
   */
  emissie_co2_combinatierit?: string;
  /**
   * ### Emissie co2 stadsrit
   *
   * **Type**: Number
   */
  emissie_co2_stadsrit?: string;
  /**
   * ### Emissie hc bij koude start
   *
   * **Type**: Number
   */
  emissie_hc_bij_koude_start?: string;
  /**
   * ### Emissie hc en nox
   *
   * **Type**: Number
   */
  emissie_hc_en_nox?: string;
  /**
   * ### Emissie koolmonoxide
   *
   * **Type**: Number
   */
  emissie_koolmonoxide?: string;
  /**
   * ### Emissie koolwaterstof
   *
   * **Type**: Number
   */
  emissie_koolwaterstof?: string;
  /**
   * ### Emissie stikstofoxide
   *
   * **Type**: Number
   */
  emissie_stikstofoxide?: string;
  /**
   * ### Emissie vaste stofdeeltjes
   *
   * **Type**: Number
   */
  emissie_vaste_stofdeeltjes?: string;
  /**
   * ### Emissieklasse
   *
   * **Type**: Text
   */
  emissiecode?: string;
  /**
   * ### Enkel electrische indicator
   *
   * **Type**: Text
   */
  enkel_electrische_indicator?: string;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  eu_type_goedkeuringssleutel?: string;
  /**
   * ### Extern oplaadbaar
   *
   * **Type**: Text
   */
  extern_oplaadbaar?: string;
  /**
   * ### Geluidsniveau bovengrens
   *
   * **Type**: Number
   */
  geluidsniveau_bovengrens?: string;
  /**
   * ### Geluidsniveau ondergrens
   *
   * **Type**: Number
   */
  geluidsniveau_ondergrens?: string;
  /**
   * ### Geluidsniveau rijdend
   *
   * **Type**: Number
   */
  geluidsniveau_rijdend?: string;
  /**
   * ### Hybride elektrisch voertuig
   *
   * **Type**: Text
   */
  hybride_elektrisch_voertuig?: string;
  /**
   * ### Katalysator indicator
   *
   * **Type**: Text
   */
  katalysator_indicator?: string;
  /**
   * ### LPG Systeem
   *
   * **Type**: Text
   */
  lpg_systeem?: string;
  /**
   * ### Lucht injectie indicator
   *
   * **Type**: Text
   */
  lucht_injectie_indicator?: string;
  /**
   * ### Max vermogen continu bovengrens
   *
   * **Type**: Number
   */
  max_vermogen_continu_bovengrens?: string;
  /**
   * ### Max vermogen continu ondergrens
   *
   * **Type**: Number
   */
  max_vermogen_continu_ondergrens?: string;
  /**
   * ### Motor registratiedatum
   *
   * **Type**: Number
   */
  motor_registratiedatum?: string;
  /**
   * ### Motor registratiedatum_DT
   *
   * **Type**: Calendar date
   */
  motor_registratiedatum_dt?: string;
  /**
   * ### Motorcode
   *
   * **Type**: Text
   */
  motorcode?: string;
  /**
   * ### Roet uitstoot
   *
   * **Type**: Number
   */
  roet_uitstoot?: string;
  /**
   * ### Soort inspuiting motor
   *
   * **Type**: Text
   */
  soort_inspuiting_motor?: string;
  /**
   * ### Stationair toerental bovengr
   *
   * **Type**: Number
   */
  stationair_toerental_bovengr?: string;
  /**
   * ### Stationair toerental ondergr
   *
   * **Type**: Number
   */
  stationair_toerental_ondergr?: string;
  /**
   * ### Toerental geluidsniveau bovengrens
   *
   * **Type**: Number
   */
  toerental_geluidsniveau_bovengrens?: string;
  /**
   * ### Toerental geluidsniveau ondergrens
   *
   * **Type**: Number
   */
  toerental_geluidsniveau_ondergrens?: string;
  /**
   * ### Uitlaatgas circulatie indicator
   *
   * **Type**: Text
   */
  uitlaatgas_circulatie_indicator?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
  /**
   * ### Vermogen bovengrens
   *
   * **Type**: Number
   */
  vermogen_bovengrens?: string;
  /**
   * ### Vermogen ondergrens
   *
   * **Type**: Number
   */
  vermogen_ondergrens?: string;
  /**
   * ### Voertuigbrandstof type
   *
   * **Type**: Text
   */
  voertuigbrandstof_type?: string;
  /**
   * ### Volgnummer motor uitvoering
   *
   * **Type**: Number
   */
  volgnummer?: string;
  /**
   * ### Werkingsbeginsel verbrandingsmotor
   *
   * **Type**: Text
   */
  werkingsbeginsel_verbrandingsmotor?: string;
}

/**
 * Fieldnames for **MotorUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AantalCilinders`` | ``aantal_cilinders`` | _Number_ |
 * | ``Brandstofcode`` | ``brandstofcode`` | _Text_ |
 * | ``BrandstofverbruikBuitenweg`` | ``brandstofverbruik_buitenweg`` | _Number_ |
 * | ``BrandstofverbruikCombinRit`` | ``brandstofverbruik_combin_rit`` | _Number_ |
 * | ``BrandstofverbruikStadsrit`` | ``brandstofverbruik_stadsrit`` | _Number_ |
 * | ``CilinderinhoudCm3`` | ``cilinderinhoud_cm3`` | _Number_ |
 * | ``CngSysteem`` | ``cng_systeem`` | _Text_ |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``ElectromotorAfFabriekIndicator`` | ``electromotor_af_fabriek_indicator`` | _Text_ |
 * | ``EmissieCoBijKoudeStart`` | ``emissie_co_bij_koude_start`` | _Number_ |
 * | ``EmissieCo2Buitenweg`` | ``emissie_co2_buitenweg`` | _Number_ |
 * | ``EmissieCo2Combinatierit`` | ``emissie_co2_combinatierit`` | _Number_ |
 * | ``EmissieCo2Stadsrit`` | ``emissie_co2_stadsrit`` | _Number_ |
 * | ``EmissieHcBijKoudeStart`` | ``emissie_hc_bij_koude_start`` | _Number_ |
 * | ``EmissieHcEnNox`` | ``emissie_hc_en_nox`` | _Number_ |
 * | ``EmissieKoolmonoxide`` | ``emissie_koolmonoxide`` | _Number_ |
 * | ``EmissieKoolwaterstof`` | ``emissie_koolwaterstof`` | _Number_ |
 * | ``EmissieStikstofoxide`` | ``emissie_stikstofoxide`` | _Number_ |
 * | ``EmissieVasteStofdeeltjes`` | ``emissie_vaste_stofdeeltjes`` | _Number_ |
 * | ``Emissiecode`` | ``emissiecode`` | _Text_ |
 * | ``EnkelElectrischeIndicator`` | ``enkel_electrische_indicator`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``ExternOplaadbaar`` | ``extern_oplaadbaar`` | _Text_ |
 * | ``GeluidsniveauBovengrens`` | ``geluidsniveau_bovengrens`` | _Number_ |
 * | ``GeluidsniveauOndergrens`` | ``geluidsniveau_ondergrens`` | _Number_ |
 * | ``GeluidsniveauRijdend`` | ``geluidsniveau_rijdend`` | _Number_ |
 * | ``HybrideElektrischVoertuig`` | ``hybride_elektrisch_voertuig`` | _Text_ |
 * | ``KatalysatorIndicator`` | ``katalysator_indicator`` | _Text_ |
 * | ``LpgSysteem`` | ``lpg_systeem`` | _Text_ |
 * | ``LuchtInjectieIndicator`` | ``lucht_injectie_indicator`` | _Text_ |
 * | ``MaxVermogenContinuBovengrens`` | ``max_vermogen_continu_bovengrens`` | _Number_ |
 * | ``MaxVermogenContinuOndergrens`` | ``max_vermogen_continu_ondergrens`` | _Number_ |
 * | ``MotorRegistratiedatum`` | ``motor_registratiedatum`` | _Number_ |
 * | ``MotorRegistratiedatumDt`` | ``motor_registratiedatum_dt`` | _Calendar date_ |
 * | ``Motorcode`` | ``motorcode`` | _Text_ |
 * | ``RoetUitstoot`` | ``roet_uitstoot`` | _Number_ |
 * | ``SoortInspuitingMotor`` | ``soort_inspuiting_motor`` | _Text_ |
 * | ``StationairToerentalBovengr`` | ``stationair_toerental_bovengr`` | _Number_ |
 * | ``StationairToerentalOndergr`` | ``stationair_toerental_ondergr`` | _Number_ |
 * | ``ToerentalGeluidsniveauBovengrens`` | ``toerental_geluidsniveau_bovengrens`` | _Number_ |
 * | ``ToerentalGeluidsniveauOndergrens`` | ``toerental_geluidsniveau_ondergrens`` | _Number_ |
 * | ``UitlaatgasCirculatieIndicator`` | ``uitlaatgas_circulatie_indicator`` | _Text_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 * | ``VermogenBovengrens`` | ``vermogen_bovengrens`` | _Number_ |
 * | ``VermogenOndergrens`` | ``vermogen_ondergrens`` | _Number_ |
 * | ``VoertuigbrandstofType`` | ``voertuigbrandstof_type`` | _Text_ |
 * | ``Volgnummer`` | ``volgnummer`` | _Number_ |
 * | ``WerkingsbeginselVerbrandingsmotor`` | ``werkingsbeginsel_verbrandingsmotor`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Aantal cilinders
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aantal_cilinders`
  */
  AantalCilinders: Field("aantal_cilinders", DataType.Number),
  /**
  * ### Brandstofcode
  *
  * **Type**: Text
  *
  * **Database Column Name**: `brandstofcode`
  */
  Brandstofcode: Field("brandstofcode", DataType.Text),
  /**
  * ### Brandstofverbruik buitenweg
  *
  * **Type**: Number
  *
  * **Database Column Name**: `brandstofverbruik_buitenweg`
  */
  BrandstofverbruikBuitenweg: Field("brandstofverbruik_buitenweg", DataType.Number),
  /**
  * ### Brandstofverbruik combin rit
  *
  * **Type**: Number
  *
  * **Database Column Name**: `brandstofverbruik_combin_rit`
  */
  BrandstofverbruikCombinRit: Field("brandstofverbruik_combin_rit", DataType.Number),
  /**
  * ### Brandstofverbruik stadsrit
  *
  * **Type**: Number
  *
  * **Database Column Name**: `brandstofverbruik_stadsrit`
  */
  BrandstofverbruikStadsrit: Field("brandstofverbruik_stadsrit", DataType.Number),
  /**
  * ### Cilinderinhoud (cm3)
  *
  * **Type**: Number
  *
  * **Database Column Name**: `cilinderinhoud_cm3`
  */
  CilinderinhoudCm3: Field("cilinderinhoud_cm3", DataType.Number),
  /**
  * ### CNG Systeem
  *
  * **Type**: Text
  *
  * **Database Column Name**: `cng_systeem`
  */
  CngSysteem: Field("cng_systeem", DataType.Text),
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
  * ### Electromotor af fabriek indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `electromotor_af_fabriek_indicator`
  */
  ElectromotorAfFabriekIndicator: Field("electromotor_af_fabriek_indicator", DataType.Text),
  /**
  * ### Emissie co bij koude start
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_co_bij_koude_start`
  */
  EmissieCoBijKoudeStart: Field("emissie_co_bij_koude_start", DataType.Number),
  /**
  * ### Emissie co2 buitenweg
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_co2_buitenweg`
  */
  EmissieCo2Buitenweg: Field("emissie_co2_buitenweg", DataType.Number),
  /**
  * ### Emissie co2 combinatierit
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_co2_combinatierit`
  */
  EmissieCo2Combinatierit: Field("emissie_co2_combinatierit", DataType.Number),
  /**
  * ### Emissie co2 stadsrit
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_co2_stadsrit`
  */
  EmissieCo2Stadsrit: Field("emissie_co2_stadsrit", DataType.Number),
  /**
  * ### Emissie hc bij koude start
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_hc_bij_koude_start`
  */
  EmissieHcBijKoudeStart: Field("emissie_hc_bij_koude_start", DataType.Number),
  /**
  * ### Emissie hc en nox
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_hc_en_nox`
  */
  EmissieHcEnNox: Field("emissie_hc_en_nox", DataType.Number),
  /**
  * ### Emissie koolmonoxide
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_koolmonoxide`
  */
  EmissieKoolmonoxide: Field("emissie_koolmonoxide", DataType.Number),
  /**
  * ### Emissie koolwaterstof
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_koolwaterstof`
  */
  EmissieKoolwaterstof: Field("emissie_koolwaterstof", DataType.Number),
  /**
  * ### Emissie stikstofoxide
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_stikstofoxide`
  */
  EmissieStikstofoxide: Field("emissie_stikstofoxide", DataType.Number),
  /**
  * ### Emissie vaste stofdeeltjes
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_vaste_stofdeeltjes`
  */
  EmissieVasteStofdeeltjes: Field("emissie_vaste_stofdeeltjes", DataType.Number),
  /**
  * ### Emissieklasse
  *
  * **Type**: Text
  *
  * **Database Column Name**: `emissiecode`
  */
  Emissiecode: Field("emissiecode", DataType.Text),
  /**
  * ### Enkel electrische indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `enkel_electrische_indicator`
  */
  EnkelElectrischeIndicator: Field("enkel_electrische_indicator", DataType.Text),
  /**
  * ### EU Type goedkeuringssleutel
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eu_type_goedkeuringssleutel`
  */
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  /**
  * ### Extern oplaadbaar
  *
  * **Type**: Text
  *
  * **Database Column Name**: `extern_oplaadbaar`
  */
  ExternOplaadbaar: Field("extern_oplaadbaar", DataType.Text),
  /**
  * ### Geluidsniveau bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `geluidsniveau_bovengrens`
  */
  GeluidsniveauBovengrens: Field("geluidsniveau_bovengrens", DataType.Number),
  /**
  * ### Geluidsniveau ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `geluidsniveau_ondergrens`
  */
  GeluidsniveauOndergrens: Field("geluidsniveau_ondergrens", DataType.Number),
  /**
  * ### Geluidsniveau rijdend
  *
  * **Type**: Number
  *
  * **Database Column Name**: `geluidsniveau_rijdend`
  */
  GeluidsniveauRijdend: Field("geluidsniveau_rijdend", DataType.Number),
  /**
  * ### Hybride elektrisch voertuig
  *
  * **Type**: Text
  *
  * **Database Column Name**: `hybride_elektrisch_voertuig`
  */
  HybrideElektrischVoertuig: Field("hybride_elektrisch_voertuig", DataType.Text),
  /**
  * ### Katalysator indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `katalysator_indicator`
  */
  KatalysatorIndicator: Field("katalysator_indicator", DataType.Text),
  /**
  * ### LPG Systeem
  *
  * **Type**: Text
  *
  * **Database Column Name**: `lpg_systeem`
  */
  LpgSysteem: Field("lpg_systeem", DataType.Text),
  /**
  * ### Lucht injectie indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `lucht_injectie_indicator`
  */
  LuchtInjectieIndicator: Field("lucht_injectie_indicator", DataType.Text),
  /**
  * ### Max vermogen continu bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `max_vermogen_continu_bovengrens`
  */
  MaxVermogenContinuBovengrens: Field("max_vermogen_continu_bovengrens", DataType.Number),
  /**
  * ### Max vermogen continu ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `max_vermogen_continu_ondergrens`
  */
  MaxVermogenContinuOndergrens: Field("max_vermogen_continu_ondergrens", DataType.Number),
  /**
  * ### Motor registratiedatum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `motor_registratiedatum`
  */
  MotorRegistratiedatum: Field("motor_registratiedatum", DataType.Number),
  /**
  * ### Motor registratiedatum_DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `motor_registratiedatum_dt`
  */
  MotorRegistratiedatumDt: Field("motor_registratiedatum_dt", DataType.FloatingTimestamp),
  /**
  * ### Motorcode
  *
  * **Type**: Text
  *
  * **Database Column Name**: `motorcode`
  */
  Motorcode: Field("motorcode", DataType.Text),
  /**
  * ### Roet uitstoot
  *
  * **Type**: Number
  *
  * **Database Column Name**: `roet_uitstoot`
  */
  RoetUitstoot: Field("roet_uitstoot", DataType.Number),
  /**
  * ### Soort inspuiting motor
  *
  * **Type**: Text
  *
  * **Database Column Name**: `soort_inspuiting_motor`
  */
  SoortInspuitingMotor: Field("soort_inspuiting_motor", DataType.Text),
  /**
  * ### Stationair toerental bovengr
  *
  * **Type**: Number
  *
  * **Database Column Name**: `stationair_toerental_bovengr`
  */
  StationairToerentalBovengr: Field("stationair_toerental_bovengr", DataType.Number),
  /**
  * ### Stationair toerental ondergr
  *
  * **Type**: Number
  *
  * **Database Column Name**: `stationair_toerental_ondergr`
  */
  StationairToerentalOndergr: Field("stationair_toerental_ondergr", DataType.Number),
  /**
  * ### Toerental geluidsniveau bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `toerental_geluidsniveau_bovengrens`
  */
  ToerentalGeluidsniveauBovengrens: Field("toerental_geluidsniveau_bovengrens", DataType.Number),
  /**
  * ### Toerental geluidsniveau ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `toerental_geluidsniveau_ondergrens`
  */
  ToerentalGeluidsniveauOndergrens: Field("toerental_geluidsniveau_ondergrens", DataType.Number),
  /**
  * ### Uitlaatgas circulatie indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `uitlaatgas_circulatie_indicator`
  */
  UitlaatgasCirculatieIndicator: Field("uitlaatgas_circulatie_indicator", DataType.Text),
  /**
  * ### Uitvoering wijzigingsnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `uitvoering_wijzigingsnummer`
  */
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
  /**
  * ### Vermogen bovengrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `vermogen_bovengrens`
  */
  VermogenBovengrens: Field("vermogen_bovengrens", DataType.Number),
  /**
  * ### Vermogen ondergrens
  *
  * **Type**: Number
  *
  * **Database Column Name**: `vermogen_ondergrens`
  */
  VermogenOndergrens: Field("vermogen_ondergrens", DataType.Number),
  /**
  * ### Voertuigbrandstof type
  *
  * **Type**: Text
  *
  * **Database Column Name**: `voertuigbrandstof_type`
  */
  VoertuigbrandstofType: Field("voertuigbrandstof_type", DataType.Text),
  /**
  * ### Volgnummer motor uitvoering
  *
  * **Type**: Number
  *
  * **Database Column Name**: `volgnummer`
  */
  Volgnummer: Field("volgnummer", DataType.Number),
  /**
  * ### Werkingsbeginsel verbrandingsmotor
  *
  * **Type**: Text
  *
  * **Database Column Name**: `werkingsbeginsel_verbrandingsmotor`
  */
  WerkingsbeginselVerbrandingsmotor: Field("werkingsbeginsel_verbrandingsmotor", DataType.Text),
};

export const Info = {
  fields: [
    "AantalCilinders",
    "Brandstofcode",
    "BrandstofverbruikBuitenweg",
    "BrandstofverbruikCombinRit",
    "BrandstofverbruikStadsrit",
    "CilinderinhoudCm3",
    "CngSysteem",
    "EegUitvoeringscode",
    "EegVariantcode",
    "ElectromotorAfFabriekIndicator",
    "EmissieCoBijKoudeStart",
    "EmissieCo2Buitenweg",
    "EmissieCo2Combinatierit",
    "EmissieCo2Stadsrit",
    "EmissieHcBijKoudeStart",
    "EmissieHcEnNox",
    "EmissieKoolmonoxide",
    "EmissieKoolwaterstof",
    "EmissieStikstofoxide",
    "EmissieVasteStofdeeltjes",
    "Emissiecode",
    "EnkelElectrischeIndicator",
    "EuTypeGoedkeuringssleutel",
    "ExternOplaadbaar",
    "GeluidsniveauBovengrens",
    "GeluidsniveauOndergrens",
    "GeluidsniveauRijdend",
    "HybrideElektrischVoertuig",
    "KatalysatorIndicator",
    "LpgSysteem",
    "LuchtInjectieIndicator",
    "MaxVermogenContinuBovengrens",
    "MaxVermogenContinuOndergrens",
    "MotorRegistratiedatum",
    "MotorRegistratiedatumDt",
    "Motorcode",
    "RoetUitstoot",
    "SoortInspuitingMotor",
    "StationairToerentalBovengr",
    "StationairToerentalOndergr",
    "ToerentalGeluidsniveauBovengrens",
    "ToerentalGeluidsniveauOndergrens",
    "UitlaatgasCirculatieIndicator",
    "UitvoeringWijzigingsnummer",
    "VermogenBovengrens",
    "VermogenOndergrens",
    "VoertuigbrandstofType",
    "Volgnummer",
    "WerkingsbeginselVerbrandingsmotor",
  ],
  dataset: "g2s6-ehxa",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Motor Uitvoering",
  provider_name: "MotorUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering/g2s6-ehxa",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/g2s6-ehxa",
}

/**
 * ### Open Data RDW: Motor Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering/g2s6-ehxa
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/g2s6-ehxa
 *
 * **Dataset ID:** g2s6-ehxa
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Motor Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.AantalCilinders, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<MotorUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const MotorUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<MotorUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
