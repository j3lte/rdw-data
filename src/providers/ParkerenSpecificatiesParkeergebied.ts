// *******************************************************
//
// Name: Open Data Parkeren: SPECIFICATIES PARKEERGEBIED
//
// Specificaties behorende bij een parkeerterrein of parkeergarage, zoals het aantal parkeerplaatsen en oplaadpunten.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s
// Permalink: https://opendata.rdw.nl/d/b3us-f26s
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data Parkeren: SPECIFICATIES PARKEERGEBIED
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
   * ### Capacity
   * 
   * Het aantal parkeerplaatsen in een parkeergebied of faciliteit.
   *
   * **Type**: Number
   */
  capacity?: string;
  /**
   * ### ChargingPointCapacity
   * 
   * Het aantal plaatsen binnen een parkeergebied of faciliteit dat is voorzien van een oplaadpunt voor elektrische voertuigen.
   *
   * **Type**: Number
   */
  chargingpointcapacity?: string;
  /**
   * ### DisabledAccess
   * 
   * Indicator die aangeeft aangeeft of een parkeerterrein toegankelijk is voor personen die afhankelijk zijn van een rolstoel.
   * J = Ja, toegankelijkheid met een rolstoel.
   * N = Nee, geen toegankelijkheid met een rolstoel.
   *
   * **Type**: Number
   */
  disabledaccess?: string;
  /**
   * ### EndDateSpecifications
   * 
   * Datum en tijd van het einde van een periode waarin specificaties van een parkeergebied of -faciliteit geldig zijn.
   *
   * **Type**: Text
   */
  enddatespecifications?: string;
  /**
   * ### LimitedAccess
   * 
   * Indicator die aangeeft of de dynamische gegevens behorende bij een parkeergebied of faciliteit beperkt of vrij toegankelijk zijn.  J = Beperkt toegankelijk
   * N = Vrij toegankelijk.
   *
   * **Type**: Text
   */
  limitedaccess?: string;
  /**
   * ### MaximumVehicleHeight
   * 
   * Maximale hoogte van een voertuig dat kan parkeren in een parkeergebied of faciliteit (in cm).
   *
   * **Type**: Number
   */
  maximumvehicleheight?: string;
  /**
   * ### StartDateSpecifications
   * 
   * Datum en tijd van het begin van een periode waarin specificaties van een parkeergebied of -faciliteit geldig zijn.
   *
   * **Type**: Text
   */
  startdatespecifications?: string;
}

/**
 * Fieldnames for **ParkerenSpecificatiesParkeergebied**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Capacity`` | ``capacity`` | _Number_ |
 * | ``Chargingpointcapacity`` | ``chargingpointcapacity`` | _Number_ |
 * | ``Disabledaccess`` | ``disabledaccess`` | _Number_ |
 * | ``Enddatespecifications`` | ``enddatespecifications`` | _Text_ |
 * | ``Limitedaccess`` | ``limitedaccess`` | _Text_ |
 * | ``Maximumvehicleheight`` | ``maximumvehicleheight`` | _Number_ |
 * | ``Startdatespecifications`` | ``startdatespecifications`` | _Text_ |
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
   * ### Capacity
   * 
   * Het aantal parkeerplaatsen in een parkeergebied of faciliteit.
   *
   * **Type**: Number
   */
   Capacity: FieldObject<DataType.Number>;
  /**
   * ### ChargingPointCapacity
   * 
   * Het aantal plaatsen binnen een parkeergebied of faciliteit dat is voorzien van een oplaadpunt voor elektrische voertuigen.
   *
   * **Type**: Number
   */
   Chargingpointcapacity: FieldObject<DataType.Number>;
  /**
   * ### DisabledAccess
   * 
   * Indicator die aangeeft aangeeft of een parkeerterrein toegankelijk is voor personen die afhankelijk zijn van een rolstoel.
   * J = Ja, toegankelijkheid met een rolstoel.
   * N = Nee, geen toegankelijkheid met een rolstoel.
   *
   * **Type**: Number
   */
   Disabledaccess: FieldObject<DataType.Number>;
  /**
   * ### EndDateSpecifications
   * 
   * Datum en tijd van het einde van een periode waarin specificaties van een parkeergebied of -faciliteit geldig zijn.
   *
   * **Type**: Text
   */
   Enddatespecifications: FieldObject<DataType.Text>;
  /**
   * ### LimitedAccess
   * 
   * Indicator die aangeeft of de dynamische gegevens behorende bij een parkeergebied of faciliteit beperkt of vrij toegankelijk zijn.  J = Beperkt toegankelijk
   * N = Vrij toegankelijk.
   *
   * **Type**: Text
   */
   Limitedaccess: FieldObject<DataType.Text>;
  /**
   * ### MaximumVehicleHeight
   * 
   * Maximale hoogte van een voertuig dat kan parkeren in een parkeergebied of faciliteit (in cm).
   *
   * **Type**: Number
   */
   Maximumvehicleheight: FieldObject<DataType.Number>;
  /**
   * ### StartDateSpecifications
   * 
   * Datum en tijd van het begin van een periode waarin specificaties van een parkeergebied of -faciliteit geldig zijn.
   *
   * **Type**: Text
   */
   Startdatespecifications: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Capacity: Field("capacity", DataType.Number),
  Chargingpointcapacity: Field("chargingpointcapacity", DataType.Number),
  Disabledaccess: Field("disabledaccess", DataType.Number),
  Enddatespecifications: Field("enddatespecifications", DataType.Text),
  Limitedaccess: Field("limitedaccess", DataType.Text),
  Maximumvehicleheight: Field("maximumvehicleheight", DataType.Number),
  Startdatespecifications: Field("startdatespecifications", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Capacity",
    "Chargingpointcapacity",
    "Disabledaccess",
    "Enddatespecifications",
    "Limitedaccess",
    "Maximumvehicleheight",
    "Startdatespecifications",
  ],
  dataset: "b3us-f26s",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: SPECIFICATIES PARKEERGEBIED",
  provider_name: "ParkerenSpecificatiesParkeergebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/b3us-f26s",
}

/**
 * ### Open Data Parkeren: SPECIFICATIES PARKEERGEBIED
 * Specificaties behorende bij een parkeerterrein of parkeergarage, zoals het aantal parkeerplaatsen en oplaadpunten.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/b3us-f26s
 *
 * **Dataset ID:** b3us-f26s
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
