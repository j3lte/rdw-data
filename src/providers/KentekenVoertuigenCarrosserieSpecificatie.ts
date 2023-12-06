// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9
// Permalink: https://opendata.rdw.nl/d/jhie-znh9
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie
 */
export interface ResponseData {
  /**
   * ### Carrosserie voertuig nummer code volgnummer
   *
   * **Type**: Text
   */
  carrosserie_voertuig_nummer_code_volgnummer?: string;
  /**
   * ### Carrosserie voertuig nummer Europese omschrijving
   *
   * **Type**: Text
   */
  carrosserie_voertuig_nummer_europese_omschrijving?: string;
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   */
  carrosserie_volgnummer?: string;
  /**
   * ### Carrosseriecode
   * 
   * Europese codering voor het carrosserietype van een goedgekeurd compleet of voltooid voertuig van de EEG-VRTG-CAT M, N of O.
   * Zie bijlage II van de richtlijn 2007/46/EG voor codering.
   *
   * **Type**: Text
   */
  carrosseriecode?: string;
  /**
   * ### Kenteken
   * 
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  kenteken?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenCarrosserieSpecificatie**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieVoertuigNummerCodeVolgnummer`` | ``carrosserie_voertuig_nummer_code_volgnummer`` | _Text_ |
 * | ``CarrosserieVoertuigNummerEuropeseOmschrijving`` | ``carrosserie_voertuig_nummer_europese_omschrijving`` | _Text_ |
 * | ``CarrosserieVolgnummer`` | ``carrosserie_volgnummer`` | _Text_ |
 * | ``Carrosseriecode`` | ``carrosseriecode`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Carrosserie voertuig nummer code volgnummer
   *
   * **Type**: Text
   */
   CarrosserieVoertuigNummerCodeVolgnummer: FieldObject<DataType.Text>;
  /**
   * ### Carrosserie voertuig nummer Europese omschrijving
   *
   * **Type**: Text
   */
   CarrosserieVoertuigNummerEuropeseOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   */
   CarrosserieVolgnummer: FieldObject<DataType.Text>;
  /**
   * ### Carrosseriecode
   * 
   * Europese codering voor het carrosserietype van een goedgekeurd compleet of voltooid voertuig van de EEG-VRTG-CAT M, N of O.
   * Zie bijlage II van de richtlijn 2007/46/EG voor codering.
   *
   * **Type**: Text
   */
   Carrosseriecode: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   * 
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
   Kenteken: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  CarrosserieVoertuigNummerCodeVolgnummer: Field("carrosserie_voertuig_nummer_code_volgnummer", DataType.Text),
  CarrosserieVoertuigNummerEuropeseOmschrijving: Field("carrosserie_voertuig_nummer_europese_omschrijving", DataType.Text),
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Text),
  Carrosseriecode: Field("carrosseriecode", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
};

export const Info = {
  fields: [
    "CarrosserieVoertuigNummerCodeVolgnummer",
    "CarrosserieVoertuigNummerEuropeseOmschrijving",
    "CarrosserieVolgnummer",
    "Carrosseriecode",
    "Kenteken",
  ],
  dataset: "jhie-znh9",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie",
  provider_name: "KentekenVoertuigenCarrosserieSpecificatie",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/jhie-znh9",
}

/**
 * ### Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/jhie-znh9
 *
 * **Dataset ID:** jhie-znh9
 *
 * **Category:** Voertuigen
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
