// *******************************************************
//
// Name: Open Data RDW: Motor Uitvoering Brandstof
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering-Brandstof/5w6t-p66a
// Permalink: https://opendata.rdw.nl/d/5w6t-p66a
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Motor Uitvoering Brandstof
 */
export interface ResponseData {
  /**
   * ### Actieradius brandstof
   *
   * **Type**: Number
   */
  actieradius_brandstof?: string;
  /**
   * ### Actieradius brandstof extern oplaadbaar
   *
   * **Type**: Number
   */
  actieradius_brandstof_extern_oplaadbaar?: string;
  /**
   * ### Brandstof volgnummer
   *
   * **Type**: Number
   */
  brandstof_volgnummer?: string;
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
   * ### Elektrisch verbruik combinatie
   *
   * **Type**: Number
   */
  elektrisch_verbruik_combinatie?: string;
  /**
   * ### Elektrisch verbruik gecomb
   *
   * **Type**: Number
   */
  elektrisch_verbruik_gecomb?: string;
  /**
   * ### Emissie aant deeltjes esc test
   *
   * **Type**: Number
   */
  emissie_aant_deeltjes_esc_test?: string;
  /**
   * ### Emissie aant deeltjes etc test
   *
   * **Type**: Number
   */
  emissie_aant_deeltjes_etc_test?: string;
  /**
   * ### Emissie aant deeltjes t1 test
   *
   * **Type**: Number
   */
  emissie_aant_deeltjes_t1_test?: string;
  /**
   * ### Emissie ch4 volgens whsc
   *
   * **Type**: Number
   */
  emissie_ch4_volgens_whsc?: string;
  /**
   * ### Emissie ch4 volgens whtc
   *
   * **Type**: Number
   */
  emissie_ch4_volgens_whtc?: string;
  /**
   * ### Emissie co bij koude start
   *
   * **Type**: Number
   */
  emissie_co_bij_koude_start?: string;
  /**
   * ### Emissie co volgens whsc
   *
   * **Type**: Number
   */
  emissie_co_volgens_whsc?: string;
  /**
   * ### Emissie co volgens whtc
   *
   * **Type**: Number
   */
  emissie_co_volgens_whtc?: string;
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
   * ### Emissie co2 gecombineerd
   *
   * **Type**: Number
   */
  emissie_co2_gecombineerd?: string;
  /**
   * ### Emissie co2 stadsrit
   *
   * **Type**: Number
   */
  emissie_co2_stadsrit?: string;
  /**
   * ### Emissie deeltjes aantal whsc
   *
   * **Type**: Number
   */
  emissie_deeltjes_aantal_whsc?: string;
  /**
   * ### Emissie deeltjes aantal whtc
   *
   * **Type**: Number
   */
  emissie_deeltjes_aantal_whtc?: string;
  /**
   * ### Emissie deeltjes massa whsc
   *
   * **Type**: Number
   */
  emissie_deeltjes_massa_whsc?: string;
  /**
   * ### Emissie deeltjes massa whtc
   *
   * **Type**: Number
   */
  emissie_deeltjes_massa_whtc?: string;
  /**
   * ### Emissie hc bij koude start
   *
   * **Type**: Number
   */
  emissie_hc_bij_koude_start?: string;
  /**
   * ### Emissie hc en nox type1
   *
   * **Type**: Number
   */
  emissie_hc_en_nox_type1?: string;
  /**
   * ### Emissie koolmonaxide etc test
   *
   * **Type**: Number
   */
  emissie_koolmonaxide_etc_test?: string;
  /**
   * ### Emissie koolmonoxide esc test
   *
   * **Type**: Number
   */
  emissie_koolmonoxide_esc_test?: string;
  /**
   * ### Emissie koolmonoxide type 1
   *
   * **Type**: Number
   */
  emissie_koolmonoxide_type_1?: string;
  /**
   * ### Emissie koolwaterstof type 1
   *
   * **Type**: Number
   */
  emissie_koolwaterstof_type_1?: string;
  /**
   * ### Emissie koolwaterstoffen esc test
   *
   * **Type**: Number
   */
  emissie_koolwaterstoffen_esc_test?: string;
  /**
   * ### Emissie koolwaterstoffen etc test
   *
   * **Type**: Number
   */
  emissie_koolwaterstoffen_etc_test?: string;
  /**
   * ### Emissie methaan etc test
   *
   * **Type**: Number
   */
  emissie_methaan_etc_test?: string;
  /**
   * ### Emissie nh3 volgens whsc
   *
   * **Type**: Number
   */
  emissie_nh3_volgens_whsc?: string;
  /**
   * ### Emissie nh3 volgens whtc
   *
   * **Type**: Number
   */
  emissie_nh3_volgens_whtc?: string;
  /**
   * ### Emissie nmhc volgens whsc
   *
   * **Type**: Number
   */
  emissie_nmhc_volgens_whsc?: string;
  /**
   * ### Emissie nmhc volgens whtc
   *
   * **Type**: Number
   */
  emissie_nmhc_volgens_whtc?: string;
  /**
   * ### Emissie non methaan koolw etc test
   *
   * **Type**: Number
   */
  emissie_non_methaan_koolw_etc_test?: string;
  /**
   * ### Emissie nox volgens whsc
   *
   * **Type**: Number
   */
  emissie_nox_volgens_whsc?: string;
  /**
   * ### Emissie nox volgens whtc
   *
   * **Type**: Number
   */
  emissie_nox_volgens_whtc?: string;
  /**
   * ### Emissie stikstofoxide type 1
   *
   * **Type**: Number
   */
  emissie_stikstofoxide_type_1?: string;
  /**
   * ### Emissie stikstofoxiden esc test
   *
   * **Type**: Number
   */
  emissie_stikstofoxiden_esc_test?: string;
  /**
   * ### Emissie stikstofoxiden etc test
   *
   * **Type**: Number
   */
  emissie_stikstofoxiden_etc_test?: string;
  /**
   * ### Emissie thc volgens whsc
   *
   * **Type**: Number
   */
  emissie_thc_volgens_whsc?: string;
  /**
   * ### Emissie thc volgens whtc
   *
   * **Type**: Number
   */
  emissie_thc_volgens_whtc?: string;
  /**
   * ### Emissie vaste stofdeeltjes
   *
   * **Type**: Number
   */
  emissie_vaste_stofdeeltjes?: string;
  /**
   * ### Emissie vaste stofdeeltjes esc test
   *
   * **Type**: Number
   */
  emissie_vaste_stofdeeltjes_esc_test?: string;
  /**
   * ### Emissie vaste stofdeeltjes etc test
   *
   * **Type**: Number
   */
  emissie_vaste_stofdeeltjes_etc_test?: string;
  /**
   * ### Emissieklasse
   *
   * **Type**: Text
   */
  emissiecode?: string;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  eu_type_goedkeuringssleutel?: string;
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
   * ### Maximale biobrandstof percentage
   *
   * **Type**: Number
   */
  maximale_biobrandstof_percentage?: string;
  /**
   * ### Netto max vermogen bovengrens
   *
   * **Type**: Number
   */
  netto_max_vermogen_bovengrens?: string;
  /**
   * ### Netto max vermogen ondergrens
   *
   * **Type**: Number
   */
  netto_max_vermogen_ondergrens?: string;
  /**
   * ### Roet uitstoot acc
   *
   * **Type**: Number
   */
  roet_uitstoot_acc?: string;
  /**
   * ### Rookwaarde elr test
   *
   * **Type**: Number
   */
  rookwaarde_elr_test?: string;
  /**
   * ### Soort inspuiting motor
   *
   * **Type**: Text
   */
  soort_inspuiting_motor?: string;
  /**
   * ### Station toerental bovengrens acc
   *
   * **Type**: Number
   */
  station_toerental_bovengrens_acc?: string;
  /**
   * ### Station toerental ondergrens acc
   *
   * **Type**: Number
   */
  station_toerental_ondergrens_acc?: string;
  /**
   * ### Toerental max vermogen bovengrens
   *
   * **Type**: Number
   */
  toerental_max_vermogen_bovengrens?: string;
  /**
   * ### Toerental max vermogen ondergrens
   *
   * **Type**: Number
   */
  toerental_max_vermogen_ondergrens?: string;
  /**
   * ### Uitlaatgas circulatie indicator
   *
   * **Type**: Text
   */
  uitlaatgas_circulatie_indicator?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Text
   */
  uitvoering_wijzigingsnummer?: string;
  /**
   * ### Verbruik gecombineerd
   *
   * **Type**: Number
   */
  verbruik_gecombineerd?: string;
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
   * ### Volgnummer
   *
   * **Type**: Number
   */
  volgnummer?: string;
}

/**
 * Fieldnames for **MotorUitvoeringBrandstof**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``ActieradiusBrandstof`` | ``actieradius_brandstof`` | _Number_ |
 * | ``ActieradiusBrandstofExternOplaadbaar`` | ``actieradius_brandstof_extern_oplaadbaar`` | _Number_ |
 * | ``BrandstofVolgnummer`` | ``brandstof_volgnummer`` | _Number_ |
 * | ``Brandstofcode`` | ``brandstofcode`` | _Text_ |
 * | ``BrandstofverbruikBuitenweg`` | ``brandstofverbruik_buitenweg`` | _Number_ |
 * | ``BrandstofverbruikCombinRit`` | ``brandstofverbruik_combin_rit`` | _Number_ |
 * | ``BrandstofverbruikStadsrit`` | ``brandstofverbruik_stadsrit`` | _Number_ |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``ElektrischVerbruikCombinatie`` | ``elektrisch_verbruik_combinatie`` | _Number_ |
 * | ``ElektrischVerbruikGecomb`` | ``elektrisch_verbruik_gecomb`` | _Number_ |
 * | ``EmissieAantDeeltjesEscTest`` | ``emissie_aant_deeltjes_esc_test`` | _Number_ |
 * | ``EmissieAantDeeltjesEtcTest`` | ``emissie_aant_deeltjes_etc_test`` | _Number_ |
 * | ``EmissieAantDeeltjesT1Test`` | ``emissie_aant_deeltjes_t1_test`` | _Number_ |
 * | ``EmissieCh4VolgensWhsc`` | ``emissie_ch4_volgens_whsc`` | _Number_ |
 * | ``EmissieCh4VolgensWhtc`` | ``emissie_ch4_volgens_whtc`` | _Number_ |
 * | ``EmissieCoBijKoudeStart`` | ``emissie_co_bij_koude_start`` | _Number_ |
 * | ``EmissieCoVolgensWhsc`` | ``emissie_co_volgens_whsc`` | _Number_ |
 * | ``EmissieCoVolgensWhtc`` | ``emissie_co_volgens_whtc`` | _Number_ |
 * | ``EmissieCo2Buitenweg`` | ``emissie_co2_buitenweg`` | _Number_ |
 * | ``EmissieCo2Combinatierit`` | ``emissie_co2_combinatierit`` | _Number_ |
 * | ``EmissieCo2Gecombineerd`` | ``emissie_co2_gecombineerd`` | _Number_ |
 * | ``EmissieCo2Stadsrit`` | ``emissie_co2_stadsrit`` | _Number_ |
 * | ``EmissieDeeltjesAantalWhsc`` | ``emissie_deeltjes_aantal_whsc`` | _Number_ |
 * | ``EmissieDeeltjesAantalWhtc`` | ``emissie_deeltjes_aantal_whtc`` | _Number_ |
 * | ``EmissieDeeltjesMassaWhsc`` | ``emissie_deeltjes_massa_whsc`` | _Number_ |
 * | ``EmissieDeeltjesMassaWhtc`` | ``emissie_deeltjes_massa_whtc`` | _Number_ |
 * | ``EmissieHcBijKoudeStart`` | ``emissie_hc_bij_koude_start`` | _Number_ |
 * | ``EmissieHcEnNoxType1`` | ``emissie_hc_en_nox_type1`` | _Number_ |
 * | ``EmissieKoolmonaxideEtcTest`` | ``emissie_koolmonaxide_etc_test`` | _Number_ |
 * | ``EmissieKoolmonoxideEscTest`` | ``emissie_koolmonoxide_esc_test`` | _Number_ |
 * | ``EmissieKoolmonoxideType1`` | ``emissie_koolmonoxide_type_1`` | _Number_ |
 * | ``EmissieKoolwaterstofType1`` | ``emissie_koolwaterstof_type_1`` | _Number_ |
 * | ``EmissieKoolwaterstoffenEscTest`` | ``emissie_koolwaterstoffen_esc_test`` | _Number_ |
 * | ``EmissieKoolwaterstoffenEtcTest`` | ``emissie_koolwaterstoffen_etc_test`` | _Number_ |
 * | ``EmissieMethaanEtcTest`` | ``emissie_methaan_etc_test`` | _Number_ |
 * | ``EmissieNh3VolgensWhsc`` | ``emissie_nh3_volgens_whsc`` | _Number_ |
 * | ``EmissieNh3VolgensWhtc`` | ``emissie_nh3_volgens_whtc`` | _Number_ |
 * | ``EmissieNmhcVolgensWhsc`` | ``emissie_nmhc_volgens_whsc`` | _Number_ |
 * | ``EmissieNmhcVolgensWhtc`` | ``emissie_nmhc_volgens_whtc`` | _Number_ |
 * | ``EmissieNonMethaanKoolwEtcTest`` | ``emissie_non_methaan_koolw_etc_test`` | _Number_ |
 * | ``EmissieNoxVolgensWhsc`` | ``emissie_nox_volgens_whsc`` | _Number_ |
 * | ``EmissieNoxVolgensWhtc`` | ``emissie_nox_volgens_whtc`` | _Number_ |
 * | ``EmissieStikstofoxideType1`` | ``emissie_stikstofoxide_type_1`` | _Number_ |
 * | ``EmissieStikstofoxidenEscTest`` | ``emissie_stikstofoxiden_esc_test`` | _Number_ |
 * | ``EmissieStikstofoxidenEtcTest`` | ``emissie_stikstofoxiden_etc_test`` | _Number_ |
 * | ``EmissieThcVolgensWhsc`` | ``emissie_thc_volgens_whsc`` | _Number_ |
 * | ``EmissieThcVolgensWhtc`` | ``emissie_thc_volgens_whtc`` | _Number_ |
 * | ``EmissieVasteStofdeeltjes`` | ``emissie_vaste_stofdeeltjes`` | _Number_ |
 * | ``EmissieVasteStofdeeltjesEscTest`` | ``emissie_vaste_stofdeeltjes_esc_test`` | _Number_ |
 * | ``EmissieVasteStofdeeltjesEtcTest`` | ``emissie_vaste_stofdeeltjes_etc_test`` | _Number_ |
 * | ``Emissiecode`` | ``emissiecode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``GeluidsniveauBovengrens`` | ``geluidsniveau_bovengrens`` | _Number_ |
 * | ``GeluidsniveauOndergrens`` | ``geluidsniveau_ondergrens`` | _Number_ |
 * | ``GeluidsniveauRijdend`` | ``geluidsniveau_rijdend`` | _Number_ |
 * | ``LuchtInjectieIndicator`` | ``lucht_injectie_indicator`` | _Text_ |
 * | ``MaxVermogenContinuBovengrens`` | ``max_vermogen_continu_bovengrens`` | _Number_ |
 * | ``MaxVermogenContinuOndergrens`` | ``max_vermogen_continu_ondergrens`` | _Number_ |
 * | ``MaximaleBiobrandstofPercentage`` | ``maximale_biobrandstof_percentage`` | _Number_ |
 * | ``NettoMaxVermogenBovengrens`` | ``netto_max_vermogen_bovengrens`` | _Number_ |
 * | ``NettoMaxVermogenOndergrens`` | ``netto_max_vermogen_ondergrens`` | _Number_ |
 * | ``RoetUitstootAcc`` | ``roet_uitstoot_acc`` | _Number_ |
 * | ``RookwaardeElrTest`` | ``rookwaarde_elr_test`` | _Number_ |
 * | ``SoortInspuitingMotor`` | ``soort_inspuiting_motor`` | _Text_ |
 * | ``StationToerentalBovengrensAcc`` | ``station_toerental_bovengrens_acc`` | _Number_ |
 * | ``StationToerentalOndergrensAcc`` | ``station_toerental_ondergrens_acc`` | _Number_ |
 * | ``ToerentalMaxVermogenBovengrens`` | ``toerental_max_vermogen_bovengrens`` | _Number_ |
 * | ``ToerentalMaxVermogenOndergrens`` | ``toerental_max_vermogen_ondergrens`` | _Number_ |
 * | ``UitlaatgasCirculatieIndicator`` | ``uitlaatgas_circulatie_indicator`` | _Text_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Text_ |
 * | ``VerbruikGecombineerd`` | ``verbruik_gecombineerd`` | _Number_ |
 * | ``VermogenBovengrens`` | ``vermogen_bovengrens`` | _Number_ |
 * | ``VermogenOndergrens`` | ``vermogen_ondergrens`` | _Number_ |
 * | ``Volgnummer`` | ``volgnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Actieradius brandstof
   *
   * **Type**: Number
   */
  ActieradiusBrandstof: FieldObject<DataType.Number>;
  /**
   * ### Actieradius brandstof extern oplaadbaar
   *
   * **Type**: Number
   */
  ActieradiusBrandstofExternOplaadbaar: FieldObject<DataType.Number>;
  /**
   * ### Brandstof volgnummer
   *
   * **Type**: Number
   */
  BrandstofVolgnummer: FieldObject<DataType.Number>;
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
   * ### Elektrisch verbruik combinatie
   *
   * **Type**: Number
   */
  ElektrischVerbruikCombinatie: FieldObject<DataType.Number>;
  /**
   * ### Elektrisch verbruik gecomb
   *
   * **Type**: Number
   */
  ElektrischVerbruikGecomb: FieldObject<DataType.Number>;
  /**
   * ### Emissie aant deeltjes esc test
   *
   * **Type**: Number
   */
  EmissieAantDeeltjesEscTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie aant deeltjes etc test
   *
   * **Type**: Number
   */
  EmissieAantDeeltjesEtcTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie aant deeltjes t1 test
   *
   * **Type**: Number
   */
  EmissieAantDeeltjesT1Test: FieldObject<DataType.Number>;
  /**
   * ### Emissie ch4 volgens whsc
   *
   * **Type**: Number
   */
  EmissieCh4VolgensWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie ch4 volgens whtc
   *
   * **Type**: Number
   */
  EmissieCh4VolgensWhtc: FieldObject<DataType.Number>;
  /**
   * ### Emissie co bij koude start
   *
   * **Type**: Number
   */
  EmissieCoBijKoudeStart: FieldObject<DataType.Number>;
  /**
   * ### Emissie co volgens whsc
   *
   * **Type**: Number
   */
  EmissieCoVolgensWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie co volgens whtc
   *
   * **Type**: Number
   */
  EmissieCoVolgensWhtc: FieldObject<DataType.Number>;
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
   * ### Emissie co2 gecombineerd
   *
   * **Type**: Number
   */
  EmissieCo2Gecombineerd: FieldObject<DataType.Number>;
  /**
   * ### Emissie co2 stadsrit
   *
   * **Type**: Number
   */
  EmissieCo2Stadsrit: FieldObject<DataType.Number>;
  /**
   * ### Emissie deeltjes aantal whsc
   *
   * **Type**: Number
   */
  EmissieDeeltjesAantalWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie deeltjes aantal whtc
   *
   * **Type**: Number
   */
  EmissieDeeltjesAantalWhtc: FieldObject<DataType.Number>;
  /**
   * ### Emissie deeltjes massa whsc
   *
   * **Type**: Number
   */
  EmissieDeeltjesMassaWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie deeltjes massa whtc
   *
   * **Type**: Number
   */
  EmissieDeeltjesMassaWhtc: FieldObject<DataType.Number>;
  /**
   * ### Emissie hc bij koude start
   *
   * **Type**: Number
   */
  EmissieHcBijKoudeStart: FieldObject<DataType.Number>;
  /**
   * ### Emissie hc en nox type1
   *
   * **Type**: Number
   */
  EmissieHcEnNoxType1: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolmonaxide etc test
   *
   * **Type**: Number
   */
  EmissieKoolmonaxideEtcTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolmonoxide esc test
   *
   * **Type**: Number
   */
  EmissieKoolmonoxideEscTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolmonoxide type 1
   *
   * **Type**: Number
   */
  EmissieKoolmonoxideType1: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolwaterstof type 1
   *
   * **Type**: Number
   */
  EmissieKoolwaterstofType1: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolwaterstoffen esc test
   *
   * **Type**: Number
   */
  EmissieKoolwaterstoffenEscTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie koolwaterstoffen etc test
   *
   * **Type**: Number
   */
  EmissieKoolwaterstoffenEtcTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie methaan etc test
   *
   * **Type**: Number
   */
  EmissieMethaanEtcTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie nh3 volgens whsc
   *
   * **Type**: Number
   */
  EmissieNh3VolgensWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie nh3 volgens whtc
   *
   * **Type**: Number
   */
  EmissieNh3VolgensWhtc: FieldObject<DataType.Number>;
  /**
   * ### Emissie nmhc volgens whsc
   *
   * **Type**: Number
   */
  EmissieNmhcVolgensWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie nmhc volgens whtc
   *
   * **Type**: Number
   */
  EmissieNmhcVolgensWhtc: FieldObject<DataType.Number>;
  /**
   * ### Emissie non methaan koolw etc test
   *
   * **Type**: Number
   */
  EmissieNonMethaanKoolwEtcTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie nox volgens whsc
   *
   * **Type**: Number
   */
  EmissieNoxVolgensWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie nox volgens whtc
   *
   * **Type**: Number
   */
  EmissieNoxVolgensWhtc: FieldObject<DataType.Number>;
  /**
   * ### Emissie stikstofoxide type 1
   *
   * **Type**: Number
   */
  EmissieStikstofoxideType1: FieldObject<DataType.Number>;
  /**
   * ### Emissie stikstofoxiden esc test
   *
   * **Type**: Number
   */
  EmissieStikstofoxidenEscTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie stikstofoxiden etc test
   *
   * **Type**: Number
   */
  EmissieStikstofoxidenEtcTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie thc volgens whsc
   *
   * **Type**: Number
   */
  EmissieThcVolgensWhsc: FieldObject<DataType.Number>;
  /**
   * ### Emissie thc volgens whtc
   *
   * **Type**: Number
   */
  EmissieThcVolgensWhtc: FieldObject<DataType.Number>;
  /**
   * ### Emissie vaste stofdeeltjes
   *
   * **Type**: Number
   */
  EmissieVasteStofdeeltjes: FieldObject<DataType.Number>;
  /**
   * ### Emissie vaste stofdeeltjes esc test
   *
   * **Type**: Number
   */
  EmissieVasteStofdeeltjesEscTest: FieldObject<DataType.Number>;
  /**
   * ### Emissie vaste stofdeeltjes etc test
   *
   * **Type**: Number
   */
  EmissieVasteStofdeeltjesEtcTest: FieldObject<DataType.Number>;
  /**
   * ### Emissieklasse
   *
   * **Type**: Text
   */
  Emissiecode: FieldObject<DataType.Text>;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  EuTypeGoedkeuringssleutel: FieldObject<DataType.Text>;
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
   * ### Maximale biobrandstof percentage
   *
   * **Type**: Number
   */
  MaximaleBiobrandstofPercentage: FieldObject<DataType.Number>;
  /**
   * ### Netto max vermogen bovengrens
   *
   * **Type**: Number
   */
  NettoMaxVermogenBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Netto max vermogen ondergrens
   *
   * **Type**: Number
   */
  NettoMaxVermogenOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Roet uitstoot acc
   *
   * **Type**: Number
   */
  RoetUitstootAcc: FieldObject<DataType.Number>;
  /**
   * ### Rookwaarde elr test
   *
   * **Type**: Number
   */
  RookwaardeElrTest: FieldObject<DataType.Number>;
  /**
   * ### Soort inspuiting motor
   *
   * **Type**: Text
   */
  SoortInspuitingMotor: FieldObject<DataType.Text>;
  /**
   * ### Station toerental bovengrens acc
   *
   * **Type**: Number
   */
  StationToerentalBovengrensAcc: FieldObject<DataType.Number>;
  /**
   * ### Station toerental ondergrens acc
   *
   * **Type**: Number
   */
  StationToerentalOndergrensAcc: FieldObject<DataType.Number>;
  /**
   * ### Toerental max vermogen bovengrens
   *
   * **Type**: Number
   */
  ToerentalMaxVermogenBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Toerental max vermogen ondergrens
   *
   * **Type**: Number
   */
  ToerentalMaxVermogenOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Uitlaatgas circulatie indicator
   *
   * **Type**: Text
   */
  UitlaatgasCirculatieIndicator: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Text
   */
  UitvoeringWijzigingsnummer: FieldObject<DataType.Text>;
  /**
   * ### Verbruik gecombineerd
   *
   * **Type**: Number
   */
  VerbruikGecombineerd: FieldObject<DataType.Number>;
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
   * ### Volgnummer
   *
   * **Type**: Number
   */
  Volgnummer: FieldObject<DataType.Number>;
}

export const Fields: IFields = {
  ActieradiusBrandstof: Field("actieradius_brandstof", DataType.Number),
  ActieradiusBrandstofExternOplaadbaar: Field(
    "actieradius_brandstof_extern_oplaadbaar",
    DataType.Number,
  ),
  BrandstofVolgnummer: Field("brandstof_volgnummer", DataType.Number),
  Brandstofcode: Field("brandstofcode", DataType.Text),
  BrandstofverbruikBuitenweg: Field("brandstofverbruik_buitenweg", DataType.Number),
  BrandstofverbruikCombinRit: Field("brandstofverbruik_combin_rit", DataType.Number),
  BrandstofverbruikStadsrit: Field("brandstofverbruik_stadsrit", DataType.Number),
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  ElektrischVerbruikCombinatie: Field("elektrisch_verbruik_combinatie", DataType.Number),
  ElektrischVerbruikGecomb: Field("elektrisch_verbruik_gecomb", DataType.Number),
  EmissieAantDeeltjesEscTest: Field("emissie_aant_deeltjes_esc_test", DataType.Number),
  EmissieAantDeeltjesEtcTest: Field("emissie_aant_deeltjes_etc_test", DataType.Number),
  EmissieAantDeeltjesT1Test: Field("emissie_aant_deeltjes_t1_test", DataType.Number),
  EmissieCh4VolgensWhsc: Field("emissie_ch4_volgens_whsc", DataType.Number),
  EmissieCh4VolgensWhtc: Field("emissie_ch4_volgens_whtc", DataType.Number),
  EmissieCoBijKoudeStart: Field("emissie_co_bij_koude_start", DataType.Number),
  EmissieCoVolgensWhsc: Field("emissie_co_volgens_whsc", DataType.Number),
  EmissieCoVolgensWhtc: Field("emissie_co_volgens_whtc", DataType.Number),
  EmissieCo2Buitenweg: Field("emissie_co2_buitenweg", DataType.Number),
  EmissieCo2Combinatierit: Field("emissie_co2_combinatierit", DataType.Number),
  EmissieCo2Gecombineerd: Field("emissie_co2_gecombineerd", DataType.Number),
  EmissieCo2Stadsrit: Field("emissie_co2_stadsrit", DataType.Number),
  EmissieDeeltjesAantalWhsc: Field("emissie_deeltjes_aantal_whsc", DataType.Number),
  EmissieDeeltjesAantalWhtc: Field("emissie_deeltjes_aantal_whtc", DataType.Number),
  EmissieDeeltjesMassaWhsc: Field("emissie_deeltjes_massa_whsc", DataType.Number),
  EmissieDeeltjesMassaWhtc: Field("emissie_deeltjes_massa_whtc", DataType.Number),
  EmissieHcBijKoudeStart: Field("emissie_hc_bij_koude_start", DataType.Number),
  EmissieHcEnNoxType1: Field("emissie_hc_en_nox_type1", DataType.Number),
  EmissieKoolmonaxideEtcTest: Field("emissie_koolmonaxide_etc_test", DataType.Number),
  EmissieKoolmonoxideEscTest: Field("emissie_koolmonoxide_esc_test", DataType.Number),
  EmissieKoolmonoxideType1: Field("emissie_koolmonoxide_type_1", DataType.Number),
  EmissieKoolwaterstofType1: Field("emissie_koolwaterstof_type_1", DataType.Number),
  EmissieKoolwaterstoffenEscTest: Field("emissie_koolwaterstoffen_esc_test", DataType.Number),
  EmissieKoolwaterstoffenEtcTest: Field("emissie_koolwaterstoffen_etc_test", DataType.Number),
  EmissieMethaanEtcTest: Field("emissie_methaan_etc_test", DataType.Number),
  EmissieNh3VolgensWhsc: Field("emissie_nh3_volgens_whsc", DataType.Number),
  EmissieNh3VolgensWhtc: Field("emissie_nh3_volgens_whtc", DataType.Number),
  EmissieNmhcVolgensWhsc: Field("emissie_nmhc_volgens_whsc", DataType.Number),
  EmissieNmhcVolgensWhtc: Field("emissie_nmhc_volgens_whtc", DataType.Number),
  EmissieNonMethaanKoolwEtcTest: Field("emissie_non_methaan_koolw_etc_test", DataType.Number),
  EmissieNoxVolgensWhsc: Field("emissie_nox_volgens_whsc", DataType.Number),
  EmissieNoxVolgensWhtc: Field("emissie_nox_volgens_whtc", DataType.Number),
  EmissieStikstofoxideType1: Field("emissie_stikstofoxide_type_1", DataType.Number),
  EmissieStikstofoxidenEscTest: Field("emissie_stikstofoxiden_esc_test", DataType.Number),
  EmissieStikstofoxidenEtcTest: Field("emissie_stikstofoxiden_etc_test", DataType.Number),
  EmissieThcVolgensWhsc: Field("emissie_thc_volgens_whsc", DataType.Number),
  EmissieThcVolgensWhtc: Field("emissie_thc_volgens_whtc", DataType.Number),
  EmissieVasteStofdeeltjes: Field("emissie_vaste_stofdeeltjes", DataType.Number),
  EmissieVasteStofdeeltjesEscTest: Field("emissie_vaste_stofdeeltjes_esc_test", DataType.Number),
  EmissieVasteStofdeeltjesEtcTest: Field("emissie_vaste_stofdeeltjes_etc_test", DataType.Number),
  Emissiecode: Field("emissiecode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  GeluidsniveauBovengrens: Field("geluidsniveau_bovengrens", DataType.Number),
  GeluidsniveauOndergrens: Field("geluidsniveau_ondergrens", DataType.Number),
  GeluidsniveauRijdend: Field("geluidsniveau_rijdend", DataType.Number),
  LuchtInjectieIndicator: Field("lucht_injectie_indicator", DataType.Text),
  MaxVermogenContinuBovengrens: Field("max_vermogen_continu_bovengrens", DataType.Number),
  MaxVermogenContinuOndergrens: Field("max_vermogen_continu_ondergrens", DataType.Number),
  MaximaleBiobrandstofPercentage: Field("maximale_biobrandstof_percentage", DataType.Number),
  NettoMaxVermogenBovengrens: Field("netto_max_vermogen_bovengrens", DataType.Number),
  NettoMaxVermogenOndergrens: Field("netto_max_vermogen_ondergrens", DataType.Number),
  RoetUitstootAcc: Field("roet_uitstoot_acc", DataType.Number),
  RookwaardeElrTest: Field("rookwaarde_elr_test", DataType.Number),
  SoortInspuitingMotor: Field("soort_inspuiting_motor", DataType.Text),
  StationToerentalBovengrensAcc: Field("station_toerental_bovengrens_acc", DataType.Number),
  StationToerentalOndergrensAcc: Field("station_toerental_ondergrens_acc", DataType.Number),
  ToerentalMaxVermogenBovengrens: Field("toerental_max_vermogen_bovengrens", DataType.Number),
  ToerentalMaxVermogenOndergrens: Field("toerental_max_vermogen_ondergrens", DataType.Number),
  UitlaatgasCirculatieIndicator: Field("uitlaatgas_circulatie_indicator", DataType.Text),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Text),
  VerbruikGecombineerd: Field("verbruik_gecombineerd", DataType.Number),
  VermogenBovengrens: Field("vermogen_bovengrens", DataType.Number),
  VermogenOndergrens: Field("vermogen_ondergrens", DataType.Number),
  Volgnummer: Field("volgnummer", DataType.Number),
};

export const Info = {
  fields: [
    "ActieradiusBrandstof",
    "ActieradiusBrandstofExternOplaadbaar",
    "BrandstofVolgnummer",
    "Brandstofcode",
    "BrandstofverbruikBuitenweg",
    "BrandstofverbruikCombinRit",
    "BrandstofverbruikStadsrit",
    "EegUitvoeringscode",
    "EegVariantcode",
    "ElektrischVerbruikCombinatie",
    "ElektrischVerbruikGecomb",
    "EmissieAantDeeltjesEscTest",
    "EmissieAantDeeltjesEtcTest",
    "EmissieAantDeeltjesT1Test",
    "EmissieCh4VolgensWhsc",
    "EmissieCh4VolgensWhtc",
    "EmissieCoBijKoudeStart",
    "EmissieCoVolgensWhsc",
    "EmissieCoVolgensWhtc",
    "EmissieCo2Buitenweg",
    "EmissieCo2Combinatierit",
    "EmissieCo2Gecombineerd",
    "EmissieCo2Stadsrit",
    "EmissieDeeltjesAantalWhsc",
    "EmissieDeeltjesAantalWhtc",
    "EmissieDeeltjesMassaWhsc",
    "EmissieDeeltjesMassaWhtc",
    "EmissieHcBijKoudeStart",
    "EmissieHcEnNoxType1",
    "EmissieKoolmonaxideEtcTest",
    "EmissieKoolmonoxideEscTest",
    "EmissieKoolmonoxideType1",
    "EmissieKoolwaterstofType1",
    "EmissieKoolwaterstoffenEscTest",
    "EmissieKoolwaterstoffenEtcTest",
    "EmissieMethaanEtcTest",
    "EmissieNh3VolgensWhsc",
    "EmissieNh3VolgensWhtc",
    "EmissieNmhcVolgensWhsc",
    "EmissieNmhcVolgensWhtc",
    "EmissieNonMethaanKoolwEtcTest",
    "EmissieNoxVolgensWhsc",
    "EmissieNoxVolgensWhtc",
    "EmissieStikstofoxideType1",
    "EmissieStikstofoxidenEscTest",
    "EmissieStikstofoxidenEtcTest",
    "EmissieThcVolgensWhsc",
    "EmissieThcVolgensWhtc",
    "EmissieVasteStofdeeltjes",
    "EmissieVasteStofdeeltjesEscTest",
    "EmissieVasteStofdeeltjesEtcTest",
    "Emissiecode",
    "EuTypeGoedkeuringssleutel",
    "GeluidsniveauBovengrens",
    "GeluidsniveauOndergrens",
    "GeluidsniveauRijdend",
    "LuchtInjectieIndicator",
    "MaxVermogenContinuBovengrens",
    "MaxVermogenContinuOndergrens",
    "MaximaleBiobrandstofPercentage",
    "NettoMaxVermogenBovengrens",
    "NettoMaxVermogenOndergrens",
    "RoetUitstootAcc",
    "RookwaardeElrTest",
    "SoortInspuitingMotor",
    "StationToerentalBovengrensAcc",
    "StationToerentalOndergrensAcc",
    "ToerentalMaxVermogenBovengrens",
    "ToerentalMaxVermogenOndergrens",
    "UitlaatgasCirculatieIndicator",
    "UitvoeringWijzigingsnummer",
    "VerbruikGecombineerd",
    "VermogenBovengrens",
    "VermogenOndergrens",
    "Volgnummer",
  ],
  dataset: "5w6t-p66a",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Motor Uitvoering Brandstof",
  provider_name: "MotorUitvoeringBrandstof",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering-Brandstof/5w6t-p66a",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/5w6t-p66a",
};

/**
 * ### Open Data RDW: Motor Uitvoering Brandstof
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering-Brandstof/5w6t-p66a
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/5w6t-p66a
 *
 * **Dataset ID:** 5w6t-p66a
 *
 * **Category:** Typegoedkeuring
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
