// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2
// Permalink: https://opendata.rdw.nl/d/m9d7-ebf2
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen
 */
export interface KentekenVoertuigen_ResponseData {
  /**
   * ### Aanhangwagen autonoom geremd
   *
   * **Type**: Number
   */
  aanhangwagen_autonoom_geremd?: string;
  /**
   * ### Aanhangwagen middenas geremd
   *
   * **Type**: Number
   */
  aanhangwagen_middenas_geremd?: string;
  /**
   * ### Aantal cilinders
   *
   * **Type**: Number
   */
  aantal_cilinders?: string;
  /**
   * ### Aantal deuren
   *
   * **Type**: Number
   */
  aantal_deuren?: string;
  /**
   * ### Aantal rolstoelplaatsen
   *
   * **Type**: Number
   */
  aantal_rolstoelplaatsen?: string;
  /**
   * ### Aantal staanplaatsen
   *
   * **Type**: Number
   */
  aantal_staanplaatsen?: string;
  /**
   * ### Aantal wielen
   *
   * **Type**: Number
   */
  aantal_wielen?: string;
  /**
   * ### Aantal zitplaatsen
   *
   * **Type**: Number
   */
  aantal_zitplaatsen?: string;
  /**
   * ### Aerodynamische voorziening of uitrusting
   *
   * **Type**: Text
   */
  aerodyn_voorz?: string;
  /**
   * ### Afstand hart koppeling tot achterzijde voertuig
   *
   * **Type**: Number
   */
  afstand_hart_koppeling_tot_achterzijde_voertuig?: string;
  /**
   * ### Afstand voorzijde voertuig tot hart koppeling
   *
   * **Type**: Number
   */
  afstand_voorzijde_voertuig_tot_hart_koppeling?: string;
  /**
   * ### Afwijkende maximum snelheid
   *
   * **Type**: Number
   */
  afwijkende_maximum_snelheid?: string;
  /**
   * ### API Gekentekende_voertuigen_assen
   *
   * **Type**: Text
   */
  api_gekentekende_voertuigen_assen?: string;
  /**
   * ### API Gekentekende_voertuigen_brandstof
   *
   * **Type**: Text
   */
  api_gekentekende_voertuigen_brandstof?: string;
  /**
   * ### API Gekentekende_voertuigen_carrosserie
   *
   * **Type**: Text
   */
  api_gekentekende_voertuigen_carrosserie?: string;
  /**
   * ### API Gekentekende_voertuigen_carrosserie_specifiek
   *
   * **Type**: Text
   */
  api_gekentekende_voertuigen_carrosserie_specifiek?: string;
  /**
   * ### API Gekentekende_voertuigen_voertuigklasse
   *
   * **Type**: Text
   */
  api_gekentekende_voertuigen_voertuigklasse?: string;
  /**
   * ### Breedte
   *
   * **Type**: Number
   */
  breedte?: string;
  /**
   * ### Breedte voertuig maximum
   *
   * **Type**: Number
   */
  breedte_voertuig_maximum?: string;
  /**
   * ### Breedte voertuig minimum
   *
   * **Type**: Number
   */
  breedte_voertuig_minimum?: string;
  /**
   * ### Bruto BPM
   *
   * **Type**: Number
   */
  bruto_bpm?: string;
  /**
   * ### Catalogusprijs
   *
   * **Type**: Number
   */
  catalogusprijs?: string;
  /**
   * ### Cilinderinhoud
   *
   * **Type**: Number
   */
  cilinderinhoud?: string;
  /**
   * ### Code toelichting tellerstandoordeel
   *
   * **Type**: Text
   */
  code_toelichting_tellerstandoordeel?: string;
  /**
   * ### Datum eerste tenaamstelling in Nederland
   *
   * **Type**: Number
   */
  datum_eerste_tenaamstelling_in_nederland?: string;
  /**
   * ### Datum eerste tenaamstelling in Nederland DT
   *
   * **Type**: Calendar date
   */
  datum_eerste_tenaamstelling_in_nederland_dt?: string;
  /**
   * ### Datum eerste toelating
   *
   * **Type**: Number
   */
  datum_eerste_toelating?: string;
  /**
   * ### Datum eerste toelating DT
   *
   * **Type**: Calendar date
   */
  datum_eerste_toelating_dt?: string;
  /**
   * ### Datum tenaamstelling
   *
   * **Type**: Number
   */
  datum_tenaamstelling?: string;
  /**
   * ### Datum tenaamstelling DT
   *
   * **Type**: Calendar date
   */
  datum_tenaamstelling_dt?: string;
  /**
   * ### Eerste kleur
   *
   * **Type**: Text
   */
  eerste_kleur?: string;
  /**
   * ### Europese uitvoeringcategorie toevoeging
   *
   * **Type**: Text
   */
  europese_uitvoeringcategorie_toevoeging?: string;
  /**
   * ### Europese voertuigcategorie
   *
   * **Type**: Text
   */
  europese_voertuigcategorie?: string;
  /**
   * ### Europese voertuigcategorie toevoeging
   *
   * **Type**: Text
   */
  europese_voertuigcategorie_toevoeging?: string;
  /**
   * ### Export indicator
   *
   * **Type**: Text
   */
  export_indicator?: string;
  /**
   * ### Gemiddelde Lading Waarde
   *
   * **Type**: Number
   */
  gem_lading_wrde?: string;
  /**
   * ### Handelsbenaming
   *
   * **Type**: Text
   */
  handelsbenaming?: string;
  /**
   * ### Hoogte voertuig
   *
   * **Type**: Number
   */
  hoogte_voertuig?: string;
  /**
   * ### Hoogte voertuig maximum
   *
   * **Type**: Number
   */
  hoogte_voertuig_maximum?: string;
  /**
   * ### Hoogte voertuig minimum
   *
   * **Type**: Number
   */
  hoogte_voertuig_minimum?: string;
  /**
   * ### Inrichting
   *
   * **Type**: Text
   */
  inrichting?: string;
  /**
   * ### Jaar laatste registratie tellerstand
   *
   * **Type**: Number
   */
  jaar_laatste_registratie_tellerstand?: string;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Laadvermogen
   *
   * **Type**: Number
   */
  laadvermogen?: string;
  /**
   * ### Lengte
   *
   * **Type**: Number
   */
  lengte?: string;
  /**
   * ### Lengte voertuig maximum
   *
   * **Type**: Number
   */
  lengte_voertuig_maximum?: string;
  /**
   * ### Lengte voertuig minimum
   *
   * **Type**: Number
   */
  lengte_voertuig_minimum?: string;
  /**
   * ### Additionele massa alternatieve aandrijving
   *
   * **Type**: Number
   */
  massa_alt_aandr?: string;
  /**
   * ### Massa bedrijfsklaar maximaal
   *
   * **Type**: Number
   */
  massa_bedrijfsklaar_maximaal?: string;
  /**
   * ### Massa bedrijfsklaar minimaal
   *
   * **Type**: Number
   */
  massa_bedrijfsklaar_minimaal?: string;
  /**
   * ### Massa ledig voertuig
   *
   * **Type**: Number
   */
  massa_ledig_voertuig?: string;
  /**
   * ### Massa rijklaar
   *
   * **Type**: Number
   */
  massa_rijklaar?: string;
  /**
   * ### Maximale constructiesnelheid
   *
   * **Type**: Number
   */
  maximale_constructiesnelheid?: string;
  /**
   * ### Maximum last onder de vooras(sen) (tezamen)/koppeling
   *
   * **Type**: Number
   */
  maximum_last_onder_de_vooras_sen_tezamen_koppeling?: string;
  /**
   * ### Maximum massa samenstelling
   *
   * **Type**: Number
   */
  maximum_massa_samenstelling?: string;
  /**
   * ### Maximum massa technisch maximaal
   *
   * **Type**: Number
   */
  maximum_massa_technisch_maximaal?: string;
  /**
   * ### Maximum massa technisch minimaal
   *
   * **Type**: Number
   */
  maximum_massa_technisch_minimaal?: string;
  /**
   * ### Maximum massa trekken ongeremd
   *
   * **Type**: Number
   */
  maximum_massa_trekken_ongeremd?: string;
  /**
   * ### Maximum ondersteunende snelheid
   *
   * **Type**: Number
   */
  maximum_ondersteunende_snelheid?: string;
  /**
   * ### Maximum trekken massa geremd
   *
   * **Type**: Number
   */
  maximum_trekken_massa_geremd?: string;
  /**
   * ### Merk
   *
   * **Type**: Text
   */
  merk?: string;
  /**
   * ### Openstaande terugroepactie indicator
   *
   * **Type**: Text
   */
  openstaande_terugroepactie_indicator?: string;
  /**
   * ### Oplegger geremd
   *
   * **Type**: Number
   */
  oplegger_geremd?: string;
  /**
   * ### Plaats chassisnummer
   *
   * **Type**: Text
   */
  plaats_chassisnummer?: string;
  /**
   * ### Registratie datum goedkeuring (afschrijvingsmoment BPM)
   *
   * **Type**: Number
   */
  registratie_datum_goedkeuring_afschrijvingsmoment_bpm?: string;
  /**
   * ### Registratie datum goedkeuring (afschrijvingsmoment BPM) DT
   *
   * **Type**: Calendar date
   */
  registratie_datum_goedkeuring_afschrijvingsmoment_bpm_dt?: string;
  /**
   * ### Rupsonderstelconfiguratiecode
   *
   * **Type**: Text
   */
  rupsonderstelconfiguratiecode?: string;
  /**
   * ### Subcategorie Nederland
   *
   * **Type**: Text
   */
  subcategorie_nederland?: string;
  /**
   * ### Taxi indicator
   *
   * **Type**: Text
   */
  taxi_indicator?: string;
  /**
   * ### Technisch toelaatbaar massa koppelpunt
   *
   * **Type**: Number
   */
  technisch_toelaatbaar_massa_koppelpunt?: string;
  /**
   * ### Technische max. massa voertuig
   *
   * **Type**: Number
   */
  technische_max_massa_voertuig?: string;
  /**
   * ### Tellerstandoordeel
   *
   * **Type**: Text
   */
  tellerstandoordeel?: string;
  /**
   * ### Tenaamstellen mogelijk
   *
   * **Type**: Text
   */
  tenaamstellen_mogelijk?: string;
  /**
   * ### Toegestane maximum massa voertuig
   *
   * **Type**: Number
   */
  toegestane_maximum_massa_voertuig?: string;
  /**
   * ### Tweede kleur
   *
   * **Type**: Text
   */
  tweede_kleur?: string;
  /**
   * ### Type
   *
   * **Type**: Text
   */
  type?: string;
  /**
   * ### Type gasinstallatie
   *
   * **Type**: Text
   */
  type_gasinstallatie?: string;
  /**
   * ### Type remsysteem voertuig code
   *
   * **Type**: Text
   */
  type_remsysteem_voertuig_code?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### Uitvoering
   *
   * **Type**: Text
   */
  uitvoering?: string;
  /**
   * ### Variant
   *
   * **Type**: Text
   */
  variant?: string;
  /**
   * ### Verlengde cabine indicator
   *
   * **Type**: Text
   */
  verl_cab_ind?: string;
  /**
   * ### Vermogen massarijklaar
   *
   * **Type**: Number
   */
  vermogen_massarijklaar?: string;
  /**
   * ### Verticale belasting koppelpunt getrokken voertuig
   *
   * **Type**: Number
   */
  verticale_belasting_koppelpunt_getrokken_voertuig?: string;
  /**
   * ### Vervaldatum APK
   *
   * **Type**: Number
   */
  vervaldatum_apk?: string;
  /**
   * ### Vervaldatum APK DT
   *
   * **Type**: Calendar date
   */
  vervaldatum_apk_dt?: string;
  /**
   * ### Vervaldatum tachograaf
   *
   * **Type**: Number
   */
  vervaldatum_tachograaf?: string;
  /**
   * ### Vervaldatum tachograaf DT
   *
   * **Type**: Calendar date
   */
  vervaldatum_tachograaf_dt?: string;
  /**
   * ### Voertuigsoort
   *
   * **Type**: Text
   */
  voertuigsoort?: string;
  /**
   * ### Volgnummer wijziging EU typegoedkeuring
   *
   * **Type**: Number
   */
  volgnummer_wijziging_eu_typegoedkeuring?: string;
  /**
   * ### Wacht op keuren
   *
   * **Type**: Text
   */
  wacht_op_keuren?: string;
  /**
   * ### WAM verzekerd
   *
   * **Type**: Text
   */
  wam_verzekerd?: string;
  /**
   * ### Wielbasis
   *
   * **Type**: Number
   */
  wielbasis?: string;
  /**
   * ### Wielbasis voertuig maximum
   *
   * **Type**: Number
   */
  wielbasis_voertuig_maximum?: string;
  /**
   * ### Wielbasis voertuig minimum
   *
   * **Type**: Number
   */
  wielbasis_voertuig_minimum?: string;
  /**
   * ### Zuinigheidsclassificatie
   *
   * **Type**: Text
   */
  zuinigheidsclassificatie?: string;
}

/**
 * Fieldnames for **KentekenVoertuigen**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AanhangwagenAutonoomGeremd`` | ``aanhangwagen_autonoom_geremd`` | _Number_ |
 * | ``AanhangwagenMiddenasGeremd`` | ``aanhangwagen_middenas_geremd`` | _Number_ |
 * | ``AantalCilinders`` | ``aantal_cilinders`` | _Number_ |
 * | ``AantalDeuren`` | ``aantal_deuren`` | _Number_ |
 * | ``AantalRolstoelplaatsen`` | ``aantal_rolstoelplaatsen`` | _Number_ |
 * | ``AantalStaanplaatsen`` | ``aantal_staanplaatsen`` | _Number_ |
 * | ``AantalWielen`` | ``aantal_wielen`` | _Number_ |
 * | ``AantalZitplaatsen`` | ``aantal_zitplaatsen`` | _Number_ |
 * | ``AerodynVoorz`` | ``aerodyn_voorz`` | _Text_ |
 * | ``AfstandHartKoppelingTotAchterzijdeVoertuig`` | ``afstand_hart_koppeling_tot_achterzijde_voertuig`` | _Number_ |
 * | ``AfstandVoorzijdeVoertuigTotHartKoppeling`` | ``afstand_voorzijde_voertuig_tot_hart_koppeling`` | _Number_ |
 * | ``AfwijkendeMaximumSnelheid`` | ``afwijkende_maximum_snelheid`` | _Number_ |
 * | ``ApiGekentekendeVoertuigenAssen`` | ``api_gekentekende_voertuigen_assen`` | _Text_ |
 * | ``ApiGekentekendeVoertuigenBrandstof`` | ``api_gekentekende_voertuigen_brandstof`` | _Text_ |
 * | ``ApiGekentekendeVoertuigenCarrosserie`` | ``api_gekentekende_voertuigen_carrosserie`` | _Text_ |
 * | ``ApiGekentekendeVoertuigenCarrosserieSpecifiek`` | ``api_gekentekende_voertuigen_carrosserie_specifiek`` | _Text_ |
 * | ``ApiGekentekendeVoertuigenVoertuigklasse`` | ``api_gekentekende_voertuigen_voertuigklasse`` | _Text_ |
 * | ``Breedte`` | ``breedte`` | _Number_ |
 * | ``BreedteVoertuigMaximum`` | ``breedte_voertuig_maximum`` | _Number_ |
 * | ``BreedteVoertuigMinimum`` | ``breedte_voertuig_minimum`` | _Number_ |
 * | ``BrutoBpm`` | ``bruto_bpm`` | _Number_ |
 * | ``Catalogusprijs`` | ``catalogusprijs`` | _Number_ |
 * | ``Cilinderinhoud`` | ``cilinderinhoud`` | _Number_ |
 * | ``CodeToelichtingTellerstandoordeel`` | ``code_toelichting_tellerstandoordeel`` | _Text_ |
 * | ``DatumEersteTenaamstellingInNederland`` | ``datum_eerste_tenaamstelling_in_nederland`` | _Number_ |
 * | ``DatumEersteTenaamstellingInNederlandDt`` | ``datum_eerste_tenaamstelling_in_nederland_dt`` | _Calendar date_ |
 * | ``DatumEersteToelating`` | ``datum_eerste_toelating`` | _Number_ |
 * | ``DatumEersteToelatingDt`` | ``datum_eerste_toelating_dt`` | _Calendar date_ |
 * | ``DatumTenaamstelling`` | ``datum_tenaamstelling`` | _Number_ |
 * | ``DatumTenaamstellingDt`` | ``datum_tenaamstelling_dt`` | _Calendar date_ |
 * | ``EersteKleur`` | ``eerste_kleur`` | _Text_ |
 * | ``EuropeseUitvoeringcategorieToevoeging`` | ``europese_uitvoeringcategorie_toevoeging`` | _Text_ |
 * | ``EuropeseVoertuigcategorie`` | ``europese_voertuigcategorie`` | _Text_ |
 * | ``EuropeseVoertuigcategorieToevoeging`` | ``europese_voertuigcategorie_toevoeging`` | _Text_ |
 * | ``ExportIndicator`` | ``export_indicator`` | _Text_ |
 * | ``GemLadingWrde`` | ``gem_lading_wrde`` | _Number_ |
 * | ``Handelsbenaming`` | ``handelsbenaming`` | _Text_ |
 * | ``HoogteVoertuig`` | ``hoogte_voertuig`` | _Number_ |
 * | ``HoogteVoertuigMaximum`` | ``hoogte_voertuig_maximum`` | _Number_ |
 * | ``HoogteVoertuigMinimum`` | ``hoogte_voertuig_minimum`` | _Number_ |
 * | ``Inrichting`` | ``inrichting`` | _Text_ |
 * | ``JaarLaatsteRegistratieTellerstand`` | ``jaar_laatste_registratie_tellerstand`` | _Number_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``Laadvermogen`` | ``laadvermogen`` | _Number_ |
 * | ``Lengte`` | ``lengte`` | _Number_ |
 * | ``LengteVoertuigMaximum`` | ``lengte_voertuig_maximum`` | _Number_ |
 * | ``LengteVoertuigMinimum`` | ``lengte_voertuig_minimum`` | _Number_ |
 * | ``MassaAltAandr`` | ``massa_alt_aandr`` | _Number_ |
 * | ``MassaBedrijfsklaarMaximaal`` | ``massa_bedrijfsklaar_maximaal`` | _Number_ |
 * | ``MassaBedrijfsklaarMinimaal`` | ``massa_bedrijfsklaar_minimaal`` | _Number_ |
 * | ``MassaLedigVoertuig`` | ``massa_ledig_voertuig`` | _Number_ |
 * | ``MassaRijklaar`` | ``massa_rijklaar`` | _Number_ |
 * | ``MaximaleConstructiesnelheid`` | ``maximale_constructiesnelheid`` | _Number_ |
 * | ``MaximumLastOnderDeVoorasSenTezamenKoppeling`` | ``maximum_last_onder_de_vooras_sen_tezamen_koppeling`` | _Number_ |
 * | ``MaximumMassaSamenstelling`` | ``maximum_massa_samenstelling`` | _Number_ |
 * | ``MaximumMassaTechnischMaximaal`` | ``maximum_massa_technisch_maximaal`` | _Number_ |
 * | ``MaximumMassaTechnischMinimaal`` | ``maximum_massa_technisch_minimaal`` | _Number_ |
 * | ``MaximumMassaTrekkenOngeremd`` | ``maximum_massa_trekken_ongeremd`` | _Number_ |
 * | ``MaximumOndersteunendeSnelheid`` | ``maximum_ondersteunende_snelheid`` | _Number_ |
 * | ``MaximumTrekkenMassaGeremd`` | ``maximum_trekken_massa_geremd`` | _Number_ |
 * | ``Merk`` | ``merk`` | _Text_ |
 * | ``OpenstaandeTerugroepactieIndicator`` | ``openstaande_terugroepactie_indicator`` | _Text_ |
 * | ``OpleggerGeremd`` | ``oplegger_geremd`` | _Number_ |
 * | ``PlaatsChassisnummer`` | ``plaats_chassisnummer`` | _Text_ |
 * | ``RegistratieDatumGoedkeuringAfschrijvingsmomentBpm`` | ``registratie_datum_goedkeuring_afschrijvingsmoment_bpm`` | _Number_ |
 * | ``RegistratieDatumGoedkeuringAfschrijvingsmomentBpmDt`` | ``registratie_datum_goedkeuring_afschrijvingsmoment_bpm_dt`` | _Calendar date_ |
 * | ``Rupsonderstelconfiguratiecode`` | ``rupsonderstelconfiguratiecode`` | _Text_ |
 * | ``SubcategorieNederland`` | ``subcategorie_nederland`` | _Text_ |
 * | ``TaxiIndicator`` | ``taxi_indicator`` | _Text_ |
 * | ``TechnischToelaatbaarMassaKoppelpunt`` | ``technisch_toelaatbaar_massa_koppelpunt`` | _Number_ |
 * | ``TechnischeMaxMassaVoertuig`` | ``technische_max_massa_voertuig`` | _Number_ |
 * | ``Tellerstandoordeel`` | ``tellerstandoordeel`` | _Text_ |
 * | ``TenaamstellenMogelijk`` | ``tenaamstellen_mogelijk`` | _Text_ |
 * | ``ToegestaneMaximumMassaVoertuig`` | ``toegestane_maximum_massa_voertuig`` | _Number_ |
 * | ``TweedeKleur`` | ``tweede_kleur`` | _Text_ |
 * | ``Type`` | ``type`` | _Text_ |
 * | ``TypeGasinstallatie`` | ``type_gasinstallatie`` | _Text_ |
 * | ``TypeRemsysteemVoertuigCode`` | ``type_remsysteem_voertuig_code`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Uitvoering`` | ``uitvoering`` | _Text_ |
 * | ``Variant`` | ``variant`` | _Text_ |
 * | ``VerlCabInd`` | ``verl_cab_ind`` | _Text_ |
 * | ``VermogenMassarijklaar`` | ``vermogen_massarijklaar`` | _Number_ |
 * | ``VerticaleBelastingKoppelpuntGetrokkenVoertuig`` | ``verticale_belasting_koppelpunt_getrokken_voertuig`` | _Number_ |
 * | ``VervaldatumApk`` | ``vervaldatum_apk`` | _Number_ |
 * | ``VervaldatumApkDt`` | ``vervaldatum_apk_dt`` | _Calendar date_ |
 * | ``VervaldatumTachograaf`` | ``vervaldatum_tachograaf`` | _Number_ |
 * | ``VervaldatumTachograafDt`` | ``vervaldatum_tachograaf_dt`` | _Calendar date_ |
 * | ``Voertuigsoort`` | ``voertuigsoort`` | _Text_ |
 * | ``VolgnummerWijzigingEuTypegoedkeuring`` | ``volgnummer_wijziging_eu_typegoedkeuring`` | _Number_ |
 * | ``WachtOpKeuren`` | ``wacht_op_keuren`` | _Text_ |
 * | ``WamVerzekerd`` | ``wam_verzekerd`` | _Text_ |
 * | ``Wielbasis`` | ``wielbasis`` | _Number_ |
 * | ``WielbasisVoertuigMaximum`` | ``wielbasis_voertuig_maximum`` | _Number_ |
 * | ``WielbasisVoertuigMinimum`` | ``wielbasis_voertuig_minimum`` | _Number_ |
 * | ``Zuinigheidsclassificatie`` | ``zuinigheidsclassificatie`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Aanhangwagen autonoom geremd
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aanhangwagen_autonoom_geremd`
  */
  AanhangwagenAutonoomGeremd: Field("aanhangwagen_autonoom_geremd", DataType.Number),
  /**
  * ### Aanhangwagen middenas geremd
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aanhangwagen_middenas_geremd`
  */
  AanhangwagenMiddenasGeremd: Field("aanhangwagen_middenas_geremd", DataType.Number),
  /**
  * ### Aantal cilinders
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aantal_cilinders`
  */
  AantalCilinders: Field("aantal_cilinders", DataType.Number),
  /**
  * ### Aantal deuren
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aantal_deuren`
  */
  AantalDeuren: Field("aantal_deuren", DataType.Number),
  /**
  * ### Aantal rolstoelplaatsen
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aantal_rolstoelplaatsen`
  */
  AantalRolstoelplaatsen: Field("aantal_rolstoelplaatsen", DataType.Number),
  /**
  * ### Aantal staanplaatsen
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aantal_staanplaatsen`
  */
  AantalStaanplaatsen: Field("aantal_staanplaatsen", DataType.Number),
  /**
  * ### Aantal wielen
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aantal_wielen`
  */
  AantalWielen: Field("aantal_wielen", DataType.Number),
  /**
  * ### Aantal zitplaatsen
  *
  * **Type**: Number
  *
  * **Database Column Name**: `aantal_zitplaatsen`
  */
  AantalZitplaatsen: Field("aantal_zitplaatsen", DataType.Number),
  /**
  * ### Aerodynamische voorziening of uitrusting
  *
  * **Type**: Text
  *
  * **Database Column Name**: `aerodyn_voorz`
  */
  AerodynVoorz: Field("aerodyn_voorz", DataType.Text),
  /**
  * ### Afstand hart koppeling tot achterzijde voertuig
  *
  * **Type**: Number
  *
  * **Database Column Name**: `afstand_hart_koppeling_tot_achterzijde_voertuig`
  */
  AfstandHartKoppelingTotAchterzijdeVoertuig: Field("afstand_hart_koppeling_tot_achterzijde_voertuig", DataType.Number),
  /**
  * ### Afstand voorzijde voertuig tot hart koppeling
  *
  * **Type**: Number
  *
  * **Database Column Name**: `afstand_voorzijde_voertuig_tot_hart_koppeling`
  */
  AfstandVoorzijdeVoertuigTotHartKoppeling: Field("afstand_voorzijde_voertuig_tot_hart_koppeling", DataType.Number),
  /**
  * ### Afwijkende maximum snelheid
  *
  * **Type**: Number
  *
  * **Database Column Name**: `afwijkende_maximum_snelheid`
  */
  AfwijkendeMaximumSnelheid: Field("afwijkende_maximum_snelheid", DataType.Number),
  /**
  * ### API Gekentekende_voertuigen_assen
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_gekentekende_voertuigen_assen`
  */
  ApiGekentekendeVoertuigenAssen: Field("api_gekentekende_voertuigen_assen", DataType.Text),
  /**
  * ### API Gekentekende_voertuigen_brandstof
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_gekentekende_voertuigen_brandstof`
  */
  ApiGekentekendeVoertuigenBrandstof: Field("api_gekentekende_voertuigen_brandstof", DataType.Text),
  /**
  * ### API Gekentekende_voertuigen_carrosserie
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_gekentekende_voertuigen_carrosserie`
  */
  ApiGekentekendeVoertuigenCarrosserie: Field("api_gekentekende_voertuigen_carrosserie", DataType.Text),
  /**
  * ### API Gekentekende_voertuigen_carrosserie_specifiek
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_gekentekende_voertuigen_carrosserie_specifiek`
  */
  ApiGekentekendeVoertuigenCarrosserieSpecifiek: Field("api_gekentekende_voertuigen_carrosserie_specifiek", DataType.Text),
  /**
  * ### API Gekentekende_voertuigen_voertuigklasse
  *
  * **Type**: Text
  *
  * **Database Column Name**: `api_gekentekende_voertuigen_voertuigklasse`
  */
  ApiGekentekendeVoertuigenVoertuigklasse: Field("api_gekentekende_voertuigen_voertuigklasse", DataType.Text),
  /**
  * ### Breedte
  *
  * **Type**: Number
  *
  * **Database Column Name**: `breedte`
  */
  Breedte: Field("breedte", DataType.Number),
  /**
  * ### Breedte voertuig maximum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `breedte_voertuig_maximum`
  */
  BreedteVoertuigMaximum: Field("breedte_voertuig_maximum", DataType.Number),
  /**
  * ### Breedte voertuig minimum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `breedte_voertuig_minimum`
  */
  BreedteVoertuigMinimum: Field("breedte_voertuig_minimum", DataType.Number),
  /**
  * ### Bruto BPM
  *
  * **Type**: Number
  *
  * **Database Column Name**: `bruto_bpm`
  */
  BrutoBpm: Field("bruto_bpm", DataType.Number),
  /**
  * ### Catalogusprijs
  *
  * **Type**: Number
  *
  * **Database Column Name**: `catalogusprijs`
  */
  Catalogusprijs: Field("catalogusprijs", DataType.Number),
  /**
  * ### Cilinderinhoud
  *
  * **Type**: Number
  *
  * **Database Column Name**: `cilinderinhoud`
  */
  Cilinderinhoud: Field("cilinderinhoud", DataType.Number),
  /**
  * ### Code toelichting tellerstandoordeel
  *
  * **Type**: Text
  *
  * **Database Column Name**: `code_toelichting_tellerstandoordeel`
  */
  CodeToelichtingTellerstandoordeel: Field("code_toelichting_tellerstandoordeel", DataType.Text),
  /**
  * ### Datum eerste tenaamstelling in Nederland
  *
  * **Type**: Number
  *
  * **Database Column Name**: `datum_eerste_tenaamstelling_in_nederland`
  */
  DatumEersteTenaamstellingInNederland: Field("datum_eerste_tenaamstelling_in_nederland", DataType.Number),
  /**
  * ### Datum eerste tenaamstelling in Nederland DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `datum_eerste_tenaamstelling_in_nederland_dt`
  */
  DatumEersteTenaamstellingInNederlandDt: Field("datum_eerste_tenaamstelling_in_nederland_dt", DataType.FloatingTimestamp),
  /**
  * ### Datum eerste toelating
  *
  * **Type**: Number
  *
  * **Database Column Name**: `datum_eerste_toelating`
  */
  DatumEersteToelating: Field("datum_eerste_toelating", DataType.Number),
  /**
  * ### Datum eerste toelating DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `datum_eerste_toelating_dt`
  */
  DatumEersteToelatingDt: Field("datum_eerste_toelating_dt", DataType.FloatingTimestamp),
  /**
  * ### Datum tenaamstelling
  *
  * **Type**: Number
  *
  * **Database Column Name**: `datum_tenaamstelling`
  */
  DatumTenaamstelling: Field("datum_tenaamstelling", DataType.Number),
  /**
  * ### Datum tenaamstelling DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `datum_tenaamstelling_dt`
  */
  DatumTenaamstellingDt: Field("datum_tenaamstelling_dt", DataType.FloatingTimestamp),
  /**
  * ### Eerste kleur
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eerste_kleur`
  */
  EersteKleur: Field("eerste_kleur", DataType.Text),
  /**
  * ### Europese uitvoeringcategorie toevoeging
  *
  * **Type**: Text
  *
  * **Database Column Name**: `europese_uitvoeringcategorie_toevoeging`
  */
  EuropeseUitvoeringcategorieToevoeging: Field("europese_uitvoeringcategorie_toevoeging", DataType.Text),
  /**
  * ### Europese voertuigcategorie
  *
  * **Type**: Text
  *
  * **Database Column Name**: `europese_voertuigcategorie`
  */
  EuropeseVoertuigcategorie: Field("europese_voertuigcategorie", DataType.Text),
  /**
  * ### Europese voertuigcategorie toevoeging
  *
  * **Type**: Text
  *
  * **Database Column Name**: `europese_voertuigcategorie_toevoeging`
  */
  EuropeseVoertuigcategorieToevoeging: Field("europese_voertuigcategorie_toevoeging", DataType.Text),
  /**
  * ### Export indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `export_indicator`
  */
  ExportIndicator: Field("export_indicator", DataType.Text),
  /**
  * ### Gemiddelde Lading Waarde
  *
  * **Type**: Number
  *
  * **Database Column Name**: `gem_lading_wrde`
  */
  GemLadingWrde: Field("gem_lading_wrde", DataType.Number),
  /**
  * ### Handelsbenaming
  *
  * **Type**: Text
  *
  * **Database Column Name**: `handelsbenaming`
  */
  Handelsbenaming: Field("handelsbenaming", DataType.Text),
  /**
  * ### Hoogte voertuig
  *
  * **Type**: Number
  *
  * **Database Column Name**: `hoogte_voertuig`
  */
  HoogteVoertuig: Field("hoogte_voertuig", DataType.Number),
  /**
  * ### Hoogte voertuig maximum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `hoogte_voertuig_maximum`
  */
  HoogteVoertuigMaximum: Field("hoogte_voertuig_maximum", DataType.Number),
  /**
  * ### Hoogte voertuig minimum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `hoogte_voertuig_minimum`
  */
  HoogteVoertuigMinimum: Field("hoogte_voertuig_minimum", DataType.Number),
  /**
  * ### Inrichting
  *
  * **Type**: Text
  *
  * **Database Column Name**: `inrichting`
  */
  Inrichting: Field("inrichting", DataType.Text),
  /**
  * ### Jaar laatste registratie tellerstand
  *
  * **Type**: Number
  *
  * **Database Column Name**: `jaar_laatste_registratie_tellerstand`
  */
  JaarLaatsteRegistratieTellerstand: Field("jaar_laatste_registratie_tellerstand", DataType.Number),
  /**
  * ### Kenteken
  *
  * **Type**: Text
  *
  * **Database Column Name**: `kenteken`
  */
  Kenteken: Field("kenteken", DataType.Text),
  /**
  * ### Laadvermogen
  *
  * **Type**: Number
  *
  * **Database Column Name**: `laadvermogen`
  */
  Laadvermogen: Field("laadvermogen", DataType.Number),
  /**
  * ### Lengte
  *
  * **Type**: Number
  *
  * **Database Column Name**: `lengte`
  */
  Lengte: Field("lengte", DataType.Number),
  /**
  * ### Lengte voertuig maximum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `lengte_voertuig_maximum`
  */
  LengteVoertuigMaximum: Field("lengte_voertuig_maximum", DataType.Number),
  /**
  * ### Lengte voertuig minimum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `lengte_voertuig_minimum`
  */
  LengteVoertuigMinimum: Field("lengte_voertuig_minimum", DataType.Number),
  /**
  * ### Additionele massa alternatieve aandrijving
  *
  * **Type**: Number
  *
  * **Database Column Name**: `massa_alt_aandr`
  */
  MassaAltAandr: Field("massa_alt_aandr", DataType.Number),
  /**
  * ### Massa bedrijfsklaar maximaal
  *
  * **Type**: Number
  *
  * **Database Column Name**: `massa_bedrijfsklaar_maximaal`
  */
  MassaBedrijfsklaarMaximaal: Field("massa_bedrijfsklaar_maximaal", DataType.Number),
  /**
  * ### Massa bedrijfsklaar minimaal
  *
  * **Type**: Number
  *
  * **Database Column Name**: `massa_bedrijfsklaar_minimaal`
  */
  MassaBedrijfsklaarMinimaal: Field("massa_bedrijfsklaar_minimaal", DataType.Number),
  /**
  * ### Massa ledig voertuig
  *
  * **Type**: Number
  *
  * **Database Column Name**: `massa_ledig_voertuig`
  */
  MassaLedigVoertuig: Field("massa_ledig_voertuig", DataType.Number),
  /**
  * ### Massa rijklaar
  *
  * **Type**: Number
  *
  * **Database Column Name**: `massa_rijklaar`
  */
  MassaRijklaar: Field("massa_rijklaar", DataType.Number),
  /**
  * ### Maximale constructiesnelheid
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximale_constructiesnelheid`
  */
  MaximaleConstructiesnelheid: Field("maximale_constructiesnelheid", DataType.Number),
  /**
  * ### Maximum last onder de vooras(sen) (tezamen)/koppeling
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximum_last_onder_de_vooras_sen_tezamen_koppeling`
  */
  MaximumLastOnderDeVoorasSenTezamenKoppeling: Field("maximum_last_onder_de_vooras_sen_tezamen_koppeling", DataType.Number),
  /**
  * ### Maximum massa samenstelling
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximum_massa_samenstelling`
  */
  MaximumMassaSamenstelling: Field("maximum_massa_samenstelling", DataType.Number),
  /**
  * ### Maximum massa technisch maximaal
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximum_massa_technisch_maximaal`
  */
  MaximumMassaTechnischMaximaal: Field("maximum_massa_technisch_maximaal", DataType.Number),
  /**
  * ### Maximum massa technisch minimaal
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximum_massa_technisch_minimaal`
  */
  MaximumMassaTechnischMinimaal: Field("maximum_massa_technisch_minimaal", DataType.Number),
  /**
  * ### Maximum massa trekken ongeremd
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximum_massa_trekken_ongeremd`
  */
  MaximumMassaTrekkenOngeremd: Field("maximum_massa_trekken_ongeremd", DataType.Number),
  /**
  * ### Maximum ondersteunende snelheid
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximum_ondersteunende_snelheid`
  */
  MaximumOndersteunendeSnelheid: Field("maximum_ondersteunende_snelheid", DataType.Number),
  /**
  * ### Maximum trekken massa geremd
  *
  * **Type**: Number
  *
  * **Database Column Name**: `maximum_trekken_massa_geremd`
  */
  MaximumTrekkenMassaGeremd: Field("maximum_trekken_massa_geremd", DataType.Number),
  /**
  * ### Merk
  *
  * **Type**: Text
  *
  * **Database Column Name**: `merk`
  */
  Merk: Field("merk", DataType.Text),
  /**
  * ### Openstaande terugroepactie indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `openstaande_terugroepactie_indicator`
  */
  OpenstaandeTerugroepactieIndicator: Field("openstaande_terugroepactie_indicator", DataType.Text),
  /**
  * ### Oplegger geremd
  *
  * **Type**: Number
  *
  * **Database Column Name**: `oplegger_geremd`
  */
  OpleggerGeremd: Field("oplegger_geremd", DataType.Number),
  /**
  * ### Plaats chassisnummer
  *
  * **Type**: Text
  *
  * **Database Column Name**: `plaats_chassisnummer`
  */
  PlaatsChassisnummer: Field("plaats_chassisnummer", DataType.Text),
  /**
  * ### Registratie datum goedkeuring (afschrijvingsmoment BPM)
  *
  * **Type**: Number
  *
  * **Database Column Name**: `registratie_datum_goedkeuring_afschrijvingsmoment_bpm`
  */
  RegistratieDatumGoedkeuringAfschrijvingsmomentBpm: Field("registratie_datum_goedkeuring_afschrijvingsmoment_bpm", DataType.Number),
  /**
  * ### Registratie datum goedkeuring (afschrijvingsmoment BPM) DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `registratie_datum_goedkeuring_afschrijvingsmoment_bpm_dt`
  */
  RegistratieDatumGoedkeuringAfschrijvingsmomentBpmDt: Field("registratie_datum_goedkeuring_afschrijvingsmoment_bpm_dt", DataType.FloatingTimestamp),
  /**
  * ### Rupsonderstelconfiguratiecode
  *
  * **Type**: Text
  *
  * **Database Column Name**: `rupsonderstelconfiguratiecode`
  */
  Rupsonderstelconfiguratiecode: Field("rupsonderstelconfiguratiecode", DataType.Text),
  /**
  * ### Subcategorie Nederland
  *
  * **Type**: Text
  *
  * **Database Column Name**: `subcategorie_nederland`
  */
  SubcategorieNederland: Field("subcategorie_nederland", DataType.Text),
  /**
  * ### Taxi indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `taxi_indicator`
  */
  TaxiIndicator: Field("taxi_indicator", DataType.Text),
  /**
  * ### Technisch toelaatbaar massa koppelpunt
  *
  * **Type**: Number
  *
  * **Database Column Name**: `technisch_toelaatbaar_massa_koppelpunt`
  */
  TechnischToelaatbaarMassaKoppelpunt: Field("technisch_toelaatbaar_massa_koppelpunt", DataType.Number),
  /**
  * ### Technische max. massa voertuig
  *
  * **Type**: Number
  *
  * **Database Column Name**: `technische_max_massa_voertuig`
  */
  TechnischeMaxMassaVoertuig: Field("technische_max_massa_voertuig", DataType.Number),
  /**
  * ### Tellerstandoordeel
  *
  * **Type**: Text
  *
  * **Database Column Name**: `tellerstandoordeel`
  */
  Tellerstandoordeel: Field("tellerstandoordeel", DataType.Text),
  /**
  * ### Tenaamstellen mogelijk
  *
  * **Type**: Text
  *
  * **Database Column Name**: `tenaamstellen_mogelijk`
  */
  TenaamstellenMogelijk: Field("tenaamstellen_mogelijk", DataType.Text),
  /**
  * ### Toegestane maximum massa voertuig
  *
  * **Type**: Number
  *
  * **Database Column Name**: `toegestane_maximum_massa_voertuig`
  */
  ToegestaneMaximumMassaVoertuig: Field("toegestane_maximum_massa_voertuig", DataType.Number),
  /**
  * ### Tweede kleur
  *
  * **Type**: Text
  *
  * **Database Column Name**: `tweede_kleur`
  */
  TweedeKleur: Field("tweede_kleur", DataType.Text),
  /**
  * ### Type
  *
  * **Type**: Text
  *
  * **Database Column Name**: `type`
  */
  Type: Field("type", DataType.Text),
  /**
  * ### Type gasinstallatie
  *
  * **Type**: Text
  *
  * **Database Column Name**: `type_gasinstallatie`
  */
  TypeGasinstallatie: Field("type_gasinstallatie", DataType.Text),
  /**
  * ### Type remsysteem voertuig code
  *
  * **Type**: Text
  *
  * **Database Column Name**: `type_remsysteem_voertuig_code`
  */
  TypeRemsysteemVoertuigCode: Field("type_remsysteem_voertuig_code", DataType.Text),
  /**
  * ### Typegoedkeuringsnummer
  *
  * **Type**: Text
  *
  * **Database Column Name**: `typegoedkeuringsnummer`
  */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
  * ### Uitvoering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `uitvoering`
  */
  Uitvoering: Field("uitvoering", DataType.Text),
  /**
  * ### Variant
  *
  * **Type**: Text
  *
  * **Database Column Name**: `variant`
  */
  Variant: Field("variant", DataType.Text),
  /**
  * ### Verlengde cabine indicator
  *
  * **Type**: Text
  *
  * **Database Column Name**: `verl_cab_ind`
  */
  VerlCabInd: Field("verl_cab_ind", DataType.Text),
  /**
  * ### Vermogen massarijklaar
  *
  * **Type**: Number
  *
  * **Database Column Name**: `vermogen_massarijklaar`
  */
  VermogenMassarijklaar: Field("vermogen_massarijklaar", DataType.Number),
  /**
  * ### Verticale belasting koppelpunt getrokken voertuig
  *
  * **Type**: Number
  *
  * **Database Column Name**: `verticale_belasting_koppelpunt_getrokken_voertuig`
  */
  VerticaleBelastingKoppelpuntGetrokkenVoertuig: Field("verticale_belasting_koppelpunt_getrokken_voertuig", DataType.Number),
  /**
  * ### Vervaldatum APK
  *
  * **Type**: Number
  *
  * **Database Column Name**: `vervaldatum_apk`
  */
  VervaldatumApk: Field("vervaldatum_apk", DataType.Number),
  /**
  * ### Vervaldatum APK DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `vervaldatum_apk_dt`
  */
  VervaldatumApkDt: Field("vervaldatum_apk_dt", DataType.FloatingTimestamp),
  /**
  * ### Vervaldatum tachograaf
  *
  * **Type**: Number
  *
  * **Database Column Name**: `vervaldatum_tachograaf`
  */
  VervaldatumTachograaf: Field("vervaldatum_tachograaf", DataType.Number),
  /**
  * ### Vervaldatum tachograaf DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `vervaldatum_tachograaf_dt`
  */
  VervaldatumTachograafDt: Field("vervaldatum_tachograaf_dt", DataType.FloatingTimestamp),
  /**
  * ### Voertuigsoort
  *
  * **Type**: Text
  *
  * **Database Column Name**: `voertuigsoort`
  */
  Voertuigsoort: Field("voertuigsoort", DataType.Text),
  /**
  * ### Volgnummer wijziging EU typegoedkeuring
  *
  * **Type**: Number
  *
  * **Database Column Name**: `volgnummer_wijziging_eu_typegoedkeuring`
  */
  VolgnummerWijzigingEuTypegoedkeuring: Field("volgnummer_wijziging_eu_typegoedkeuring", DataType.Number),
  /**
  * ### Wacht op keuren
  *
  * **Type**: Text
  *
  * **Database Column Name**: `wacht_op_keuren`
  */
  WachtOpKeuren: Field("wacht_op_keuren", DataType.Text),
  /**
  * ### WAM verzekerd
  *
  * **Type**: Text
  *
  * **Database Column Name**: `wam_verzekerd`
  */
  WamVerzekerd: Field("wam_verzekerd", DataType.Text),
  /**
  * ### Wielbasis
  *
  * **Type**: Number
  *
  * **Database Column Name**: `wielbasis`
  */
  Wielbasis: Field("wielbasis", DataType.Number),
  /**
  * ### Wielbasis voertuig maximum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `wielbasis_voertuig_maximum`
  */
  WielbasisVoertuigMaximum: Field("wielbasis_voertuig_maximum", DataType.Number),
  /**
  * ### Wielbasis voertuig minimum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `wielbasis_voertuig_minimum`
  */
  WielbasisVoertuigMinimum: Field("wielbasis_voertuig_minimum", DataType.Number),
  /**
  * ### Zuinigheidsclassificatie
  *
  * **Type**: Text
  *
  * **Database Column Name**: `zuinigheidsclassificatie`
  */
  Zuinigheidsclassificatie: Field("zuinigheidsclassificatie", DataType.Text),
};

export const Info = {
  fields: [
    "AanhangwagenAutonoomGeremd",
    "AanhangwagenMiddenasGeremd",
    "AantalCilinders",
    "AantalDeuren",
    "AantalRolstoelplaatsen",
    "AantalStaanplaatsen",
    "AantalWielen",
    "AantalZitplaatsen",
    "AerodynVoorz",
    "AfstandHartKoppelingTotAchterzijdeVoertuig",
    "AfstandVoorzijdeVoertuigTotHartKoppeling",
    "AfwijkendeMaximumSnelheid",
    "ApiGekentekendeVoertuigenAssen",
    "ApiGekentekendeVoertuigenBrandstof",
    "ApiGekentekendeVoertuigenCarrosserie",
    "ApiGekentekendeVoertuigenCarrosserieSpecifiek",
    "ApiGekentekendeVoertuigenVoertuigklasse",
    "Breedte",
    "BreedteVoertuigMaximum",
    "BreedteVoertuigMinimum",
    "BrutoBpm",
    "Catalogusprijs",
    "Cilinderinhoud",
    "CodeToelichtingTellerstandoordeel",
    "DatumEersteTenaamstellingInNederland",
    "DatumEersteTenaamstellingInNederlandDt",
    "DatumEersteToelating",
    "DatumEersteToelatingDt",
    "DatumTenaamstelling",
    "DatumTenaamstellingDt",
    "EersteKleur",
    "EuropeseUitvoeringcategorieToevoeging",
    "EuropeseVoertuigcategorie",
    "EuropeseVoertuigcategorieToevoeging",
    "ExportIndicator",
    "GemLadingWrde",
    "Handelsbenaming",
    "HoogteVoertuig",
    "HoogteVoertuigMaximum",
    "HoogteVoertuigMinimum",
    "Inrichting",
    "JaarLaatsteRegistratieTellerstand",
    "Kenteken",
    "Laadvermogen",
    "Lengte",
    "LengteVoertuigMaximum",
    "LengteVoertuigMinimum",
    "MassaAltAandr",
    "MassaBedrijfsklaarMaximaal",
    "MassaBedrijfsklaarMinimaal",
    "MassaLedigVoertuig",
    "MassaRijklaar",
    "MaximaleConstructiesnelheid",
    "MaximumLastOnderDeVoorasSenTezamenKoppeling",
    "MaximumMassaSamenstelling",
    "MaximumMassaTechnischMaximaal",
    "MaximumMassaTechnischMinimaal",
    "MaximumMassaTrekkenOngeremd",
    "MaximumOndersteunendeSnelheid",
    "MaximumTrekkenMassaGeremd",
    "Merk",
    "OpenstaandeTerugroepactieIndicator",
    "OpleggerGeremd",
    "PlaatsChassisnummer",
    "RegistratieDatumGoedkeuringAfschrijvingsmomentBpm",
    "RegistratieDatumGoedkeuringAfschrijvingsmomentBpmDt",
    "Rupsonderstelconfiguratiecode",
    "SubcategorieNederland",
    "TaxiIndicator",
    "TechnischToelaatbaarMassaKoppelpunt",
    "TechnischeMaxMassaVoertuig",
    "Tellerstandoordeel",
    "TenaamstellenMogelijk",
    "ToegestaneMaximumMassaVoertuig",
    "TweedeKleur",
    "Type",
    "TypeGasinstallatie",
    "TypeRemsysteemVoertuigCode",
    "Typegoedkeuringsnummer",
    "Uitvoering",
    "Variant",
    "VerlCabInd",
    "VermogenMassarijklaar",
    "VerticaleBelastingKoppelpuntGetrokkenVoertuig",
    "VervaldatumApk",
    "VervaldatumApkDt",
    "VervaldatumTachograaf",
    "VervaldatumTachograafDt",
    "Voertuigsoort",
    "VolgnummerWijzigingEuTypegoedkeuring",
    "WachtOpKeuren",
    "WamVerzekerd",
    "Wielbasis",
    "WielbasisVoertuigMaximum",
    "WielbasisVoertuigMinimum",
    "Zuinigheidsclassificatie",
  ],
  dataset: "m9d7-ebf2",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen",
  provider_name: "KentekenVoertuigen",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/m9d7-ebf2",
}

/**
 * ### Open Data RDW: Gekentekende_voertuigen
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/m9d7-ebf2
 *
 * **Dataset ID:** m9d7-ebf2
 *
 * **Category:** Voertuigen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gekentekende_voertuigen dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.AanhangwagenAutonoomGeremd, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<KentekenVoertuigen_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const KentekenVoertuigen: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<KentekenVoertuigen_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
