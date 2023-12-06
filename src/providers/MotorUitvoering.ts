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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Motor Uitvoering
 */
export interface ResponseData {
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
export interface IFields {
  /**
   * ### Aantal cilinders
   *
   * **Type**: Number
   */
   AantalCilinders: FieldObject<DataType.Number>;
  /**
   * ### Brandstofcode
   *
   * **Type**: Text
   */
   Brandstofcode: FieldObject<DataType.Text>;
  /**
   * ### Brandstofverbruik buitenweg
   *
   * **Type**: Number
   */
   BrandstofverbruikBuitenweg: FieldObject<DataType.Number>;
  /**
   * ### Brandstofverbruik combin rit
   *
   * **Type**: Number
   */
   BrandstofverbruikCombinRit: FieldObject<DataType.Number>;
  /**
   * ### Brandstofverbruik stadsrit
   *
   * **Type**: Number
   */
   BrandstofverbruikStadsrit: FieldObject<DataType.Number>;
  /**
   * ### Cilinderinhoud (cm3)
   *
   * **Type**: Number
   */
   CilinderinhoudCm3: FieldObject<DataType.Number>;
  /**
   * ### CNG Systeem
   *
   * **Type**: Text
   */
   CngSysteem: FieldObject<DataType.Text>;
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
   * ### Electromotor af fabriek indicator
   *
   * **Type**: Text
   */
   ElectromotorAfFabriekIndicator: FieldObject<DataType.Text>;
  /**
   * ### Emissie co bij koude start
   *
   * **Type**: Number
   */
   EmissieCoBijKoudeStart: FieldObject<DataType.Number>;
  /**
   * ### Emissie co2 buitenweg
   *
   * **Type**: Number
   */
   EmissieCo2Buitenweg: FieldObject<DataType.Number>;
  /**
   * ### Emissie co2 combinatierit
   *
   * **Type**: Number
   */
   EmissieCo2Combinatierit: FieldObject<DataType.Number>;
  /**
   * ### Emissie co2 stadsrit
   *
   * **Type**: Number
   */
   EmissieCo2Stadsrit: FieldObject<DataType.Number>;
  /**
   * ### Emissie hc bij koude start
   *
   * **Type**: Number
   */
   EmissieHcBijKoudeStart: FieldObject<DataType.Number>;
  /**
   * ### Emissie hc en nox
   *
   * **Type**: Number
   */
   EmissieHcEnNox: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolmonoxide
   *
   * **Type**: Number
   */
   EmissieKoolmonoxide: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolwaterstof
   *
   * **Type**: Number
   */
   EmissieKoolwaterstof: FieldObject<DataType.Number>;
  /**
   * ### Emissie stikstofoxide
   *
   * **Type**: Number
   */
   EmissieStikstofoxide: FieldObject<DataType.Number>;
  /**
   * ### Emissie vaste stofdeeltjes
   *
   * **Type**: Number
   */
   EmissieVasteStofdeeltjes: FieldObject<DataType.Number>;
  /**
   * ### Emissieklasse
   *
   * **Type**: Text
   */
   Emissiecode: FieldObject<DataType.Text>;
  /**
   * ### Enkel electrische indicator
   *
   * **Type**: Text
   */
   EnkelElectrischeIndicator: FieldObject<DataType.Text>;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
   EuTypeGoedkeuringssleutel: FieldObject<DataType.Text>;
  /**
   * ### Extern oplaadbaar
   *
   * **Type**: Text
   */
   ExternOplaadbaar: FieldObject<DataType.Text>;
  /**
   * ### Geluidsniveau bovengrens
   *
   * **Type**: Number
   */
   GeluidsniveauBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Geluidsniveau ondergrens
   *
   * **Type**: Number
   */
   GeluidsniveauOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Geluidsniveau rijdend
   *
   * **Type**: Number
   */
   GeluidsniveauRijdend: FieldObject<DataType.Number>;
  /**
   * ### Hybride elektrisch voertuig
   *
   * **Type**: Text
   */
   HybrideElektrischVoertuig: FieldObject<DataType.Text>;
  /**
   * ### Katalysator indicator
   *
   * **Type**: Text
   */
   KatalysatorIndicator: FieldObject<DataType.Text>;
  /**
   * ### LPG Systeem
   *
   * **Type**: Text
   */
   LpgSysteem: FieldObject<DataType.Text>;
  /**
   * ### Lucht injectie indicator
   *
   * **Type**: Text
   */
   LuchtInjectieIndicator: FieldObject<DataType.Text>;
  /**
   * ### Max vermogen continu bovengrens
   *
   * **Type**: Number
   */
   MaxVermogenContinuBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max vermogen continu ondergrens
   *
   * **Type**: Number
   */
   MaxVermogenContinuOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Motor registratiedatum
   *
   * **Type**: Number
   */
   MotorRegistratiedatum: FieldObject<DataType.Number>;
  /**
   * ### Motor registratiedatum_DT
   *
   * **Type**: Calendar date
   */
   MotorRegistratiedatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Motorcode
   *
   * **Type**: Text
   */
   Motorcode: FieldObject<DataType.Text>;
  /**
   * ### Roet uitstoot
   *
   * **Type**: Number
   */
   RoetUitstoot: FieldObject<DataType.Number>;
  /**
   * ### Soort inspuiting motor
   *
   * **Type**: Text
   */
   SoortInspuitingMotor: FieldObject<DataType.Text>;
  /**
   * ### Stationair toerental bovengr
   *
   * **Type**: Number
   */
   StationairToerentalBovengr: FieldObject<DataType.Number>;
  /**
   * ### Stationair toerental ondergr
   *
   * **Type**: Number
   */
   StationairToerentalOndergr: FieldObject<DataType.Number>;
  /**
   * ### Toerental geluidsniveau bovengrens
   *
   * **Type**: Number
   */
   ToerentalGeluidsniveauBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Toerental geluidsniveau ondergrens
   *
   * **Type**: Number
   */
   ToerentalGeluidsniveauOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Uitlaatgas circulatie indicator
   *
   * **Type**: Text
   */
   UitlaatgasCirculatieIndicator: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
   UitvoeringWijzigingsnummer: FieldObject<DataType.Number>;
  /**
   * ### Vermogen bovengrens
   *
   * **Type**: Number
   */
   VermogenBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Vermogen ondergrens
   *
   * **Type**: Number
   */
   VermogenOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Voertuigbrandstof type
   *
   * **Type**: Text
   */
   VoertuigbrandstofType: FieldObject<DataType.Text>;
  /**
   * ### Volgnummer motor uitvoering
   *
   * **Type**: Number
   */
   Volgnummer: FieldObject<DataType.Number>;
  /**
   * ### Werkingsbeginsel verbrandingsmotor
   *
   * **Type**: Text
   */
   WerkingsbeginselVerbrandingsmotor: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  AantalCilinders: Field("aantal_cilinders", DataType.Number),
  Brandstofcode: Field("brandstofcode", DataType.Text),
  BrandstofverbruikBuitenweg: Field("brandstofverbruik_buitenweg", DataType.Number),
  BrandstofverbruikCombinRit: Field("brandstofverbruik_combin_rit", DataType.Number),
  BrandstofverbruikStadsrit: Field("brandstofverbruik_stadsrit", DataType.Number),
  CilinderinhoudCm3: Field("cilinderinhoud_cm3", DataType.Number),
  CngSysteem: Field("cng_systeem", DataType.Text),
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  ElectromotorAfFabriekIndicator: Field("electromotor_af_fabriek_indicator", DataType.Text),
  EmissieCoBijKoudeStart: Field("emissie_co_bij_koude_start", DataType.Number),
  EmissieCo2Buitenweg: Field("emissie_co2_buitenweg", DataType.Number),
  EmissieCo2Combinatierit: Field("emissie_co2_combinatierit", DataType.Number),
  EmissieCo2Stadsrit: Field("emissie_co2_stadsrit", DataType.Number),
  EmissieHcBijKoudeStart: Field("emissie_hc_bij_koude_start", DataType.Number),
  EmissieHcEnNox: Field("emissie_hc_en_nox", DataType.Number),
  EmissieKoolmonoxide: Field("emissie_koolmonoxide", DataType.Number),
  EmissieKoolwaterstof: Field("emissie_koolwaterstof", DataType.Number),
  EmissieStikstofoxide: Field("emissie_stikstofoxide", DataType.Number),
  EmissieVasteStofdeeltjes: Field("emissie_vaste_stofdeeltjes", DataType.Number),
  Emissiecode: Field("emissiecode", DataType.Text),
  EnkelElectrischeIndicator: Field("enkel_electrische_indicator", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  ExternOplaadbaar: Field("extern_oplaadbaar", DataType.Text),
  GeluidsniveauBovengrens: Field("geluidsniveau_bovengrens", DataType.Number),
  GeluidsniveauOndergrens: Field("geluidsniveau_ondergrens", DataType.Number),
  GeluidsniveauRijdend: Field("geluidsniveau_rijdend", DataType.Number),
  HybrideElektrischVoertuig: Field("hybride_elektrisch_voertuig", DataType.Text),
  KatalysatorIndicator: Field("katalysator_indicator", DataType.Text),
  LpgSysteem: Field("lpg_systeem", DataType.Text),
  LuchtInjectieIndicator: Field("lucht_injectie_indicator", DataType.Text),
  MaxVermogenContinuBovengrens: Field("max_vermogen_continu_bovengrens", DataType.Number),
  MaxVermogenContinuOndergrens: Field("max_vermogen_continu_ondergrens", DataType.Number),
  MotorRegistratiedatum: Field("motor_registratiedatum", DataType.Number),
  MotorRegistratiedatumDt: Field("motor_registratiedatum_dt", DataType.FloatingTimestamp),
  Motorcode: Field("motorcode", DataType.Text),
  RoetUitstoot: Field("roet_uitstoot", DataType.Number),
  SoortInspuitingMotor: Field("soort_inspuiting_motor", DataType.Text),
  StationairToerentalBovengr: Field("stationair_toerental_bovengr", DataType.Number),
  StationairToerentalOndergr: Field("stationair_toerental_ondergr", DataType.Number),
  ToerentalGeluidsniveauBovengrens: Field("toerental_geluidsniveau_bovengrens", DataType.Number),
  ToerentalGeluidsniveauOndergrens: Field("toerental_geluidsniveau_ondergrens", DataType.Number),
  UitlaatgasCirculatieIndicator: Field("uitlaatgas_circulatie_indicator", DataType.Text),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
  VermogenBovengrens: Field("vermogen_bovengrens", DataType.Number),
  VermogenOndergrens: Field("vermogen_ondergrens", DataType.Number),
  VoertuigbrandstofType: Field("voertuigbrandstof_type", DataType.Text),
  Volgnummer: Field("volgnummer", DataType.Number),
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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
