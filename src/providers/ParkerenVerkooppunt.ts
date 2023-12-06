// *******************************************************
//
// Name: Open Data Parkeren: VERKOOPPUNT
//
// Een plaats waar (parkeer)rechten verstrekt kunnen worden.
// Een voor de hand liggend voorbeeld is een parkeerautomaat, die zich in één specifiek gebied bevindt. Deze entiteit is opgenomen omdat parkeerautomaten een eigen identificatie (uniek in heel Nederland dankzij afspraken tussen providers) hebben die in de berichten doorgegeven kan worden. Via dit SellingPointID kan bepaald worden in welk gebied de automaat zich bevindt en voor welk gebied het recht is verworven.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-VERKOOPPUNT/fk68-nf2y
// Permalink: https://opendata.rdw.nl/d/fk68-nf2y
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: VERKOOPPUNT
 */
export interface ResponseData {
  /**
   * ### AreaId
   * 
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   */
  areaid?: string;
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateSellingPoint
   * 
   * Eerste dag waarop een bepaald verkooppunt niet meer actief is.
   *
   * **Type**: Number
   */
  enddatesellingpoint?: string;
  /**
   * ### SellingPointDesc
   * 
   * Omschrijving van een verkooppunt.
   *
   * **Type**: Text
   */
  sellingpointdesc?: string;
  /**
   * ### SellingPointId
   * 
   * Identificatie van een verkooppunt, zoals afgesproken tussen providers. De code is numeriek (ivm gegevensinvoer telefoon). De nummers zijn maximaal 6-cijferig (vb 9312, 13199), maar kunnen in de toekomst langer worden. Het behoeven niet altijd parkeerautomaat-identificaties te zijn: ook losse nummers op bebording komen voor. De nummers zijn niet uniek: eenzelfde SellinPointId kan op meer automaten of borden zijn weergegeven, die dan een verkooppuntgroep vormen.
   *
   * **Type**: Number
   */
  sellingpointid?: string;
  /**
   * ### SellingPointNumber
   * 
   * Identificatie van een verkooppunt.
   *
   * **Type**: Number
   */
  sellingpointnumber?: string;
  /**
   * ### StartDateSellingPoint
   * 
   * Datum vanaf wanneer een bepaald verkooppunt actief is
   *
   * **Type**: Number
   */
  startdatesellingpoint?: string;
}

/**
 * Fieldnames for **ParkerenVerkooppunt**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatesellingpoint`` | ``enddatesellingpoint`` | _Number_ |
 * | ``Sellingpointdesc`` | ``sellingpointdesc`` | _Text_ |
 * | ``Sellingpointid`` | ``sellingpointid`` | _Number_ |
 * | ``Sellingpointnumber`` | ``sellingpointnumber`` | _Number_ |
 * | ``Startdatesellingpoint`` | ``startdatesellingpoint`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### AreaId
   * 
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   */
   Areaid: FieldObject<DataType.Text>;
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
   Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### EndDateSellingPoint
   * 
   * Eerste dag waarop een bepaald verkooppunt niet meer actief is.
   *
   * **Type**: Number
   */
   Enddatesellingpoint: FieldObject<DataType.Number>;
  /**
   * ### SellingPointDesc
   * 
   * Omschrijving van een verkooppunt.
   *
   * **Type**: Text
   */
   Sellingpointdesc: FieldObject<DataType.Text>;
  /**
   * ### SellingPointId
   * 
   * Identificatie van een verkooppunt, zoals afgesproken tussen providers. De code is numeriek (ivm gegevensinvoer telefoon). De nummers zijn maximaal 6-cijferig (vb 9312, 13199), maar kunnen in de toekomst langer worden. Het behoeven niet altijd parkeerautomaat-identificaties te zijn: ook losse nummers op bebording komen voor. De nummers zijn niet uniek: eenzelfde SellinPointId kan op meer automaten of borden zijn weergegeven, die dan een verkooppuntgroep vormen.
   *
   * **Type**: Number
   */
   Sellingpointid: FieldObject<DataType.Number>;
  /**
   * ### SellingPointNumber
   * 
   * Identificatie van een verkooppunt.
   *
   * **Type**: Number
   */
   Sellingpointnumber: FieldObject<DataType.Number>;
  /**
   * ### StartDateSellingPoint
   * 
   * Datum vanaf wanneer een bepaald verkooppunt actief is
   *
   * **Type**: Number
   */
   Startdatesellingpoint: FieldObject<DataType.Number>;
};

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddatesellingpoint: Field("enddatesellingpoint", DataType.Number),
  Sellingpointdesc: Field("sellingpointdesc", DataType.Text),
  Sellingpointid: Field("sellingpointid", DataType.Number),
  Sellingpointnumber: Field("sellingpointnumber", DataType.Number),
  Startdatesellingpoint: Field("startdatesellingpoint", DataType.Number),
};

export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Enddatesellingpoint",
    "Sellingpointdesc",
    "Sellingpointid",
    "Sellingpointnumber",
    "Startdatesellingpoint",
  ],
  dataset: "fk68-nf2y",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: VERKOOPPUNT",
  provider_name: "ParkerenVerkooppunt",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-VERKOOPPUNT/fk68-nf2y",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/fk68-nf2y",
}

/**
 * ### Open Data Parkeren: VERKOOPPUNT
 * Een plaats waar (parkeer)rechten verstrekt kunnen worden.
 * Een voor de hand liggend voorbeeld is een parkeerautomaat, die zich in één specifiek gebied bevindt. Deze entiteit is opgenomen omdat parkeerautomaten een eigen identificatie (uniek in heel Nederland dankzij afspraken tussen providers) hebben die in de berichten doorgegeven kan worden. Via dit SellingPointID kan bepaald worden in welk gebied de automaat zich bevindt en voor welk gebied het recht is verworven.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-VERKOOPPUNT/fk68-nf2y
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/fk68-nf2y
 *
 * **Dataset ID:** fk68-nf2y
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
