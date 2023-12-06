// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_rupsbanden
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince
// Permalink: https://opendata.rdw.nl/d/3xwf-ince
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_rupsbanden
 */
export interface ResponseData {
  /**
   * ### Aangedreven rupsband indicator
   *
   * **Type**: Text
   */
  aangedreven_rupsband_indicator?: string;
  /**
   * ### Geremde rupsband indicator
   *
   * **Type**: Text
   */
  geremde_rupsband_indicator?: string;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Rupsband set volgnummer
   *
   * **Type**: Number
   */
  rupsband_set_volgnr?: string;
  /**
   * ### Technisch toelaatbaar maximum massa rupsbandset
   *
   * **Type**: Number
   */
  technisch_toelaatbaar_maximum?: string;
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set minimum
   *
   * **Type**: Number
   */
  technisch_toelaatbaar_maximum_1?: string;
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set maximum
   *
   * **Type**: Number
   */
  technisch_toelaatbaar_maximum_2?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenRupsbanden**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AangedrevenRupsbandIndicator`` | ``aangedreven_rupsband_indicator`` | _Text_ |
 * | ``GeremdeRupsbandIndicator`` | ``geremde_rupsband_indicator`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``RupsbandSetVolgnr`` | ``rupsband_set_volgnr`` | _Number_ |
 * | ``TechnischToelaatbaarMaximum`` | ``technisch_toelaatbaar_maximum`` | _Number_ |
 * | ``TechnischToelaatbaarMaximum1`` | ``technisch_toelaatbaar_maximum_1`` | _Number_ |
 * | ``TechnischToelaatbaarMaximum2`` | ``technisch_toelaatbaar_maximum_2`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Aangedreven rupsband indicator
   *
   * **Type**: Text
   */
   AangedrevenRupsbandIndicator: FieldObject<DataType.Text>;
  /**
   * ### Geremde rupsband indicator
   *
   * **Type**: Text
   */
   GeremdeRupsbandIndicator: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
   Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Rupsband set volgnummer
   *
   * **Type**: Number
   */
   RupsbandSetVolgnr: FieldObject<DataType.Number>;
  /**
   * ### Technisch toelaatbaar maximum massa rupsbandset
   *
   * **Type**: Number
   */
   TechnischToelaatbaarMaximum: FieldObject<DataType.Number>;
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set minimum
   *
   * **Type**: Number
   */
   TechnischToelaatbaarMaximum1: FieldObject<DataType.Number>;
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set maximum
   *
   * **Type**: Number
   */
   TechnischToelaatbaarMaximum2: FieldObject<DataType.Number>;
};

export const Fields: IFields = {
  AangedrevenRupsbandIndicator: Field("aangedreven_rupsband_indicator", DataType.Text),
  GeremdeRupsbandIndicator: Field("geremde_rupsband_indicator", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  RupsbandSetVolgnr: Field("rupsband_set_volgnr", DataType.Number),
  TechnischToelaatbaarMaximum: Field("technisch_toelaatbaar_maximum", DataType.Number),
  TechnischToelaatbaarMaximum1: Field("technisch_toelaatbaar_maximum_1", DataType.Number),
  TechnischToelaatbaarMaximum2: Field("technisch_toelaatbaar_maximum_2", DataType.Number),
};

export const Info = {
  fields: [
    "AangedrevenRupsbandIndicator",
    "GeremdeRupsbandIndicator",
    "Kenteken",
    "RupsbandSetVolgnr",
    "TechnischToelaatbaarMaximum",
    "TechnischToelaatbaarMaximum1",
    "TechnischToelaatbaarMaximum2",
  ],
  dataset: "3xwf-ince",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_rupsbanden",
  provider_name: "KentekenVoertuigenRupsbanden",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/3xwf-ince",
}

/**
 * ### Open Data RDW: Gekentekende_voertuigen_rupsbanden
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/3xwf-ince
 *
 * **Dataset ID:** 3xwf-ince
 *
 * **Category:** Voertuigen
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
