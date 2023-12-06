// *******************************************************
//
// Name: Open Data RDW: Basisgegevens EEG Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Basisgegevens-EEG-Uitvoering/wx3j-69ie
// Permalink: https://opendata.rdw.nl/d/wx3j-69ie
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Basisgegevens EEG Uitvoering
 */
export interface ResponseData {
  /**
   * ### 24GHz_kortbereik radar
   *
   * **Type**: Text
   */
  _24ghz_kortbereik_radar?: string;
  /**
   * ### Aant zitpl stilst vrtg bovengrens
   *
   * **Type**: Number
   */
  aant_zitpl_stilst_vrtg_bovengrens?: string;
  /**
   * ### Aant zitpl stilst vrtg ondergrens
   *
   * **Type**: Number
   */
  aant_zitpl_stilst_vrtg_ondergrens?: string;
  /**
   * ### Aantal aangedreven assen
   *
   * **Type**: Number
   */
  aantal_aangedreven_assen?: string;
  /**
   * ### Aantal deuren bovengrens
   *
   * **Type**: Number
   */
  aantal_deuren_bovengrens?: string;
  /**
   * ### Aantal deuren ondergrens
   *
   * **Type**: Number
   */
  aantal_deuren_ondergrens?: string;
  /**
   * ### Aantal passagier zittend bovengrens
   *
   * **Type**: Number
   */
  aantal_passagier_zittend_bovengrens?: string;
  /**
   * ### Aantal passagier zittend ondergrens
   *
   * **Type**: Number
   */
  aantal_passagier_zittend_ondergrens?: string;
  /**
   * ### Aantal passagiers bovengrens
   *
   * **Type**: Number
   */
  aantal_passagiers_bovengrens?: string;
  /**
   * ### Aantal passagiers ondergrens
   *
   * **Type**: Number
   */
  aantal_passagiers_ondergrens?: string;
  /**
   * ### Aantal rolstoel plaats bovengrens
   *
   * **Type**: Number
   */
  aantal_rolstoel_plaats_bovengrens?: string;
  /**
   * ### Aantal rolstoel plaats ondergrens
   *
   * **Type**: Number
   */
  aantal_rolstoel_plaats_ondergrens?: string;
  /**
   * ### Aantal wielen
   *
   * **Type**: Number
   */
  aantal_wielen?: string;
  /**
   * ### Aantal zitplaatsen bovengrens
   *
   * **Type**: Number
   */
  aantal_zitplaatsen_bovengrens?: string;
  /**
   * ### Aantal zitplaatsen ondergrens
   *
   * **Type**: Number
   */
  aantal_zitplaatsen_ondergrens?: string;
  /**
   * ### Afst hart koppeling as bovengrens
   *
   * **Type**: Number
   */
  afst_hart_koppeling_as_bovengrens?: string;
  /**
   * ### Afst hart koppeling as ondergrens
   *
   * **Type**: Number
   */
  afst_hart_koppeling_as_ondergrens?: string;
  /**
   * ### Begindatum restant voorraad
   *
   * **Type**: Number
   */
  begindatum_restant_voorraad?: string;
  /**
   * ### Begindatum restant voorraad_DT
   *
   * **Type**: Calendar date
   */
  begindatum_restant_voorraad_dt?: string;
  /**
   * ### Begindatum uitvoering
   *
   * **Type**: Number
   */
  begindatum_uitvoering?: string;
  /**
   * ### Begindatum uitvoering_DT
   *
   * **Type**: Calendar date
   */
  begindatum_uitvoering_dt?: string;
  /**
   * ### Breedte voertuig(uitvoering) bovengrens
   *
   * **Type**: Number
   */
  breedte_voertuig_uitvoering_bovengrens?: string;
  /**
   * ### Breedte voertuig(uitvoering) ondergrens
   *
   * **Type**: Number
   */
  breedte_voertuig_uitvoering_ondergrens?: string;
  /**
   * ### Code status intrekking uitvoering
   *
   * **Type**: Text
   */
  code_status_intrekking_uitvoering?: string;
  /**
   * ### Compleet voertuig indicator
   *
   * **Type**: Text
   */
  compleet_voertuig_indicator?: string;
  /**
   * ### Datum status wijziging
   *
   * **Type**: Number
   */
  datum_status_wijziging?: string;
  /**
   * ### Datum status wijziging_DT
   *
   * **Type**: Calendar date
   */
  datum_status_wijziging_dt?: string;
  /**
   * ### EEG uitvoering cat toevoeging
   *
   * **Type**: Text
   */
  eeg_uitvoering_cat_toevoeging?: string;
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
   * ### Einddatum restant voorraad
   *
   * **Type**: Number
   */
  eindatum_restant_voorraad?: string;
  /**
   * ### Einddatum restant voorraad_DT
   *
   * **Type**: Calendar date
   */
  einddatum_restant_voorraad_dt?: string;
  /**
   * ### Einddatum uitvoering
   *
   * **Type**: Number
   */
  einddatum_uitvoering?: string;
  /**
   * ### Einddatum uitvoering_DT
   *
   * **Type**: Calendar date
   */
  einddatum_uitvoering_dt?: string;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  eu_type_goedkeuringssleutel?: string;
  /**
   * ### Eur. Codering carrosserietype
   *
   * **Type**: Text
   */
  eur_codering_carrosserietype?: string;
  /**
   * ### Handelsbenaming
   *
   * **Type**: Text
   */
  handelsbenaming?: string;
  /**
   * ### Hoogte voertuig(uitvoering) bovengrens
   *
   * **Type**: Number
   */
  hoogte_voertuig_uitvoering_bovengrens?: string;
  /**
   * ### Hoogte voertuig(uitvoering) ondergrens
   *
   * **Type**: Number
   */
  hoogte_voertuig_uitvoering_ondergrens?: string;
  /**
   * ### Inhoud brandstoftank
   *
   * **Type**: Number
   */
  inhoud_brandstoftank?: string;
  /**
   * ### Inrichtingscode
   *
   * **Type**: Number
   */
  inrichtingscode?: string;
  /**
   * ### Intrekdatum uitvoering
   *
   * **Type**: Number
   */
  intrekdatum_uitvoering?: string;
  /**
   * ### Intrekdatum uitvoering_DT
   *
   * **Type**: Calendar date
   */
  intrekdatum_uitvoering_dt?: string;
  /**
   * ### Kant van het stuur
   *
   * **Type**: Text
   */
  kant_van_het_stuur?: string;
  /**
   * ### Lengte laadruimte bovengrens
   *
   * **Type**: Number
   */
  lengte_laadruimte_bovengrens?: string;
  /**
   * ### Lengte laadruimte ondergrens
   *
   * **Type**: Number
   */
  lengte_laadruimte_ondergrens?: string;
  /**
   * ### Lengte voertuig(uitvoering) bovengrens
   *
   * **Type**: Number
   */
  lengte_voertuig_uitvoering_bovengrens?: string;
  /**
   * ### Lengte voertuig(uitvoering) ondergrens
   *
   * **Type**: Number
   */
  lengte_voertuig_uitvoering_ondergrens?: string;
  /**
   * ### Links / Rechts rijdend
   *
   * **Type**: Text
   */
  links_rechts_rijdend?: string;
  /**
   * ### Massa bedrijfsklaar toestand bovengrens
   *
   * **Type**: Number
   */
  massa_bedrijfsklaar_toestand_bovengrens?: string;
  /**
   * ### Massa bedrijfsklaar toestand ondergrens
   *
   * **Type**: Number
   */
  massa_bedrijfsklaar_toestand_ondergrens?: string;
  /**
   * ### Massa leeg voertuig bovengrens
   *
   * **Type**: Number
   */
  massa_leeg_voertuig_bovengrens?: string;
  /**
   * ### Massa leeg voertuig ondergrens
   *
   * **Type**: Number
   */
  massa_leeg_voertuig_ondergrens?: string;
  /**
   * ### Max breedte voertuig bovengrens
   *
   * **Type**: Number
   */
  max_breedte_voertuig_bovengrens?: string;
  /**
   * ### Max breedte voertuig ondergrens
   *
   * **Type**: Number
   */
  max_breedte_voertuig_ondergrens?: string;
  /**
   * ### Max constructie snelheid bovengrens
   *
   * **Type**: Number
   */
  max_constructie_snelheid_bovengrens?: string;
  /**
   * ### Max constructie snelheid ondergrens
   *
   * **Type**: Number
   */
  max_constructie_snelheid_ondergrens?: string;
  /**
   * ### Max lengte voertuig bovengrens
   *
   * **Type**: Number
   */
  max_lengte_voertuig_bovengrens?: string;
  /**
   * ### Max lengte voertuig ondergrens
   *
   * **Type**: Number
   */
  max_lengte_voertuig_ondergrens?: string;
  /**
   * ### Max massa geremd bovengrens
   *
   * **Type**: Number
   */
  max_massa_geremd_bovengrens?: string;
  /**
   * ### Max massa geremd ondergrens
   *
   * **Type**: Number
   */
  max_massa_geremd_ondergrens?: string;
  /**
   * ### Max massa ongeremd bovengrens
   *
   * **Type**: Number
   */
  max_massa_ongeremd_bovengrens?: string;
  /**
   * ### Max massa ongeremd ondergrens
   *
   * **Type**: Number
   */
  max_massa_ongeremd_ondergrens?: string;
  /**
   * ### Max massa samenstel bovengrens
   *
   * **Type**: Number
   */
  max_massa_samenstel_bovengrens?: string;
  /**
   * ### Max massa samenstel ondergrens
   *
   * **Type**: Number
   */
  max_massa_samenstel_ondergrens?: string;
  /**
   * ### Max massa voertuig bovengrens
   *
   * **Type**: Number
   */
  max_massa_voertuig_bovengrens?: string;
  /**
   * ### Max massa voertuig ondergrens
   *
   * **Type**: Number
   */
  max_massa_voertuig_ondergrens?: string;
  /**
   * ### Max massa vrtg techn bovengrens
   *
   * **Type**: Number
   */
  max_massa_vrtg_techn_bovengrens?: string;
  /**
   * ### Max massa vrtg techn ondergrens
   *
   * **Type**: Number
   */
  max_massa_vrtg_techn_ondergrens?: string;
  /**
   * ### Max. ondersteunde snelheid
   *
   * **Type**: Number
   */
  max_ondersteunde_snelheid?: string;
  /**
   * ### Max ondersteuning snelheid bovengrens
   *
   * **Type**: Number
   */
  max_ondersteuning_snelheid_bovengrens?: string;
  /**
   * ### Max ondersteuning snelheid ondergrens
   *
   * **Type**: Number
   */
  max_ondersteuning_snelheid_ondergrens?: string;
  /**
   * ### Min massa voertuig
   *
   * **Type**: Number
   */
  min_massa_voertuig?: string;
  /**
   * ### Status voertiug kentekening
   *
   * **Type**: Text
   */
  status_voertiug_kentekening?: string;
  /**
   * ### Techn max last koppelpunt bovengrens
   *
   * **Type**: Number
   */
  techn_max_last_koppelpunt_bovengrens?: string;
  /**
   * ### Techn max last koppelpunt ondergrens
   *
   * **Type**: Number
   */
  techn_max_last_koppelpunt_ondergrens?: string;
  /**
   * ### Techn max massa autonoom bovengrens
   *
   * **Type**: Number
   */
  techn_max_massa_autonoom_bovengrens?: string;
  /**
   * ### Techn max massa autonoom ondergrens
   *
   * **Type**: Number
   */
  techn_max_massa_autonoom_ondergrens?: string;
  /**
   * ### Techn max massa middenas bovengrens
   *
   * **Type**: Number
   */
  techn_max_massa_middenas_bovengrens?: string;
  /**
   * ### Techn max massa middenas ondergrens
   *
   * **Type**: Number
   */
  techn_max_massa_middenas_ondergrens?: string;
  /**
   * ### Techn max massa oplegger bovengrens
   *
   * **Type**: Number
   */
  techn_max_massa_oplegger_bovengrens?: string;
  /**
   * ### Techn max massa oplegger ondergrens
   *
   * **Type**: Number
   */
  techn_max_massa_oplegger_ondergrens?: string;
  /**
   * ### Techn max massa samenst bovengrens
   *
   * **Type**: Number
   */
  techn_max_massa_samenst_bovengrens?: string;
  /**
   * ### Techn max massa samenst ondergrens
   *
   * **Type**: Number
   */
  techn_max_massa_samenst_ondergrens?: string;
  /**
   * ### Tweede brandstofcode voertuig
   *
   * **Type**: Text
   */
  tweede_brandstofcode_voertuig?: string;
  /**
   * ### Uitvoering registratie datum
   *
   * **Type**: Number
   */
  uitvoering_registratie_datum?: string;
  /**
   * ### Uitvoering registratie datum_DT
   *
   * **Type**: Calendar date
   */
  uitvoering_registratie_datum_dt?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
  /**
   * ### Variant status
   *
   * **Type**: Text
   */
  variant_status?: string;
  /**
   * ### Wielbasis bovengrens
   *
   * **Type**: Number
   */
  wielbais_bovengrens?: string;
  /**
   * ### Wielbasis ondergrens
   *
   * **Type**: Number
   */
  wielbasis_ondergrens?: string;
  /**
   * ### Zelfdragende carrosserie
   *
   * **Type**: Text
   */
  zelfdragende_carrosserie?: string;
}

/**
 * Fieldnames for **BasisgegevensEegUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``N24ghzKortbereikRadar`` | ``_24ghz_kortbereik_radar`` | _Text_ |
 * | ``AantZitplStilstVrtgBovengrens`` | ``aant_zitpl_stilst_vrtg_bovengrens`` | _Number_ |
 * | ``AantZitplStilstVrtgOndergrens`` | ``aant_zitpl_stilst_vrtg_ondergrens`` | _Number_ |
 * | ``AantalAangedrevenAssen`` | ``aantal_aangedreven_assen`` | _Number_ |
 * | ``AantalDeurenBovengrens`` | ``aantal_deuren_bovengrens`` | _Number_ |
 * | ``AantalDeurenOndergrens`` | ``aantal_deuren_ondergrens`` | _Number_ |
 * | ``AantalPassagierZittendBovengrens`` | ``aantal_passagier_zittend_bovengrens`` | _Number_ |
 * | ``AantalPassagierZittendOndergrens`` | ``aantal_passagier_zittend_ondergrens`` | _Number_ |
 * | ``AantalPassagiersBovengrens`` | ``aantal_passagiers_bovengrens`` | _Number_ |
 * | ``AantalPassagiersOndergrens`` | ``aantal_passagiers_ondergrens`` | _Number_ |
 * | ``AantalRolstoelPlaatsBovengrens`` | ``aantal_rolstoel_plaats_bovengrens`` | _Number_ |
 * | ``AantalRolstoelPlaatsOndergrens`` | ``aantal_rolstoel_plaats_ondergrens`` | _Number_ |
 * | ``AantalWielen`` | ``aantal_wielen`` | _Number_ |
 * | ``AantalZitplaatsenBovengrens`` | ``aantal_zitplaatsen_bovengrens`` | _Number_ |
 * | ``AantalZitplaatsenOndergrens`` | ``aantal_zitplaatsen_ondergrens`` | _Number_ |
 * | ``AfstHartKoppelingAsBovengrens`` | ``afst_hart_koppeling_as_bovengrens`` | _Number_ |
 * | ``AfstHartKoppelingAsOndergrens`` | ``afst_hart_koppeling_as_ondergrens`` | _Number_ |
 * | ``BegindatumRestantVoorraad`` | ``begindatum_restant_voorraad`` | _Number_ |
 * | ``BegindatumRestantVoorraadDt`` | ``begindatum_restant_voorraad_dt`` | _Calendar date_ |
 * | ``BegindatumUitvoering`` | ``begindatum_uitvoering`` | _Number_ |
 * | ``BegindatumUitvoeringDt`` | ``begindatum_uitvoering_dt`` | _Calendar date_ |
 * | ``BreedteVoertuigUitvoeringBovengrens`` | ``breedte_voertuig_uitvoering_bovengrens`` | _Number_ |
 * | ``BreedteVoertuigUitvoeringOndergrens`` | ``breedte_voertuig_uitvoering_ondergrens`` | _Number_ |
 * | ``CodeStatusIntrekkingUitvoering`` | ``code_status_intrekking_uitvoering`` | _Text_ |
 * | ``CompleetVoertuigIndicator`` | ``compleet_voertuig_indicator`` | _Text_ |
 * | ``DatumStatusWijziging`` | ``datum_status_wijziging`` | _Number_ |
 * | ``DatumStatusWijzigingDt`` | ``datum_status_wijziging_dt`` | _Calendar date_ |
 * | ``EegUitvoeringCatToevoeging`` | ``eeg_uitvoering_cat_toevoeging`` | _Text_ |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EindatumRestantVoorraad`` | ``eindatum_restant_voorraad`` | _Number_ |
 * | ``EinddatumRestantVoorraadDt`` | ``einddatum_restant_voorraad_dt`` | _Calendar date_ |
 * | ``EinddatumUitvoering`` | ``einddatum_uitvoering`` | _Number_ |
 * | ``EinddatumUitvoeringDt`` | ``einddatum_uitvoering_dt`` | _Calendar date_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``EurCoderingCarrosserietype`` | ``eur_codering_carrosserietype`` | _Text_ |
 * | ``Handelsbenaming`` | ``handelsbenaming`` | _Text_ |
 * | ``HoogteVoertuigUitvoeringBovengrens`` | ``hoogte_voertuig_uitvoering_bovengrens`` | _Number_ |
 * | ``HoogteVoertuigUitvoeringOndergrens`` | ``hoogte_voertuig_uitvoering_ondergrens`` | _Number_ |
 * | ``InhoudBrandstoftank`` | ``inhoud_brandstoftank`` | _Number_ |
 * | ``Inrichtingscode`` | ``inrichtingscode`` | _Number_ |
 * | ``IntrekdatumUitvoering`` | ``intrekdatum_uitvoering`` | _Number_ |
 * | ``IntrekdatumUitvoeringDt`` | ``intrekdatum_uitvoering_dt`` | _Calendar date_ |
 * | ``KantVanHetStuur`` | ``kant_van_het_stuur`` | _Text_ |
 * | ``LengteLaadruimteBovengrens`` | ``lengte_laadruimte_bovengrens`` | _Number_ |
 * | ``LengteLaadruimteOndergrens`` | ``lengte_laadruimte_ondergrens`` | _Number_ |
 * | ``LengteVoertuigUitvoeringBovengrens`` | ``lengte_voertuig_uitvoering_bovengrens`` | _Number_ |
 * | ``LengteVoertuigUitvoeringOndergrens`` | ``lengte_voertuig_uitvoering_ondergrens`` | _Number_ |
 * | ``LinksRechtsRijdend`` | ``links_rechts_rijdend`` | _Text_ |
 * | ``MassaBedrijfsklaarToestandBovengrens`` | ``massa_bedrijfsklaar_toestand_bovengrens`` | _Number_ |
 * | ``MassaBedrijfsklaarToestandOndergrens`` | ``massa_bedrijfsklaar_toestand_ondergrens`` | _Number_ |
 * | ``MassaLeegVoertuigBovengrens`` | ``massa_leeg_voertuig_bovengrens`` | _Number_ |
 * | ``MassaLeegVoertuigOndergrens`` | ``massa_leeg_voertuig_ondergrens`` | _Number_ |
 * | ``MaxBreedteVoertuigBovengrens`` | ``max_breedte_voertuig_bovengrens`` | _Number_ |
 * | ``MaxBreedteVoertuigOndergrens`` | ``max_breedte_voertuig_ondergrens`` | _Number_ |
 * | ``MaxConstructieSnelheidBovengrens`` | ``max_constructie_snelheid_bovengrens`` | _Number_ |
 * | ``MaxConstructieSnelheidOndergrens`` | ``max_constructie_snelheid_ondergrens`` | _Number_ |
 * | ``MaxLengteVoertuigBovengrens`` | ``max_lengte_voertuig_bovengrens`` | _Number_ |
 * | ``MaxLengteVoertuigOndergrens`` | ``max_lengte_voertuig_ondergrens`` | _Number_ |
 * | ``MaxMassaGeremdBovengrens`` | ``max_massa_geremd_bovengrens`` | _Number_ |
 * | ``MaxMassaGeremdOndergrens`` | ``max_massa_geremd_ondergrens`` | _Number_ |
 * | ``MaxMassaOngeremdBovengrens`` | ``max_massa_ongeremd_bovengrens`` | _Number_ |
 * | ``MaxMassaOngeremdOndergrens`` | ``max_massa_ongeremd_ondergrens`` | _Number_ |
 * | ``MaxMassaSamenstelBovengrens`` | ``max_massa_samenstel_bovengrens`` | _Number_ |
 * | ``MaxMassaSamenstelOndergrens`` | ``max_massa_samenstel_ondergrens`` | _Number_ |
 * | ``MaxMassaVoertuigBovengrens`` | ``max_massa_voertuig_bovengrens`` | _Number_ |
 * | ``MaxMassaVoertuigOndergrens`` | ``max_massa_voertuig_ondergrens`` | _Number_ |
 * | ``MaxMassaVrtgTechnBovengrens`` | ``max_massa_vrtg_techn_bovengrens`` | _Number_ |
 * | ``MaxMassaVrtgTechnOndergrens`` | ``max_massa_vrtg_techn_ondergrens`` | _Number_ |
 * | ``MaxOndersteundeSnelheid`` | ``max_ondersteunde_snelheid`` | _Number_ |
 * | ``MaxOndersteuningSnelheidBovengrens`` | ``max_ondersteuning_snelheid_bovengrens`` | _Number_ |
 * | ``MaxOndersteuningSnelheidOndergrens`` | ``max_ondersteuning_snelheid_ondergrens`` | _Number_ |
 * | ``MinMassaVoertuig`` | ``min_massa_voertuig`` | _Number_ |
 * | ``StatusVoertiugKentekening`` | ``status_voertiug_kentekening`` | _Text_ |
 * | ``TechnMaxLastKoppelpuntBovengrens`` | ``techn_max_last_koppelpunt_bovengrens`` | _Number_ |
 * | ``TechnMaxLastKoppelpuntOndergrens`` | ``techn_max_last_koppelpunt_ondergrens`` | _Number_ |
 * | ``TechnMaxMassaAutonoomBovengrens`` | ``techn_max_massa_autonoom_bovengrens`` | _Number_ |
 * | ``TechnMaxMassaAutonoomOndergrens`` | ``techn_max_massa_autonoom_ondergrens`` | _Number_ |
 * | ``TechnMaxMassaMiddenasBovengrens`` | ``techn_max_massa_middenas_bovengrens`` | _Number_ |
 * | ``TechnMaxMassaMiddenasOndergrens`` | ``techn_max_massa_middenas_ondergrens`` | _Number_ |
 * | ``TechnMaxMassaOpleggerBovengrens`` | ``techn_max_massa_oplegger_bovengrens`` | _Number_ |
 * | ``TechnMaxMassaOpleggerOndergrens`` | ``techn_max_massa_oplegger_ondergrens`` | _Number_ |
 * | ``TechnMaxMassaSamenstBovengrens`` | ``techn_max_massa_samenst_bovengrens`` | _Number_ |
 * | ``TechnMaxMassaSamenstOndergrens`` | ``techn_max_massa_samenst_ondergrens`` | _Number_ |
 * | ``TweedeBrandstofcodeVoertuig`` | ``tweede_brandstofcode_voertuig`` | _Text_ |
 * | ``UitvoeringRegistratieDatum`` | ``uitvoering_registratie_datum`` | _Number_ |
 * | ``UitvoeringRegistratieDatumDt`` | ``uitvoering_registratie_datum_dt`` | _Calendar date_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 * | ``VariantStatus`` | ``variant_status`` | _Text_ |
 * | ``WielbaisBovengrens`` | ``wielbais_bovengrens`` | _Number_ |
 * | ``WielbasisOndergrens`` | ``wielbasis_ondergrens`` | _Number_ |
 * | ``ZelfdragendeCarrosserie`` | ``zelfdragende_carrosserie`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### 24GHz_kortbereik radar
   *
   * **Type**: Text
   */
   N24ghzKortbereikRadar: FieldObject<DataType.Text>;
  /**
   * ### Aant zitpl stilst vrtg bovengrens
   *
   * **Type**: Number
   */
   AantZitplStilstVrtgBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Aant zitpl stilst vrtg ondergrens
   *
   * **Type**: Number
   */
   AantZitplStilstVrtgOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal aangedreven assen
   *
   * **Type**: Number
   */
   AantalAangedrevenAssen: FieldObject<DataType.Number>;
  /**
   * ### Aantal deuren bovengrens
   *
   * **Type**: Number
   */
   AantalDeurenBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal deuren ondergrens
   *
   * **Type**: Number
   */
   AantalDeurenOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal passagier zittend bovengrens
   *
   * **Type**: Number
   */
   AantalPassagierZittendBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal passagier zittend ondergrens
   *
   * **Type**: Number
   */
   AantalPassagierZittendOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal passagiers bovengrens
   *
   * **Type**: Number
   */
   AantalPassagiersBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal passagiers ondergrens
   *
   * **Type**: Number
   */
   AantalPassagiersOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal rolstoel plaats bovengrens
   *
   * **Type**: Number
   */
   AantalRolstoelPlaatsBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal rolstoel plaats ondergrens
   *
   * **Type**: Number
   */
   AantalRolstoelPlaatsOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal wielen
   *
   * **Type**: Number
   */
   AantalWielen: FieldObject<DataType.Number>;
  /**
   * ### Aantal zitplaatsen bovengrens
   *
   * **Type**: Number
   */
   AantalZitplaatsenBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Aantal zitplaatsen ondergrens
   *
   * **Type**: Number
   */
   AantalZitplaatsenOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Afst hart koppeling as bovengrens
   *
   * **Type**: Number
   */
   AfstHartKoppelingAsBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Afst hart koppeling as ondergrens
   *
   * **Type**: Number
   */
   AfstHartKoppelingAsOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Begindatum restant voorraad
   *
   * **Type**: Number
   */
   BegindatumRestantVoorraad: FieldObject<DataType.Number>;
  /**
   * ### Begindatum restant voorraad_DT
   *
   * **Type**: Calendar date
   */
   BegindatumRestantVoorraadDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Begindatum uitvoering
   *
   * **Type**: Number
   */
   BegindatumUitvoering: FieldObject<DataType.Number>;
  /**
   * ### Begindatum uitvoering_DT
   *
   * **Type**: Calendar date
   */
   BegindatumUitvoeringDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Breedte voertuig(uitvoering) bovengrens
   *
   * **Type**: Number
   */
   BreedteVoertuigUitvoeringBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Breedte voertuig(uitvoering) ondergrens
   *
   * **Type**: Number
   */
   BreedteVoertuigUitvoeringOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Code status intrekking uitvoering
   *
   * **Type**: Text
   */
   CodeStatusIntrekkingUitvoering: FieldObject<DataType.Text>;
  /**
   * ### Compleet voertuig indicator
   *
   * **Type**: Text
   */
   CompleetVoertuigIndicator: FieldObject<DataType.Text>;
  /**
   * ### Datum status wijziging
   *
   * **Type**: Number
   */
   DatumStatusWijziging: FieldObject<DataType.Number>;
  /**
   * ### Datum status wijziging_DT
   *
   * **Type**: Calendar date
   */
   DatumStatusWijzigingDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### EEG uitvoering cat toevoeging
   *
   * **Type**: Text
   */
   EegUitvoeringCatToevoeging: FieldObject<DataType.Text>;
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
   * ### Einddatum restant voorraad
   *
   * **Type**: Number
   */
   EindatumRestantVoorraad: FieldObject<DataType.Number>;
  /**
   * ### Einddatum restant voorraad_DT
   *
   * **Type**: Calendar date
   */
   EinddatumRestantVoorraadDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Einddatum uitvoering
   *
   * **Type**: Number
   */
   EinddatumUitvoering: FieldObject<DataType.Number>;
  /**
   * ### Einddatum uitvoering_DT
   *
   * **Type**: Calendar date
   */
   EinddatumUitvoeringDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
   EuTypeGoedkeuringssleutel: FieldObject<DataType.Text>;
  /**
   * ### Eur. Codering carrosserietype
   *
   * **Type**: Text
   */
   EurCoderingCarrosserietype: FieldObject<DataType.Text>;
  /**
   * ### Handelsbenaming
   *
   * **Type**: Text
   */
   Handelsbenaming: FieldObject<DataType.Text>;
  /**
   * ### Hoogte voertuig(uitvoering) bovengrens
   *
   * **Type**: Number
   */
   HoogteVoertuigUitvoeringBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Hoogte voertuig(uitvoering) ondergrens
   *
   * **Type**: Number
   */
   HoogteVoertuigUitvoeringOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Inhoud brandstoftank
   *
   * **Type**: Number
   */
   InhoudBrandstoftank: FieldObject<DataType.Number>;
  /**
   * ### Inrichtingscode
   *
   * **Type**: Number
   */
   Inrichtingscode: FieldObject<DataType.Number>;
  /**
   * ### Intrekdatum uitvoering
   *
   * **Type**: Number
   */
   IntrekdatumUitvoering: FieldObject<DataType.Number>;
  /**
   * ### Intrekdatum uitvoering_DT
   *
   * **Type**: Calendar date
   */
   IntrekdatumUitvoeringDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Kant van het stuur
   *
   * **Type**: Text
   */
   KantVanHetStuur: FieldObject<DataType.Text>;
  /**
   * ### Lengte laadruimte bovengrens
   *
   * **Type**: Number
   */
   LengteLaadruimteBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Lengte laadruimte ondergrens
   *
   * **Type**: Number
   */
   LengteLaadruimteOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Lengte voertuig(uitvoering) bovengrens
   *
   * **Type**: Number
   */
   LengteVoertuigUitvoeringBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Lengte voertuig(uitvoering) ondergrens
   *
   * **Type**: Number
   */
   LengteVoertuigUitvoeringOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Links / Rechts rijdend
   *
   * **Type**: Text
   */
   LinksRechtsRijdend: FieldObject<DataType.Text>;
  /**
   * ### Massa bedrijfsklaar toestand bovengrens
   *
   * **Type**: Number
   */
   MassaBedrijfsklaarToestandBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Massa bedrijfsklaar toestand ondergrens
   *
   * **Type**: Number
   */
   MassaBedrijfsklaarToestandOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Massa leeg voertuig bovengrens
   *
   * **Type**: Number
   */
   MassaLeegVoertuigBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Massa leeg voertuig ondergrens
   *
   * **Type**: Number
   */
   MassaLeegVoertuigOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max breedte voertuig bovengrens
   *
   * **Type**: Number
   */
   MaxBreedteVoertuigBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max breedte voertuig ondergrens
   *
   * **Type**: Number
   */
   MaxBreedteVoertuigOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max constructie snelheid bovengrens
   *
   * **Type**: Number
   */
   MaxConstructieSnelheidBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max constructie snelheid ondergrens
   *
   * **Type**: Number
   */
   MaxConstructieSnelheidOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max lengte voertuig bovengrens
   *
   * **Type**: Number
   */
   MaxLengteVoertuigBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max lengte voertuig ondergrens
   *
   * **Type**: Number
   */
   MaxLengteVoertuigOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa geremd bovengrens
   *
   * **Type**: Number
   */
   MaxMassaGeremdBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa geremd ondergrens
   *
   * **Type**: Number
   */
   MaxMassaGeremdOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa ongeremd bovengrens
   *
   * **Type**: Number
   */
   MaxMassaOngeremdBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa ongeremd ondergrens
   *
   * **Type**: Number
   */
   MaxMassaOngeremdOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa samenstel bovengrens
   *
   * **Type**: Number
   */
   MaxMassaSamenstelBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa samenstel ondergrens
   *
   * **Type**: Number
   */
   MaxMassaSamenstelOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa voertuig bovengrens
   *
   * **Type**: Number
   */
   MaxMassaVoertuigBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa voertuig ondergrens
   *
   * **Type**: Number
   */
   MaxMassaVoertuigOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa vrtg techn bovengrens
   *
   * **Type**: Number
   */
   MaxMassaVrtgTechnBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max massa vrtg techn ondergrens
   *
   * **Type**: Number
   */
   MaxMassaVrtgTechnOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Max. ondersteunde snelheid
   *
   * **Type**: Number
   */
   MaxOndersteundeSnelheid: FieldObject<DataType.Number>;
  /**
   * ### Max ondersteuning snelheid bovengrens
   *
   * **Type**: Number
   */
   MaxOndersteuningSnelheidBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Max ondersteuning snelheid ondergrens
   *
   * **Type**: Number
   */
   MaxOndersteuningSnelheidOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Min massa voertuig
   *
   * **Type**: Number
   */
   MinMassaVoertuig: FieldObject<DataType.Number>;
  /**
   * ### Status voertiug kentekening
   *
   * **Type**: Text
   */
   StatusVoertiugKentekening: FieldObject<DataType.Text>;
  /**
   * ### Techn max last koppelpunt bovengrens
   *
   * **Type**: Number
   */
   TechnMaxLastKoppelpuntBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max last koppelpunt ondergrens
   *
   * **Type**: Number
   */
   TechnMaxLastKoppelpuntOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa autonoom bovengrens
   *
   * **Type**: Number
   */
   TechnMaxMassaAutonoomBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa autonoom ondergrens
   *
   * **Type**: Number
   */
   TechnMaxMassaAutonoomOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa middenas bovengrens
   *
   * **Type**: Number
   */
   TechnMaxMassaMiddenasBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa middenas ondergrens
   *
   * **Type**: Number
   */
   TechnMaxMassaMiddenasOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa oplegger bovengrens
   *
   * **Type**: Number
   */
   TechnMaxMassaOpleggerBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa oplegger ondergrens
   *
   * **Type**: Number
   */
   TechnMaxMassaOpleggerOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa samenst bovengrens
   *
   * **Type**: Number
   */
   TechnMaxMassaSamenstBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Techn max massa samenst ondergrens
   *
   * **Type**: Number
   */
   TechnMaxMassaSamenstOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Tweede brandstofcode voertuig
   *
   * **Type**: Text
   */
   TweedeBrandstofcodeVoertuig: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering registratie datum
   *
   * **Type**: Number
   */
   UitvoeringRegistratieDatum: FieldObject<DataType.Number>;
  /**
   * ### Uitvoering registratie datum_DT
   *
   * **Type**: Calendar date
   */
   UitvoeringRegistratieDatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
   UitvoeringWijzigingsnummer: FieldObject<DataType.Number>;
  /**
   * ### Variant status
   *
   * **Type**: Text
   */
   VariantStatus: FieldObject<DataType.Text>;
  /**
   * ### Wielbasis bovengrens
   *
   * **Type**: Number
   */
   WielbaisBovengrens: FieldObject<DataType.Number>;
  /**
   * ### Wielbasis ondergrens
   *
   * **Type**: Number
   */
   WielbasisOndergrens: FieldObject<DataType.Number>;
  /**
   * ### Zelfdragende carrosserie
   *
   * **Type**: Text
   */
   ZelfdragendeCarrosserie: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  N24ghzKortbereikRadar: Field("_24ghz_kortbereik_radar", DataType.Text),
  AantZitplStilstVrtgBovengrens: Field("aant_zitpl_stilst_vrtg_bovengrens", DataType.Number),
  AantZitplStilstVrtgOndergrens: Field("aant_zitpl_stilst_vrtg_ondergrens", DataType.Number),
  AantalAangedrevenAssen: Field("aantal_aangedreven_assen", DataType.Number),
  AantalDeurenBovengrens: Field("aantal_deuren_bovengrens", DataType.Number),
  AantalDeurenOndergrens: Field("aantal_deuren_ondergrens", DataType.Number),
  AantalPassagierZittendBovengrens: Field("aantal_passagier_zittend_bovengrens", DataType.Number),
  AantalPassagierZittendOndergrens: Field("aantal_passagier_zittend_ondergrens", DataType.Number),
  AantalPassagiersBovengrens: Field("aantal_passagiers_bovengrens", DataType.Number),
  AantalPassagiersOndergrens: Field("aantal_passagiers_ondergrens", DataType.Number),
  AantalRolstoelPlaatsBovengrens: Field("aantal_rolstoel_plaats_bovengrens", DataType.Number),
  AantalRolstoelPlaatsOndergrens: Field("aantal_rolstoel_plaats_ondergrens", DataType.Number),
  AantalWielen: Field("aantal_wielen", DataType.Number),
  AantalZitplaatsenBovengrens: Field("aantal_zitplaatsen_bovengrens", DataType.Number),
  AantalZitplaatsenOndergrens: Field("aantal_zitplaatsen_ondergrens", DataType.Number),
  AfstHartKoppelingAsBovengrens: Field("afst_hart_koppeling_as_bovengrens", DataType.Number),
  AfstHartKoppelingAsOndergrens: Field("afst_hart_koppeling_as_ondergrens", DataType.Number),
  BegindatumRestantVoorraad: Field("begindatum_restant_voorraad", DataType.Number),
  BegindatumRestantVoorraadDt: Field("begindatum_restant_voorraad_dt", DataType.FloatingTimestamp),
  BegindatumUitvoering: Field("begindatum_uitvoering", DataType.Number),
  BegindatumUitvoeringDt: Field("begindatum_uitvoering_dt", DataType.FloatingTimestamp),
  BreedteVoertuigUitvoeringBovengrens: Field("breedte_voertuig_uitvoering_bovengrens", DataType.Number),
  BreedteVoertuigUitvoeringOndergrens: Field("breedte_voertuig_uitvoering_ondergrens", DataType.Number),
  CodeStatusIntrekkingUitvoering: Field("code_status_intrekking_uitvoering", DataType.Text),
  CompleetVoertuigIndicator: Field("compleet_voertuig_indicator", DataType.Text),
  DatumStatusWijziging: Field("datum_status_wijziging", DataType.Number),
  DatumStatusWijzigingDt: Field("datum_status_wijziging_dt", DataType.FloatingTimestamp),
  EegUitvoeringCatToevoeging: Field("eeg_uitvoering_cat_toevoeging", DataType.Text),
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EindatumRestantVoorraad: Field("eindatum_restant_voorraad", DataType.Number),
  EinddatumRestantVoorraadDt: Field("einddatum_restant_voorraad_dt", DataType.FloatingTimestamp),
  EinddatumUitvoering: Field("einddatum_uitvoering", DataType.Number),
  EinddatumUitvoeringDt: Field("einddatum_uitvoering_dt", DataType.FloatingTimestamp),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  EurCoderingCarrosserietype: Field("eur_codering_carrosserietype", DataType.Text),
  Handelsbenaming: Field("handelsbenaming", DataType.Text),
  HoogteVoertuigUitvoeringBovengrens: Field("hoogte_voertuig_uitvoering_bovengrens", DataType.Number),
  HoogteVoertuigUitvoeringOndergrens: Field("hoogte_voertuig_uitvoering_ondergrens", DataType.Number),
  InhoudBrandstoftank: Field("inhoud_brandstoftank", DataType.Number),
  Inrichtingscode: Field("inrichtingscode", DataType.Number),
  IntrekdatumUitvoering: Field("intrekdatum_uitvoering", DataType.Number),
  IntrekdatumUitvoeringDt: Field("intrekdatum_uitvoering_dt", DataType.FloatingTimestamp),
  KantVanHetStuur: Field("kant_van_het_stuur", DataType.Text),
  LengteLaadruimteBovengrens: Field("lengte_laadruimte_bovengrens", DataType.Number),
  LengteLaadruimteOndergrens: Field("lengte_laadruimte_ondergrens", DataType.Number),
  LengteVoertuigUitvoeringBovengrens: Field("lengte_voertuig_uitvoering_bovengrens", DataType.Number),
  LengteVoertuigUitvoeringOndergrens: Field("lengte_voertuig_uitvoering_ondergrens", DataType.Number),
  LinksRechtsRijdend: Field("links_rechts_rijdend", DataType.Text),
  MassaBedrijfsklaarToestandBovengrens: Field("massa_bedrijfsklaar_toestand_bovengrens", DataType.Number),
  MassaBedrijfsklaarToestandOndergrens: Field("massa_bedrijfsklaar_toestand_ondergrens", DataType.Number),
  MassaLeegVoertuigBovengrens: Field("massa_leeg_voertuig_bovengrens", DataType.Number),
  MassaLeegVoertuigOndergrens: Field("massa_leeg_voertuig_ondergrens", DataType.Number),
  MaxBreedteVoertuigBovengrens: Field("max_breedte_voertuig_bovengrens", DataType.Number),
  MaxBreedteVoertuigOndergrens: Field("max_breedte_voertuig_ondergrens", DataType.Number),
  MaxConstructieSnelheidBovengrens: Field("max_constructie_snelheid_bovengrens", DataType.Number),
  MaxConstructieSnelheidOndergrens: Field("max_constructie_snelheid_ondergrens", DataType.Number),
  MaxLengteVoertuigBovengrens: Field("max_lengte_voertuig_bovengrens", DataType.Number),
  MaxLengteVoertuigOndergrens: Field("max_lengte_voertuig_ondergrens", DataType.Number),
  MaxMassaGeremdBovengrens: Field("max_massa_geremd_bovengrens", DataType.Number),
  MaxMassaGeremdOndergrens: Field("max_massa_geremd_ondergrens", DataType.Number),
  MaxMassaOngeremdBovengrens: Field("max_massa_ongeremd_bovengrens", DataType.Number),
  MaxMassaOngeremdOndergrens: Field("max_massa_ongeremd_ondergrens", DataType.Number),
  MaxMassaSamenstelBovengrens: Field("max_massa_samenstel_bovengrens", DataType.Number),
  MaxMassaSamenstelOndergrens: Field("max_massa_samenstel_ondergrens", DataType.Number),
  MaxMassaVoertuigBovengrens: Field("max_massa_voertuig_bovengrens", DataType.Number),
  MaxMassaVoertuigOndergrens: Field("max_massa_voertuig_ondergrens", DataType.Number),
  MaxMassaVrtgTechnBovengrens: Field("max_massa_vrtg_techn_bovengrens", DataType.Number),
  MaxMassaVrtgTechnOndergrens: Field("max_massa_vrtg_techn_ondergrens", DataType.Number),
  MaxOndersteundeSnelheid: Field("max_ondersteunde_snelheid", DataType.Number),
  MaxOndersteuningSnelheidBovengrens: Field("max_ondersteuning_snelheid_bovengrens", DataType.Number),
  MaxOndersteuningSnelheidOndergrens: Field("max_ondersteuning_snelheid_ondergrens", DataType.Number),
  MinMassaVoertuig: Field("min_massa_voertuig", DataType.Number),
  StatusVoertiugKentekening: Field("status_voertiug_kentekening", DataType.Text),
  TechnMaxLastKoppelpuntBovengrens: Field("techn_max_last_koppelpunt_bovengrens", DataType.Number),
  TechnMaxLastKoppelpuntOndergrens: Field("techn_max_last_koppelpunt_ondergrens", DataType.Number),
  TechnMaxMassaAutonoomBovengrens: Field("techn_max_massa_autonoom_bovengrens", DataType.Number),
  TechnMaxMassaAutonoomOndergrens: Field("techn_max_massa_autonoom_ondergrens", DataType.Number),
  TechnMaxMassaMiddenasBovengrens: Field("techn_max_massa_middenas_bovengrens", DataType.Number),
  TechnMaxMassaMiddenasOndergrens: Field("techn_max_massa_middenas_ondergrens", DataType.Number),
  TechnMaxMassaOpleggerBovengrens: Field("techn_max_massa_oplegger_bovengrens", DataType.Number),
  TechnMaxMassaOpleggerOndergrens: Field("techn_max_massa_oplegger_ondergrens", DataType.Number),
  TechnMaxMassaSamenstBovengrens: Field("techn_max_massa_samenst_bovengrens", DataType.Number),
  TechnMaxMassaSamenstOndergrens: Field("techn_max_massa_samenst_ondergrens", DataType.Number),
  TweedeBrandstofcodeVoertuig: Field("tweede_brandstofcode_voertuig", DataType.Text),
  UitvoeringRegistratieDatum: Field("uitvoering_registratie_datum", DataType.Number),
  UitvoeringRegistratieDatumDt: Field("uitvoering_registratie_datum_dt", DataType.FloatingTimestamp),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
  VariantStatus: Field("variant_status", DataType.Text),
  WielbaisBovengrens: Field("wielbais_bovengrens", DataType.Number),
  WielbasisOndergrens: Field("wielbasis_ondergrens", DataType.Number),
  ZelfdragendeCarrosserie: Field("zelfdragende_carrosserie", DataType.Text),
};

export const Info = {
  fields: [
    "N24ghzKortbereikRadar",
    "AantZitplStilstVrtgBovengrens",
    "AantZitplStilstVrtgOndergrens",
    "AantalAangedrevenAssen",
    "AantalDeurenBovengrens",
    "AantalDeurenOndergrens",
    "AantalPassagierZittendBovengrens",
    "AantalPassagierZittendOndergrens",
    "AantalPassagiersBovengrens",
    "AantalPassagiersOndergrens",
    "AantalRolstoelPlaatsBovengrens",
    "AantalRolstoelPlaatsOndergrens",
    "AantalWielen",
    "AantalZitplaatsenBovengrens",
    "AantalZitplaatsenOndergrens",
    "AfstHartKoppelingAsBovengrens",
    "AfstHartKoppelingAsOndergrens",
    "BegindatumRestantVoorraad",
    "BegindatumRestantVoorraadDt",
    "BegindatumUitvoering",
    "BegindatumUitvoeringDt",
    "BreedteVoertuigUitvoeringBovengrens",
    "BreedteVoertuigUitvoeringOndergrens",
    "CodeStatusIntrekkingUitvoering",
    "CompleetVoertuigIndicator",
    "DatumStatusWijziging",
    "DatumStatusWijzigingDt",
    "EegUitvoeringCatToevoeging",
    "EegUitvoeringscode",
    "EegVariantcode",
    "EindatumRestantVoorraad",
    "EinddatumRestantVoorraadDt",
    "EinddatumUitvoering",
    "EinddatumUitvoeringDt",
    "EuTypeGoedkeuringssleutel",
    "EurCoderingCarrosserietype",
    "Handelsbenaming",
    "HoogteVoertuigUitvoeringBovengrens",
    "HoogteVoertuigUitvoeringOndergrens",
    "InhoudBrandstoftank",
    "Inrichtingscode",
    "IntrekdatumUitvoering",
    "IntrekdatumUitvoeringDt",
    "KantVanHetStuur",
    "LengteLaadruimteBovengrens",
    "LengteLaadruimteOndergrens",
    "LengteVoertuigUitvoeringBovengrens",
    "LengteVoertuigUitvoeringOndergrens",
    "LinksRechtsRijdend",
    "MassaBedrijfsklaarToestandBovengrens",
    "MassaBedrijfsklaarToestandOndergrens",
    "MassaLeegVoertuigBovengrens",
    "MassaLeegVoertuigOndergrens",
    "MaxBreedteVoertuigBovengrens",
    "MaxBreedteVoertuigOndergrens",
    "MaxConstructieSnelheidBovengrens",
    "MaxConstructieSnelheidOndergrens",
    "MaxLengteVoertuigBovengrens",
    "MaxLengteVoertuigOndergrens",
    "MaxMassaGeremdBovengrens",
    "MaxMassaGeremdOndergrens",
    "MaxMassaOngeremdBovengrens",
    "MaxMassaOngeremdOndergrens",
    "MaxMassaSamenstelBovengrens",
    "MaxMassaSamenstelOndergrens",
    "MaxMassaVoertuigBovengrens",
    "MaxMassaVoertuigOndergrens",
    "MaxMassaVrtgTechnBovengrens",
    "MaxMassaVrtgTechnOndergrens",
    "MaxOndersteundeSnelheid",
    "MaxOndersteuningSnelheidBovengrens",
    "MaxOndersteuningSnelheidOndergrens",
    "MinMassaVoertuig",
    "StatusVoertiugKentekening",
    "TechnMaxLastKoppelpuntBovengrens",
    "TechnMaxLastKoppelpuntOndergrens",
    "TechnMaxMassaAutonoomBovengrens",
    "TechnMaxMassaAutonoomOndergrens",
    "TechnMaxMassaMiddenasBovengrens",
    "TechnMaxMassaMiddenasOndergrens",
    "TechnMaxMassaOpleggerBovengrens",
    "TechnMaxMassaOpleggerOndergrens",
    "TechnMaxMassaSamenstBovengrens",
    "TechnMaxMassaSamenstOndergrens",
    "TweedeBrandstofcodeVoertuig",
    "UitvoeringRegistratieDatum",
    "UitvoeringRegistratieDatumDt",
    "UitvoeringWijzigingsnummer",
    "VariantStatus",
    "WielbaisBovengrens",
    "WielbasisOndergrens",
    "ZelfdragendeCarrosserie",
  ],
  dataset: "wx3j-69ie",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Basisgegevens EEG Uitvoering",
  provider_name: "BasisgegevensEegUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Basisgegevens-EEG-Uitvoering/wx3j-69ie",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/wx3j-69ie",
}

/**
 * ### Open Data RDW: Basisgegevens EEG Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Basisgegevens-EEG-Uitvoering/wx3j-69ie
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/wx3j-69ie
 *
 * **Dataset ID:** wx3j-69ie
 *
 * **Category:** Typegoedkeuring
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
