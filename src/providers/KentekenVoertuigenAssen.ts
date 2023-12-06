// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_assen
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_assen/3huj-srit
// Permalink: https://opendata.rdw.nl/d/3huj-srit
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_assen
 */
export interface ResponseData {
  /**
   * ### Aangedreven as
   *
   * Ja/Nee indicator die aangeeft of de betreffende as aangedreven is of niet.
   * Dit gegeven is alleen van belang voor bedrijfsauto's en bussen met een wettelijk toegestane maximummassa boven de 3500 kg.
   *
   * **Type**: Text
   */
  aangedreven_as?: string;
  /**
   * ### Aantal assen
   *
   * Het aantal assen van een voertuig.
   *
   * **Type**: Text
   */
  aantal_assen?: string;
  /**
   * ### Afstand tot volgende as voertuig
   *
   * **Type**: Number
   */
  afstand_tot_volgende_as_voertuig?: string;
  /**
   * ### Afstand tot volgende as voertuig maximum
   *
   * **Type**: Number
   */
  afstand_tot_volgende_as_voertuig_maximum?: string;
  /**
   * ### Afstand tot volgende as voertuig minimum
   *
   * **Type**: Number
   */
  afstand_tot_volgende_as_voertuig_minimum?: string;
  /**
   * ### As nummer
   *
   * Het nummer van de (fysieke) as vanaf de voorzijde van het voertuig gerekend. Bij pendelassen wordt het nummer bepaald van links naar rechts, gezien vanuit de rijrichting.
   *
   * **Type**: Text
   */
  as_nummer?: string;
  /**
   * ### Geremde as indicator
   *
   * **Type**: Text
   */
  geremde_as_indicator?: string;
  /**
   * ### Hefas
   *
   * Indicator die aangeeft of een as geheven kan worden, d.w.z. zodanig omhoog  bewogen dat de wielen tijdens het rijden het wegdek niet raken.
   * Deze mag alleen de waarde 'J' bevatten
   * - voor bedrijfsauto als AS-NR-VRTG > 1 en AANT-ASSEN >= 3 en
   * - voor aanhangwagen als AS-NR-VRTG > 0 en AANT-ASSEN >= 2.
   * In de andere gevallen moet de waarde 'N' zijn.
   *
   * **Type**: Text
   */
  hefas?: string;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Maximum last as technisch maximum
   *
   * **Type**: Number
   */
  maximum_last_as_technisch_maximum?: string;
  /**
   * ### Maximum last as technisch minimum
   *
   * **Type**: Number
   */
  maximum_last_as_technisch_minimum?: string;
  /**
   * ### Plaatscode as
   *
   * Codering die aangeeft of het voertuig een vooras of achteras heeft.
   *
   * **Type**: Text
   */
  plaatscode_as?: string;
  /**
   * ### Spoorbreedte
   *
   * Dit is de spoorbreedte van een as van een voertuig.
   * Met spoorbreedte van een as wordt de horizontale afstand tussen het hart van het linker- en rechterwiel van die as bedoeld, gemeten op het wegdek.
   * Een samenstel van wielen die op 1 wielnaaf zijn gemonteerd (dubbellucht) wordt dit geval aangemerkt als 1 wiel. De RDW legt dit gegeven alleen vast bij personenauto's, bedrijfsauto's en bussen met een wettelijk toegestane maximummassa niet meer dan 3500 kg.
   *
   * **Type**: Text
   */
  spoorbreedte?: string;
  /**
   * ### Technisch toegestane maximum aslast
   *
   * De technisch toegestane maximummassa van de as, opgegeven door de fabrikant van het voertuig.
   *
   * **Type**: Text
   */
  technisch_toegestane_maximum_aslast?: string;
  /**
   * ### Weggedrag code
   *
   * Code die aangeeft wat het weggedrag is van een aangedreven as. De volgende codes worden gebruikt:
   * L = Luchtvering
   * G = Gelijkwaardig aan luchtvering
   * A = Anders dan luchtvering
   * Dit gegeven wordt alleen vastgelegd voor bedrijfsauto's en bussen met een wettelijk toegestane maximummassa hoger dan 3500 kg.
   *
   * **Type**: Text
   */
  weggedrag_code?: string;
  /**
   * ### Wettelijk toegestane maximum aslast
   *
   * De wettelijk toegestane maximummassa op de as, afgeleid van de technisch toegestane maximummassa. Zo nodig is deze verminderd aan de hand van wettelijke bepalingen of op verzoek van de aanvrager van het kentekenbewijs.
   *
   * **Type**: Text
   */
  wettelijk_toegestane_maximum_aslast?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenAssen**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AangedrevenAs`` | ``aangedreven_as`` | _Text_ |
 * | ``AantalAssen`` | ``aantal_assen`` | _Text_ |
 * | ``AfstandTotVolgendeAsVoertuig`` | ``afstand_tot_volgende_as_voertuig`` | _Number_ |
 * | ``AfstandTotVolgendeAsVoertuigMaximum`` | ``afstand_tot_volgende_as_voertuig_maximum`` | _Number_ |
 * | ``AfstandTotVolgendeAsVoertuigMinimum`` | ``afstand_tot_volgende_as_voertuig_minimum`` | _Number_ |
 * | ``AsNummer`` | ``as_nummer`` | _Text_ |
 * | ``GeremdeAsIndicator`` | ``geremde_as_indicator`` | _Text_ |
 * | ``Hefas`` | ``hefas`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``MaximumLastAsTechnischMaximum`` | ``maximum_last_as_technisch_maximum`` | _Number_ |
 * | ``MaximumLastAsTechnischMinimum`` | ``maximum_last_as_technisch_minimum`` | _Number_ |
 * | ``PlaatscodeAs`` | ``plaatscode_as`` | _Text_ |
 * | ``Spoorbreedte`` | ``spoorbreedte`` | _Text_ |
 * | ``TechnischToegestaneMaximumAslast`` | ``technisch_toegestane_maximum_aslast`` | _Text_ |
 * | ``WeggedragCode`` | ``weggedrag_code`` | _Text_ |
 * | ``WettelijkToegestaneMaximumAslast`` | ``wettelijk_toegestane_maximum_aslast`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Aangedreven as
   *
   * Ja/Nee indicator die aangeeft of de betreffende as aangedreven is of niet.
   * Dit gegeven is alleen van belang voor bedrijfsauto's en bussen met een wettelijk toegestane maximummassa boven de 3500 kg.
   *
   * **Type**: Text
   */
  AangedrevenAs: FieldObject<DataType.Text>;
  /**
   * ### Aantal assen
   *
   * Het aantal assen van een voertuig.
   *
   * **Type**: Text
   */
  AantalAssen: FieldObject<DataType.Text>;
  /**
   * ### Afstand tot volgende as voertuig
   *
   * **Type**: Number
   */
  AfstandTotVolgendeAsVoertuig: FieldObject<DataType.Number>;
  /**
   * ### Afstand tot volgende as voertuig maximum
   *
   * **Type**: Number
   */
  AfstandTotVolgendeAsVoertuigMaximum: FieldObject<DataType.Number>;
  /**
   * ### Afstand tot volgende as voertuig minimum
   *
   * **Type**: Number
   */
  AfstandTotVolgendeAsVoertuigMinimum: FieldObject<DataType.Number>;
  /**
   * ### As nummer
   *
   * Het nummer van de (fysieke) as vanaf de voorzijde van het voertuig gerekend. Bij pendelassen wordt het nummer bepaald van links naar rechts, gezien vanuit de rijrichting.
   *
   * **Type**: Text
   */
  AsNummer: FieldObject<DataType.Text>;
  /**
   * ### Geremde as indicator
   *
   * **Type**: Text
   */
  GeremdeAsIndicator: FieldObject<DataType.Text>;
  /**
   * ### Hefas
   *
   * Indicator die aangeeft of een as geheven kan worden, d.w.z. zodanig omhoog  bewogen dat de wielen tijdens het rijden het wegdek niet raken.
   * Deze mag alleen de waarde 'J' bevatten
   * - voor bedrijfsauto als AS-NR-VRTG > 1 en AANT-ASSEN >= 3 en
   * - voor aanhangwagen als AS-NR-VRTG > 0 en AANT-ASSEN >= 2.
   * In de andere gevallen moet de waarde 'N' zijn.
   *
   * **Type**: Text
   */
  Hefas: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Maximum last as technisch maximum
   *
   * **Type**: Number
   */
  MaximumLastAsTechnischMaximum: FieldObject<DataType.Number>;
  /**
   * ### Maximum last as technisch minimum
   *
   * **Type**: Number
   */
  MaximumLastAsTechnischMinimum: FieldObject<DataType.Number>;
  /**
   * ### Plaatscode as
   *
   * Codering die aangeeft of het voertuig een vooras of achteras heeft.
   *
   * **Type**: Text
   */
  PlaatscodeAs: FieldObject<DataType.Text>;
  /**
   * ### Spoorbreedte
   *
   * Dit is de spoorbreedte van een as van een voertuig.
   * Met spoorbreedte van een as wordt de horizontale afstand tussen het hart van het linker- en rechterwiel van die as bedoeld, gemeten op het wegdek.
   * Een samenstel van wielen die op 1 wielnaaf zijn gemonteerd (dubbellucht) wordt dit geval aangemerkt als 1 wiel. De RDW legt dit gegeven alleen vast bij personenauto's, bedrijfsauto's en bussen met een wettelijk toegestane maximummassa niet meer dan 3500 kg.
   *
   * **Type**: Text
   */
  Spoorbreedte: FieldObject<DataType.Text>;
  /**
   * ### Technisch toegestane maximum aslast
   *
   * De technisch toegestane maximummassa van de as, opgegeven door de fabrikant van het voertuig.
   *
   * **Type**: Text
   */
  TechnischToegestaneMaximumAslast: FieldObject<DataType.Text>;
  /**
   * ### Weggedrag code
   *
   * Code die aangeeft wat het weggedrag is van een aangedreven as. De volgende codes worden gebruikt:
   * L = Luchtvering
   * G = Gelijkwaardig aan luchtvering
   * A = Anders dan luchtvering
   * Dit gegeven wordt alleen vastgelegd voor bedrijfsauto's en bussen met een wettelijk toegestane maximummassa hoger dan 3500 kg.
   *
   * **Type**: Text
   */
  WeggedragCode: FieldObject<DataType.Text>;
  /**
   * ### Wettelijk toegestane maximum aslast
   *
   * De wettelijk toegestane maximummassa op de as, afgeleid van de technisch toegestane maximummassa. Zo nodig is deze verminderd aan de hand van wettelijke bepalingen of op verzoek van de aanvrager van het kentekenbewijs.
   *
   * **Type**: Text
   */
  WettelijkToegestaneMaximumAslast: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  AangedrevenAs: Field("aangedreven_as", DataType.Text),
  AantalAssen: Field("aantal_assen", DataType.Text),
  AfstandTotVolgendeAsVoertuig: Field("afstand_tot_volgende_as_voertuig", DataType.Number),
  AfstandTotVolgendeAsVoertuigMaximum: Field(
    "afstand_tot_volgende_as_voertuig_maximum",
    DataType.Number,
  ),
  AfstandTotVolgendeAsVoertuigMinimum: Field(
    "afstand_tot_volgende_as_voertuig_minimum",
    DataType.Number,
  ),
  AsNummer: Field("as_nummer", DataType.Text),
  GeremdeAsIndicator: Field("geremde_as_indicator", DataType.Text),
  Hefas: Field("hefas", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  MaximumLastAsTechnischMaximum: Field("maximum_last_as_technisch_maximum", DataType.Number),
  MaximumLastAsTechnischMinimum: Field("maximum_last_as_technisch_minimum", DataType.Number),
  PlaatscodeAs: Field("plaatscode_as", DataType.Text),
  Spoorbreedte: Field("spoorbreedte", DataType.Text),
  TechnischToegestaneMaximumAslast: Field("technisch_toegestane_maximum_aslast", DataType.Text),
  WeggedragCode: Field("weggedrag_code", DataType.Text),
  WettelijkToegestaneMaximumAslast: Field("wettelijk_toegestane_maximum_aslast", DataType.Text),
};

export const Info = {
  fields: [
    "AangedrevenAs",
    "AantalAssen",
    "AfstandTotVolgendeAsVoertuig",
    "AfstandTotVolgendeAsVoertuigMaximum",
    "AfstandTotVolgendeAsVoertuigMinimum",
    "AsNummer",
    "GeremdeAsIndicator",
    "Hefas",
    "Kenteken",
    "MaximumLastAsTechnischMaximum",
    "MaximumLastAsTechnischMinimum",
    "PlaatscodeAs",
    "Spoorbreedte",
    "TechnischToegestaneMaximumAslast",
    "WeggedragCode",
    "WettelijkToegestaneMaximumAslast",
  ],
  dataset: "3huj-srit",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_assen",
  provider_name: "KentekenVoertuigenAssen",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_assen/3huj-srit",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/3huj-srit",
};

/**
 * ### Open Data RDW: Gekentekende_voertuigen_assen
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_assen/3huj-srit
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/3huj-srit
 *
 * **Dataset ID:** 3huj-srit
 *
 * **Category:** Voertuigen
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
