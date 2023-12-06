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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_brandstof
 */
export interface ResponseData {
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
export interface IFields {
  /**
   * ### Actie radius enkel elektrisch stad wltp
   *
   * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  ActieRadiusEnkelElektrischStadWltp: FieldObject<DataType.Number>;
  /**
   * ### Actie radius enkel elektrisch wltp
   *
   * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  ActieRadiusEnkelElektrischWltp: FieldObject<DataType.Number>;
  /**
   * ### Actie radius extern opladen stad wltp
   *
   * Elektrisch verbruik gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder belasting van een gestandaardiseerde stadsrit.
   *
   * **Type**: Number
   */
  ActieRadiusExternOpladenStadWltp: FieldObject<DataType.Number>;
  /**
   * ### Actie radius extern opladen wltp
   *
   * Actieradius gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  ActieRadiusExternOpladenWltp: FieldObject<DataType.Number>;
  /**
   * ### Brandstof omschrijving
   *
   * **Type**: Text
   */
  BrandstofOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Brandstof verbruik gecombineerd wltp
   *
   * Brandstofverbruik gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  BrandstofVerbruikGecombineerdWltp: FieldObject<DataType.Number>;
  /**
   * ### Brandstof verbruik gewogen gecombineerd wltp
   *
   * Gewogen brandstofverbruik gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  BrandstofVerbruikGewogenGecombineerdWltp: FieldObject<DataType.Number>;
  /**
   * ### Brandstof volgnummer
   *
   * Volgnummer waarmee de emissiegegevens bij een bepaalde brandstof in de gewenste volgorde kunnen worden getoond.
   *
   * **Type**: Text
   */
  BrandstofVolgnummer: FieldObject<DataType.Text>;
  /**
   * ### Brandstofverbruik buiten de stad
   *
   * Het brandstofverbruik in l/100 km, tijdens een gestandaardiseerde rit buiten de stad, getest op een rollenbank.
   *
   * **Type**: Text
   */
  BrandstofverbruikBuiten: FieldObject<DataType.Text>;
  /**
   * ### Brandstofverbruik gecombineerd
   *
   * Het brandstofverbruik in l/100 km, tijdens een combinatie van gestandaardiseerde stadsrit- en rit buiten de stad, getest op een rollenbank.
   *
   * **Type**: Text
   */
  BrandstofverbruikGecombineerd: FieldObject<DataType.Text>;
  /**
   * ### Brandstofverbruik stad
   *
   * Het brandstofverbruik in l/100 km, tijdens een gestandaardiseerde stadsritcyclus, getest op een rollenbank.
   *
   * **Type**: Text
   */
  BrandstofverbruikStad: FieldObject<DataType.Text>;
  /**
   * ### CO2 uitstoot gecombineerd
   *
   * De gewogen uitstoot van CO2 in g/km van een plug-in hybride voertuig, tijdens een combinatie van een stadsrit en een rit buiten de stad, getest op een rollenbank. De waarde is berekend aan de hand van de uitstoot die ontstaat door eenmaal met lege accus en eenmaal met volle accus te rijden.
   *
   * **Type**: Text
   */
  Co2UitstootGecombineerd: FieldObject<DataType.Text>;
  /**
   * ### CO2 uitstoot gewogen
   *
   * CO2 uitstoot gemeten bij een op een rollenbank gemeten voertuig, van toepassing op een extern oplaadbaar hybride elektrisch voertuig, met een oplading van buitenaf gewogen gecombineerd volgens de berekening in de richtlijn.
   *
   * **Type**: Text
   */
  Co2UitstootGewogen: FieldObject<DataType.Text>;
  /**
   * ### Elektrisch verbruik enkel elektrisch wltp
   *
   * Actieradius gemeten bij een op een rollenbank rijdend puur elektrisch voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  ElektrischVerbruikEnkelElektrischWltp: FieldObject<DataType.Number>;
  /**
   * ### Elektrisch verbruik extern opladen wltp
   *
   * Elektrisch verbruik gemeten bij een op een rollenbank rijdend extem oplaadbaar hybride voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  ElektrischVerbruikExternOpladenWltp: FieldObject<DataType.Number>;
  /**
   * ### Emissie co2 gewogen gecombineerd wltp
   *
   * Gewogen CO2 uitstoot gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  EmisCo2GewogenGecombineerdWltp: FieldObject<DataType.Number>;
  /**
   * ### Emissie deeltjes type1 wltp
   *
   * Uitstoot deeltjes (massa) gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP type 1 test.
   *
   * **Type**: Number
   */
  EmisDeeltjesType1Wltp: FieldObject<DataType.Number>;
  /**
   * ### Emissie co2 gecombineerd wltp
   *
   * CO2 uitstoot gemeten bij een op een rollenbank rijdend voertuig tijdens een rit volgens de WLTP test onder gecombineerde belasting.
   *
   * **Type**: Number
   */
  EmissieCo2GecombineerdWltp: FieldObject<DataType.Number>;
  /**
   * ### Emissieklasse
   *
   * **Type**: Text
   */
  EmissiecodeOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Geluidsniveau rijdend
   *
   * Het geluidsniveau van een rijdend voertuig in dB(A), gemeten zoals voorgeschreven in de regelgeving. Voor elektrische en plug-in hybride voertuigen wordt dit gegeven niet vastgelegd.
   *
   * **Type**: Text
   */
  GeluidsniveauRijdend: FieldObject<DataType.Text>;
  /**
   * ### Geluidsniveau stationair
   *
   * Het geluidsniveau van een stilstaand voertuig met draaiende motor in dB(A), gemeten bij het bijbehorende toerental zoals voorgeschreven in de regelgeving.
   * Voor elektrische en plug-in hybride voertuigen wordt dit gegeven niet vastgelegd.
   *
   * **Type**: Text
   */
  GeluidsniveauStationair: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Klasse hybride elektrisch voertuig
   *
   * Klasse van het hybride elektrisch voertuig.  Mogelijke waarden zijn: OVC-HEV = Off vehicle-charging hybride elektrisch voertuig NOVC-HEV = Not off-vehicle charging hybride elektrisch voertuig OVC-FCHV = Off-vehicle charging fuel cell hybride voertuig NOVC-FCHV = Not off-vehicle charging fuel cell hybride voertuig
   *
   * **Type**: Text
   */
  KlasseHybrideElektrischVoertuig: FieldObject<DataType.Text>;
  /**
   * ### Max vermogen 15 minuten
   *
   * Nominaal continu maximumvermogen elektrovermogen gemeten over 15 minuten.
   *
   * **Type**: Number
   */
  MaxVermogen15Minuten: FieldObject<DataType.Number>;
  /**
   * ### Max vermogen 60 minuten
   *
   * Maximumelektrovermogen gemeten over 60 minuten.
   *
   * **Type**: Number
   */
  MaxVermogen60Minuten: FieldObject<DataType.Number>;
  /**
   * ### Milieuklasse EG Goedkeuring (licht)
   *
   * Richtlijnnummer voor emissies van voertuigen waarop het voertuig is getoetst en goedgekeurd.
   *
   * **Type**: Text
   */
  MilieuklasseEgGoedkeuringLicht: FieldObject<DataType.Text>;
  /**
   * ### Milieuklasse EG Goedkeuring (zwaar)
   *
   * Richtlijnnummer voor emissies van motoren waarop het voertuig is getoetst en goedgekeurd.
   *
   * **Type**: Text
   */
  MilieuklasseEgGoedkeuringZwaar: FieldObject<DataType.Text>;
  /**
   * ### Netto max vermogen elektrisch
   *
   * Nettomaximumvermogen elektrisch
   *
   * **Type**: Number
   */
  NettoMaxVermogenElektrisch: FieldObject<DataType.Number>;
  /**
   * ### Nettomaximumvermogen
   *
   * Dit is het maximumvermogen, uitgedrukt in kW, dat de verbrandingsmotor kan leveren bij een bepaald toerental om een voertuig in beweging te brengen.
   *
   * **Type**: Text
   */
  Nettomaximumvermogen: FieldObject<DataType.Text>;
  /**
   * ### Nominaal continu maximumvermogen
   *
   * Het nominaal continu maximumvermogen, uitgedrukt in kW, dat de elektromotor kan leveren.
   *
   * **Type**: Text
   */
  NominaalContinuMaximumvermogen: FieldObject<DataType.Text>;
  /**
   * ### Opgegeven maximum snelheid
   *
   * **Type**: Number
   */
  OpgegevenMaximumSnelheid: FieldObject<DataType.Number>;
  /**
   * ### Roetuitstoot
   *
   * De mate van vervuiling van de lucht die uit de uitlaat van een voertuig komt tijdens de vrije acceleratietest (roetmeting).
   * De afname van het doorgelaten licht door het in het uitlaatgas aanwezige roet wordt als k-waarde aangegeven in m-1.
   *
   * **Type**: Text
   */
  Roetuitstoot: FieldObject<DataType.Text>;
  /**
   * ### Toerental geluidsniveau
   *
   * Het aantal omwentelingen per minuut van de motor bij de meting van het geluidsniveau van een stilstaand voertuig.
   *
   * **Type**: Text
   */
  ToerentalGeluidsniveau: FieldObject<DataType.Text>;
  /**
   * ### Uitlaatemissieniveau
   *
   * **Type**: Text
   */
  Uitlaatemissieniveau: FieldObject<DataType.Text>;
  /**
   * ### Uitstoot deeltjes (licht)
   *
   * De uitstoot van het aantal deeltjes, uitgedrukt in g/km, gemeten tijdens een test op een rollenbank.
   *
   * **Type**: Text
   */
  UitstootDeeltjesLicht: FieldObject<DataType.Text>;
  /**
   * ### Uitstoot deeltjes (zwaar)
   *
   * De uitstoot van het aantal deeltjes, uitgedrukt in g/kWh, gemeten tijdens een test van de motor op een vermogensbank.
   *
   * **Type**: Text
   */
  UitstootDeeltjesZwaar: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  ActieRadiusEnkelElektrischStadWltp: Field(
    "actie_radius_enkel_elektrisch_stad_wltp",
    DataType.Number,
  ),
  ActieRadiusEnkelElektrischWltp: Field("actie_radius_enkel_elektrisch_wltp", DataType.Number),
  ActieRadiusExternOpladenStadWltp: Field("actie_radius_extern_opladen_stad_wltp", DataType.Number),
  ActieRadiusExternOpladenWltp: Field("actie_radius_extern_opladen_wltp", DataType.Number),
  BrandstofOmschrijving: Field("brandstof_omschrijving", DataType.Text),
  BrandstofVerbruikGecombineerdWltp: Field("brandstof_verbruik_gecombineerd_wltp", DataType.Number),
  BrandstofVerbruikGewogenGecombineerdWltp: Field(
    "brandstof_verbruik_gewogen_gecombineerd_wltp",
    DataType.Number,
  ),
  BrandstofVolgnummer: Field("brandstof_volgnummer", DataType.Text),
  BrandstofverbruikBuiten: Field("brandstofverbruik_buiten", DataType.Text),
  BrandstofverbruikGecombineerd: Field("brandstofverbruik_gecombineerd", DataType.Text),
  BrandstofverbruikStad: Field("brandstofverbruik_stad", DataType.Text),
  Co2UitstootGecombineerd: Field("co2_uitstoot_gecombineerd", DataType.Text),
  Co2UitstootGewogen: Field("co2_uitstoot_gewogen", DataType.Text),
  ElektrischVerbruikEnkelElektrischWltp: Field(
    "elektrisch_verbruik_enkel_elektrisch_wltp",
    DataType.Number,
  ),
  ElektrischVerbruikExternOpladenWltp: Field(
    "elektrisch_verbruik_extern_opladen_wltp",
    DataType.Number,
  ),
  EmisCo2GewogenGecombineerdWltp: Field("emis_co2_gewogen_gecombineerd_wltp", DataType.Number),
  EmisDeeltjesType1Wltp: Field("emis_deeltjes_type1_wltp", DataType.Number),
  EmissieCo2GecombineerdWltp: Field("emissie_co2_gecombineerd_wltp", DataType.Number),
  EmissiecodeOmschrijving: Field("emissiecode_omschrijving", DataType.Text),
  GeluidsniveauRijdend: Field("geluidsniveau_rijdend", DataType.Text),
  GeluidsniveauStationair: Field("geluidsniveau_stationair", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  KlasseHybrideElektrischVoertuig: Field("klasse_hybride_elektrisch_voertuig", DataType.Text),
  MaxVermogen15Minuten: Field("max_vermogen_15_minuten", DataType.Number),
  MaxVermogen60Minuten: Field("max_vermogen_60_minuten", DataType.Number),
  MilieuklasseEgGoedkeuringLicht: Field("milieuklasse_eg_goedkeuring_licht", DataType.Text),
  MilieuklasseEgGoedkeuringZwaar: Field("milieuklasse_eg_goedkeuring_zwaar", DataType.Text),
  NettoMaxVermogenElektrisch: Field("netto_max_vermogen_elektrisch", DataType.Number),
  Nettomaximumvermogen: Field("nettomaximumvermogen", DataType.Text),
  NominaalContinuMaximumvermogen: Field("nominaal_continu_maximumvermogen", DataType.Text),
  OpgegevenMaximumSnelheid: Field("opgegeven_maximum_snelheid", DataType.Number),
  Roetuitstoot: Field("roetuitstoot", DataType.Text),
  ToerentalGeluidsniveau: Field("toerental_geluidsniveau", DataType.Text),
  Uitlaatemissieniveau: Field("uitlaatemissieniveau", DataType.Text),
  UitstootDeeltjesLicht: Field("uitstoot_deeltjes_licht", DataType.Text),
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
  url:
    "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/8ys7-d773",
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
