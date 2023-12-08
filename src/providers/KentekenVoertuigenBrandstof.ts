// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_brandstof
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773
// Permalink: https://opendata.rdw.nl/d/8ys7-d773
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_brandstof
 */
export interface KentekenVoertuigenBrandstof_ResponseData {
  /**
   * ### Actie radius enkel elektrisch stad wltp
   * 
   * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  actie_radius_enkel_elektrisch_stad_wltp?: string;
  /**
   * ### Actie radius enkel elektrisch wltp
   * 
   * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  actie_radius_enkel_elektrisch_wltp?: string;
  /**
   * ### Actie radius extern opladen stad wltp
   * 
   * Elektrisch verbruik gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder belasting van een gestandaardiseerde stadsrit.
   *
   * **Type**: Number
   */
  actie_radius_extern_opladen_stad_wltp?: string;
  /**
   * ### Actie radius extern opladen wltp
   * 
   * Actieradius gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  actie_radius_extern_opladen_wltp?: string;
  /**
   * ### Brandstof omschrijving
   *
   * **Type**: Text
   */
  brandstof_omschrijving?: string;
  /**
   * ### Brandstof verbruik gecombineerd wltp
   * 
   * Brandstofverbruik gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  brandstof_verbruik_gecombineerd_wltp?: string;
  /**
   * ### Brandstof verbruik gewogen gecombineerd wltp
   * 
   * Gewogen brandstofverbruik gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  brandstof_verbruik_gewogen_gecombineerd_wltp?: string;
  /**
   * ### Brandstof volgnummer
   * 
   * Volgnummer waarmee de emissiegegevens bij een bepaalde brandstof in de gewenste volgorde kunnen worden getoond.
   *
   * **Type**: Text
   */
  brandstof_volgnummer?: string;
  /**
   * ### Brandstofverbruik buiten de stad
   * 
   * Het brandstofverbruik in l/100 km, tijdens een gestandaardiseerde rit buiten de stad, getest op een rollenbank.
   *
   * **Type**: Text
   */
  brandstofverbruik_buiten?: string;
  /**
   * ### Brandstofverbruik gecombineerd
   * 
   * Het brandstofverbruik in l/100 km, tijdens een combinatie van gestandaardiseerde stadsrit- en rit buiten de stad, getest op een rollenbank.
   *
   * **Type**: Text
   */
  brandstofverbruik_gecombineerd?: string;
  /**
   * ### Brandstofverbruik stad
   * 
   * Het brandstofverbruik in l/100 km, tijdens een gestandaardiseerde stadsritcyclus, getest op een rollenbank.
   *
   * **Type**: Text
   */
  brandstofverbruik_stad?: string;
  /**
   * ### CO2 uitstoot gecombineerd
   * 
   * De gewogen uitstoot van CO2 in g/km van een plug-in hybride voertuig, tijdens een combinatie van een stadsrit en een rit buiten de stad, getest op een rollenbank. De waarde is berekend aan de hand van de uitstoot die ontstaat door eenmaal met lege accus en eenmaal met volle accus te rijden.
   *
   * **Type**: Text
   */
  co2_uitstoot_gecombineerd?: string;
  /**
   * ### CO2 uitstoot gewogen
   * 
   * CO2 uitstoot gemeten bij een op een rollenbank gemeten voertuig, van toepassing op een extern oplaadbaar hybride elektrisch voertuig, met een oplading van buitenaf gewogen gecombineerd volgens de berekening in de richtlijn.
   *
   * **Type**: Text
   */
  co2_uitstoot_gewogen?: string;
  /**
   * ### Elektrisch verbruik enkel elektrisch wltp
   * 
   * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  elektrisch_verbruik_enkel_elektrisch_wltp?: string;
  /**
   * ### Elektrisch verbruik extern opladen wltp
   * 
   * Elektrisch verbruik gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  elektrisch_verbruik_extern_opladen_wltp?: string;
  /**
   * ### Emissie co2 gewogen gecombineerd wltp
   * 
   * Gewogen CO2 uitstoot gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  emis_co2_gewogen_gecombineerd_wltp?: string;
  /**
   * ### Emissie deeltjes type1 wltp
   * 
   * Uitstoot deeltjes (massa) gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP type 1 test.
   *
   * **Type**: Number
   */
  emis_deeltjes_type1_wltp?: string;
  /**
   * ### Emissie co2 gecombineerd wltp
   * 
   * CO2 uitstoot gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  emissie_co2_gecombineerd_wltp?: string;
  /**
   * ### Emissieklasse
   *
   * **Type**: Text
   */
  emissiecode_omschrijving?: string;
  /**
   * ### Geluidsniveau rijdend
   * 
   * Het geluidsniveau van een rijdend voertuig in dB(A), gemeten zoals voorgeschreven in de regelgeving. Voor elektrische en plug-in hybride voertuigen wordt dit gegeven niet vastgelegd.
   *
   * **Type**: Text
   */
  geluidsniveau_rijdend?: string;
  /**
   * ### Geluidsniveau stationair
   * 
   * Het geluidsniveau van een stilstaand voertuig met draaiende motor in dB(A), gemeten bij het bijbehorende toerental zoals voorgeschreven in de regelgeving.
   * Voor elektrische en plug-in hybride voertuigen wordt dit gegeven niet vastgelegd.
   *
   * **Type**: Text
   */
  geluidsniveau_stationair?: string;
  /**
   * ### Kenteken
   * 
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Klasse hybride elektrisch voertuig
   * 
   * Klasse van het hybride elektrisch voertuig.  Mogelijke waarden zijn: OVC-HEV = Off vehicle-charging hybride elektrisch voertuig NOVC-HEV = Not off-vehicle charging hybride elektrisch voertuig OVC-FCHV = Off-vehicle charging fuel cell hybride voertuig NOVC-FCHV = Not off-vehicle charging fuel cell hybride voertuig
   *
   * **Type**: Text
   */
  klasse_hybride_elektrisch_voertuig?: string;
  /**
   * ### Max vermogen 15 minuten
   * 
   * Nominaal continu maximumvermogen elektrovermogen gemeten over 15 minuten.
   *
   * **Type**: Number
   */
  max_vermogen_15_minuten?: string;
  /**
   * ### Max vermogen 60 minuten
   * 
   * Maximumelektrovermogen gemeten over 60 minuten.
   *
   * **Type**: Number
   */
  max_vermogen_60_minuten?: string;
  /**
   * ### Milieuklasse EG Goedkeuring (licht)
   * 
   * Richtlijnnummer voor emissies van voertuigen waarop het voertuig is getoetst en goedgekeurd.
   *
   * **Type**: Text
   */
  milieuklasse_eg_goedkeuring_licht?: string;
  /**
   * ### Milieuklasse EG Goedkeuring (zwaar)
   * 
   * Richtlijnnummer voor emissies van motoren waarop het voertuig is getoetst en goedgekeurd.
   *
   * **Type**: Text
   */
  milieuklasse_eg_goedkeuring_zwaar?: string;
  /**
   * ### Netto max vermogen elektrisch
   * 
   * Nettomaximumvermogen elektrisch
   *
   * **Type**: Number
   */
  netto_max_vermogen_elektrisch?: string;
  /**
   * ### Nettomaximumvermogen
   * 
   * Dit is het maximumvermogen, uitgedrukt in kW, dat de verbrandingsmotor kan leveren bij een bepaald toerental om een voertuig in beweging te brengen.
   *
   * **Type**: Text
   */
  nettomaximumvermogen?: string;
  /**
   * ### Nominaal continu maximumvermogen
   * 
   * Het nominaal continu maximumvermogen, uitgedrukt in kW, dat de elektromotor kan leveren.
   *
   * **Type**: Text
   */
  nominaal_continu_maximumvermogen?: string;
  /**
   * ### Opgegeven maximum snelheid
   *
   * **Type**: Number
   */
  opgegeven_maximum_snelheid?: string;
  /**
   * ### Roetuitstoot
   * 
   * De mate van vervuiling van de lucht die uit de uitlaat van een voertuig komt tijdens de vrije acceleratietest (roetmeting).
   * De afname van het doorgelaten licht door het in het uitlaatgas aanwezige roet wordt als k-waarde aangegeven in m-1.
   *
   * **Type**: Text
   */
  roetuitstoot?: string;
  /**
   * ### Toerental geluidsniveau
   * 
   * Het aantal omwentelingen per minuut van de motor bij de meting van het geluidsniveau van een stilstaand voertuig.
   *
   * **Type**: Text
   */
  toerental_geluidsniveau?: string;
  /**
   * ### Uitlaatemissieniveau
   *
   * **Type**: Text
   */
  uitlaatemissieniveau?: string;
  /**
   * ### Uitstoot deeltjes (licht)
   * 
   * De uitstoot van het aantal deeltjes, uitgedrukt in g/km, gemeten tijdens een test op een rollenbank.
   *
   * **Type**: Text
   */
  uitstoot_deeltjes_licht?: string;
  /**
   * ### Uitstoot deeltjes (zwaar)
   * 
   * De uitstoot van het aantal deeltjes, uitgedrukt in g/kWh, gemeten tijdens een test van de motor op een vermogensbank.
   *
   * **Type**: Text
   */
  uitstoot_deeltjes_zwaar?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenBrandstof**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``ActieRadiusEnkelElektrischStadWltp`` | ``actie_radius_enkel_elektrisch_stad_wltp`` | _Number_ |
 * | ``ActieRadiusEnkelElektrischWltp`` | ``actie_radius_enkel_elektrisch_wltp`` | _Number_ |
 * | ``ActieRadiusExternOpladenStadWltp`` | ``actie_radius_extern_opladen_stad_wltp`` | _Number_ |
 * | ``ActieRadiusExternOpladenWltp`` | ``actie_radius_extern_opladen_wltp`` | _Number_ |
 * | ``BrandstofOmschrijving`` | ``brandstof_omschrijving`` | _Text_ |
 * | ``BrandstofVerbruikGecombineerdWltp`` | ``brandstof_verbruik_gecombineerd_wltp`` | _Number_ |
 * | ``BrandstofVerbruikGewogenGecombineerdWltp`` | ``brandstof_verbruik_gewogen_gecombineerd_wltp`` | _Number_ |
 * | ``BrandstofVolgnummer`` | ``brandstof_volgnummer`` | _Text_ |
 * | ``BrandstofverbruikBuiten`` | ``brandstofverbruik_buiten`` | _Text_ |
 * | ``BrandstofverbruikGecombineerd`` | ``brandstofverbruik_gecombineerd`` | _Text_ |
 * | ``BrandstofverbruikStad`` | ``brandstofverbruik_stad`` | _Text_ |
 * | ``Co2UitstootGecombineerd`` | ``co2_uitstoot_gecombineerd`` | _Text_ |
 * | ``Co2UitstootGewogen`` | ``co2_uitstoot_gewogen`` | _Text_ |
 * | ``ElektrischVerbruikEnkelElektrischWltp`` | ``elektrisch_verbruik_enkel_elektrisch_wltp`` | _Number_ |
 * | ``ElektrischVerbruikExternOpladenWltp`` | ``elektrisch_verbruik_extern_opladen_wltp`` | _Number_ |
 * | ``EmisCo2GewogenGecombineerdWltp`` | ``emis_co2_gewogen_gecombineerd_wltp`` | _Number_ |
 * | ``EmisDeeltjesType1Wltp`` | ``emis_deeltjes_type1_wltp`` | _Number_ |
 * | ``EmissieCo2GecombineerdWltp`` | ``emissie_co2_gecombineerd_wltp`` | _Number_ |
 * | ``EmissiecodeOmschrijving`` | ``emissiecode_omschrijving`` | _Text_ |
 * | ``GeluidsniveauRijdend`` | ``geluidsniveau_rijdend`` | _Text_ |
 * | ``GeluidsniveauStationair`` | ``geluidsniveau_stationair`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``KlasseHybrideElektrischVoertuig`` | ``klasse_hybride_elektrisch_voertuig`` | _Text_ |
 * | ``MaxVermogen15Minuten`` | ``max_vermogen_15_minuten`` | _Number_ |
 * | ``MaxVermogen60Minuten`` | ``max_vermogen_60_minuten`` | _Number_ |
 * | ``MilieuklasseEgGoedkeuringLicht`` | ``milieuklasse_eg_goedkeuring_licht`` | _Text_ |
 * | ``MilieuklasseEgGoedkeuringZwaar`` | ``milieuklasse_eg_goedkeuring_zwaar`` | _Text_ |
 * | ``NettoMaxVermogenElektrisch`` | ``netto_max_vermogen_elektrisch`` | _Number_ |
 * | ``Nettomaximumvermogen`` | ``nettomaximumvermogen`` | _Text_ |
 * | ``NominaalContinuMaximumvermogen`` | ``nominaal_continu_maximumvermogen`` | _Text_ |
 * | ``OpgegevenMaximumSnelheid`` | ``opgegeven_maximum_snelheid`` | _Number_ |
 * | ``Roetuitstoot`` | ``roetuitstoot`` | _Text_ |
 * | ``ToerentalGeluidsniveau`` | ``toerental_geluidsniveau`` | _Text_ |
 * | ``Uitlaatemissieniveau`` | ``uitlaatemissieniveau`` | _Text_ |
 * | ``UitstootDeeltjesLicht`` | ``uitstoot_deeltjes_licht`` | _Text_ |
 * | ``UitstootDeeltjesZwaar`` | ``uitstoot_deeltjes_zwaar`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Actie radius enkel elektrisch stad wltp
  * 
  * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `actie_radius_enkel_elektrisch_stad_wltp`
  */
  ActieRadiusEnkelElektrischStadWltp: Field("actie_radius_enkel_elektrisch_stad_wltp", DataType.Number),
  /**
  * ### Actie radius enkel elektrisch wltp
  * 
  * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `actie_radius_enkel_elektrisch_wltp`
  */
  ActieRadiusEnkelElektrischWltp: Field("actie_radius_enkel_elektrisch_wltp", DataType.Number),
  /**
  * ### Actie radius extern opladen stad wltp
  * 
  * Elektrisch verbruik gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder belasting van een gestandaardiseerde stadsrit.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `actie_radius_extern_opladen_stad_wltp`
  */
  ActieRadiusExternOpladenStadWltp: Field("actie_radius_extern_opladen_stad_wltp", DataType.Number),
  /**
  * ### Actie radius extern opladen wltp
  * 
  * Actieradius gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `actie_radius_extern_opladen_wltp`
  */
  ActieRadiusExternOpladenWltp: Field("actie_radius_extern_opladen_wltp", DataType.Number),
  /**
  * ### Brandstof omschrijving
  *
  * **Type**: Text
  *
  * **Database Column Name**: `brandstof_omschrijving`
  */
  BrandstofOmschrijving: Field("brandstof_omschrijving", DataType.Text),
  /**
  * ### Brandstof verbruik gecombineerd wltp
  * 
  * Brandstofverbruik gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `brandstof_verbruik_gecombineerd_wltp`
  */
  BrandstofVerbruikGecombineerdWltp: Field("brandstof_verbruik_gecombineerd_wltp", DataType.Number),
  /**
  * ### Brandstof verbruik gewogen gecombineerd wltp
  * 
  * Gewogen brandstofverbruik gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `brandstof_verbruik_gewogen_gecombineerd_wltp`
  */
  BrandstofVerbruikGewogenGecombineerdWltp: Field("brandstof_verbruik_gewogen_gecombineerd_wltp", DataType.Number),
  /**
  * ### Brandstof volgnummer
  * 
  * Volgnummer waarmee de emissiegegevens bij een bepaalde brandstof in de gewenste volgorde kunnen worden getoond.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `brandstof_volgnummer`
  */
  BrandstofVolgnummer: Field("brandstof_volgnummer", DataType.Text),
  /**
  * ### Brandstofverbruik buiten de stad
  * 
  * Het brandstofverbruik in l/100 km, tijdens een gestandaardiseerde rit buiten de stad, getest op een rollenbank.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `brandstofverbruik_buiten`
  */
  BrandstofverbruikBuiten: Field("brandstofverbruik_buiten", DataType.Text),
  /**
  * ### Brandstofverbruik gecombineerd
  * 
  * Het brandstofverbruik in l/100 km, tijdens een combinatie van gestandaardiseerde stadsrit- en rit buiten de stad, getest op een rollenbank.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `brandstofverbruik_gecombineerd`
  */
  BrandstofverbruikGecombineerd: Field("brandstofverbruik_gecombineerd", DataType.Text),
  /**
  * ### Brandstofverbruik stad
  * 
  * Het brandstofverbruik in l/100 km, tijdens een gestandaardiseerde stadsritcyclus, getest op een rollenbank.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `brandstofverbruik_stad`
  */
  BrandstofverbruikStad: Field("brandstofverbruik_stad", DataType.Text),
  /**
  * ### CO2 uitstoot gecombineerd
  * 
  * De gewogen uitstoot van CO2 in g/km van een plug-in hybride voertuig, tijdens een combinatie van een stadsrit en een rit buiten de stad, getest op een rollenbank. De waarde is berekend aan de hand van de uitstoot die ontstaat door eenmaal met lege accus en eenmaal met volle accus te rijden.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `co2_uitstoot_gecombineerd`
  */
  Co2UitstootGecombineerd: Field("co2_uitstoot_gecombineerd", DataType.Text),
  /**
  * ### CO2 uitstoot gewogen
  * 
  * CO2 uitstoot gemeten bij een op een rollenbank gemeten voertuig, van toepassing op een extern oplaadbaar hybride elektrisch voertuig, met een oplading van buitenaf gewogen gecombineerd volgens de berekening in de richtlijn.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `co2_uitstoot_gewogen`
  */
  Co2UitstootGewogen: Field("co2_uitstoot_gewogen", DataType.Text),
  /**
  * ### Elektrisch verbruik enkel elektrisch wltp
  * 
  * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `elektrisch_verbruik_enkel_elektrisch_wltp`
  */
  ElektrischVerbruikEnkelElektrischWltp: Field("elektrisch_verbruik_enkel_elektrisch_wltp", DataType.Number),
  /**
  * ### Elektrisch verbruik extern opladen wltp
  * 
  * Elektrisch verbruik gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `elektrisch_verbruik_extern_opladen_wltp`
  */
  ElektrischVerbruikExternOpladenWltp: Field("elektrisch_verbruik_extern_opladen_wltp", DataType.Number),
  /**
  * ### Emissie co2 gewogen gecombineerd wltp
  * 
  * Gewogen CO2 uitstoot gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emis_co2_gewogen_gecombineerd_wltp`
  */
  EmisCo2GewogenGecombineerdWltp: Field("emis_co2_gewogen_gecombineerd_wltp", DataType.Number),
  /**
  * ### Emissie deeltjes type1 wltp
  * 
  * Uitstoot deeltjes (massa) gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP type 1 test.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emis_deeltjes_type1_wltp`
  */
  EmisDeeltjesType1Wltp: Field("emis_deeltjes_type1_wltp", DataType.Number),
  /**
  * ### Emissie co2 gecombineerd wltp
  * 
  * CO2 uitstoot gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `emissie_co2_gecombineerd_wltp`
  */
  EmissieCo2GecombineerdWltp: Field("emissie_co2_gecombineerd_wltp", DataType.Number),
  /**
  * ### Emissieklasse
  *
  * **Type**: Text
  *
  * **Database Column Name**: `emissiecode_omschrijving`
  */
  EmissiecodeOmschrijving: Field("emissiecode_omschrijving", DataType.Text),
  /**
  * ### Geluidsniveau rijdend
  * 
  * Het geluidsniveau van een rijdend voertuig in dB(A), gemeten zoals voorgeschreven in de regelgeving. Voor elektrische en plug-in hybride voertuigen wordt dit gegeven niet vastgelegd.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `geluidsniveau_rijdend`
  */
  GeluidsniveauRijdend: Field("geluidsniveau_rijdend", DataType.Text),
  /**
  * ### Geluidsniveau stationair
  * 
  * Het geluidsniveau van een stilstaand voertuig met draaiende motor in dB(A), gemeten bij het bijbehorende toerental zoals voorgeschreven in de regelgeving.
  * Voor elektrische en plug-in hybride voertuigen wordt dit gegeven niet vastgelegd.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `geluidsniveau_stationair`
  */
  GeluidsniveauStationair: Field("geluidsniveau_stationair", DataType.Text),
  /**
  * ### Kenteken
  * 
  * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `kenteken`
  */
  Kenteken: Field("kenteken", DataType.Text),
  /**
  * ### Klasse hybride elektrisch voertuig
  * 
  * Klasse van het hybride elektrisch voertuig.  Mogelijke waarden zijn: OVC-HEV = Off vehicle-charging hybride elektrisch voertuig NOVC-HEV = Not off-vehicle charging hybride elektrisch voertuig OVC-FCHV = Off-vehicle charging fuel cell hybride voertuig NOVC-FCHV = Not off-vehicle charging fuel cell hybride voertuig
  *
  * **Type**: Text
  *
  * **Database Column Name**: `klasse_hybride_elektrisch_voertuig`
  */
  KlasseHybrideElektrischVoertuig: Field("klasse_hybride_elektrisch_voertuig", DataType.Text),
  /**
  * ### Max vermogen 15 minuten
  * 
  * Nominaal continu maximumvermogen elektrovermogen gemeten over 15 minuten.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `max_vermogen_15_minuten`
  */
  MaxVermogen15Minuten: Field("max_vermogen_15_minuten", DataType.Number),
  /**
  * ### Max vermogen 60 minuten
  * 
  * Maximumelektrovermogen gemeten over 60 minuten.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `max_vermogen_60_minuten`
  */
  MaxVermogen60Minuten: Field("max_vermogen_60_minuten", DataType.Number),
  /**
  * ### Milieuklasse EG Goedkeuring (licht)
  * 
  * Richtlijnnummer voor emissies van voertuigen waarop het voertuig is getoetst en goedgekeurd.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `milieuklasse_eg_goedkeuring_licht`
  */
  MilieuklasseEgGoedkeuringLicht: Field("milieuklasse_eg_goedkeuring_licht", DataType.Text),
  /**
  * ### Milieuklasse EG Goedkeuring (zwaar)
  * 
  * Richtlijnnummer voor emissies van motoren waarop het voertuig is getoetst en goedgekeurd.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `milieuklasse_eg_goedkeuring_zwaar`
  */
  MilieuklasseEgGoedkeuringZwaar: Field("milieuklasse_eg_goedkeuring_zwaar", DataType.Text),
  /**
  * ### Netto max vermogen elektrisch
  * 
  * Nettomaximumvermogen elektrisch
  *
  * **Type**: Number
  *
  * **Database Column Name**: `netto_max_vermogen_elektrisch`
  */
  NettoMaxVermogenElektrisch: Field("netto_max_vermogen_elektrisch", DataType.Number),
  /**
  * ### Nettomaximumvermogen
  * 
  * Dit is het maximumvermogen, uitgedrukt in kW, dat de verbrandingsmotor kan leveren bij een bepaald toerental om een voertuig in beweging te brengen.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `nettomaximumvermogen`
  */
  Nettomaximumvermogen: Field("nettomaximumvermogen", DataType.Text),
  /**
  * ### Nominaal continu maximumvermogen
  * 
  * Het nominaal continu maximumvermogen, uitgedrukt in kW, dat de elektromotor kan leveren.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `nominaal_continu_maximumvermogen`
  */
  NominaalContinuMaximumvermogen: Field("nominaal_continu_maximumvermogen", DataType.Text),
  /**
  * ### Opgegeven maximum snelheid
  *
  * **Type**: Number
  *
  * **Database Column Name**: `opgegeven_maximum_snelheid`
  */
  OpgegevenMaximumSnelheid: Field("opgegeven_maximum_snelheid", DataType.Number),
  /**
  * ### Roetuitstoot
  * 
  * De mate van vervuiling van de lucht die uit de uitlaat van een voertuig komt tijdens de vrije acceleratietest (roetmeting).
  * De afname van het doorgelaten licht door het in het uitlaatgas aanwezige roet wordt als k-waarde aangegeven in m-1.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `roetuitstoot`
  */
  Roetuitstoot: Field("roetuitstoot", DataType.Text),
  /**
  * ### Toerental geluidsniveau
  * 
  * Het aantal omwentelingen per minuut van de motor bij de meting van het geluidsniveau van een stilstaand voertuig.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `toerental_geluidsniveau`
  */
  ToerentalGeluidsniveau: Field("toerental_geluidsniveau", DataType.Text),
  /**
  * ### Uitlaatemissieniveau
  *
  * **Type**: Text
  *
  * **Database Column Name**: `uitlaatemissieniveau`
  */
  Uitlaatemissieniveau: Field("uitlaatemissieniveau", DataType.Text),
  /**
  * ### Uitstoot deeltjes (licht)
  * 
  * De uitstoot van het aantal deeltjes, uitgedrukt in g/km, gemeten tijdens een test op een rollenbank.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `uitstoot_deeltjes_licht`
  */
  UitstootDeeltjesLicht: Field("uitstoot_deeltjes_licht", DataType.Text),
  /**
  * ### Uitstoot deeltjes (zwaar)
  * 
  * De uitstoot van het aantal deeltjes, uitgedrukt in g/kWh, gemeten tijdens een test van de motor op een vermogensbank.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `uitstoot_deeltjes_zwaar`
  */
  UitstootDeeltjesZwaar: Field("uitstoot_deeltjes_zwaar", DataType.Text),
};

export const Info = {
  fields: [
    "ActieRadiusEnkelElektrischStadWltp",
    "ActieRadiusEnkelElektrischWltp",
    "ActieRadiusExternOpladenStadWltp",
    "ActieRadiusExternOpladenWltp",
    "BrandstofOmschrijving",
    "BrandstofVerbruikGecombineerdWltp",
    "BrandstofVerbruikGewogenGecombineerdWltp",
    "BrandstofVolgnummer",
    "BrandstofverbruikBuiten",
    "BrandstofverbruikGecombineerd",
    "BrandstofverbruikStad",
    "Co2UitstootGecombineerd",
    "Co2UitstootGewogen",
    "ElektrischVerbruikEnkelElektrischWltp",
    "ElektrischVerbruikExternOpladenWltp",
    "EmisCo2GewogenGecombineerdWltp",
    "EmisDeeltjesType1Wltp",
    "EmissieCo2GecombineerdWltp",
    "EmissiecodeOmschrijving",
    "GeluidsniveauRijdend",
    "GeluidsniveauStationair",
    "Kenteken",
    "KlasseHybrideElektrischVoertuig",
    "MaxVermogen15Minuten",
    "MaxVermogen60Minuten",
    "MilieuklasseEgGoedkeuringLicht",
    "MilieuklasseEgGoedkeuringZwaar",
    "NettoMaxVermogenElektrisch",
    "Nettomaximumvermogen",
    "NominaalContinuMaximumvermogen",
    "OpgegevenMaximumSnelheid",
    "Roetuitstoot",
    "ToerentalGeluidsniveau",
    "Uitlaatemissieniveau",
    "UitstootDeeltjesLicht",
    "UitstootDeeltjesZwaar",
  ],
  dataset: "8ys7-d773",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_brandstof",
  provider_name: "KentekenVoertuigenBrandstof",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/8ys7-d773",
}

/**
 * ### Open Data RDW: Gekentekende_voertuigen_brandstof
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/8ys7-d773
 *
 * **Dataset ID:** 8ys7-d773
 *
 * **Category:** Voertuigen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gekentekende_voertuigen_brandstof dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.ActieRadiusEnkelElektrischStadWltp, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<KentekenVoertuigenBrandstof_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const KentekenVoertuigenBrandstof = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<KentekenVoertuigenBrandstof_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
