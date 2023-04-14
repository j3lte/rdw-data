// *******************************************************
//
// Name: Open Data Parkeren: IN-UITGANG
//
// Tabel met informatie over een in- of uitgang (voor voertuigen of personen) van een parkeerfaciliteit.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-IN-UITGANG/c653-u9z2
// Permalink: https://opendata.rdw.nl/d/c653-u9z2
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.3/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.3/mod.ts";
export {
  Order,
  Select,
  SelectAll,
  SelectGreatest,
  SelectLeast,
  SelectRegrIntercept,
  SelectRegrR2,
  SelectRegrSlope,
  SystemFields,
  Where,
} from "https://deno.land/x/soda@0.4.3/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data Parkeren: IN-UITGANG
 */
export interface ResponseData {
  /**
   * ### Alias
   *
   * Alias of alternatieve omschrijving van een in- of uitgang van een parkeerfaciliteit.
   *
   * **Type**: Text
   */
  alias?: string;
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
   * ### EndDateEntranceOrExit
   *
   * Datum en tijd van het einde van een periode waarin gegevens over een in- of uitgang van een parkeergebied of - faciliteit geldig zijn.
   *
   * **Type**: Text
   */
  enddateentranceorexit?: string;
  /**
   * ### EntranceExitId
   *
   * Identificatiecode die in- en uitgangen van alle parkeergebieden onderscheidt.
   *
   * **Type**: Number
   */
  entranceexitid?: string;
  /**
   * ### PedestrianEntrance
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voetgangersingang is.
   *
   * **Type**: Number
   */
  pedestrianentrance?: string;
  /**
   * ### PedestrianExit
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voetgangersuitgang is.
   *
   * **Type**: Number
   */
  pedestrianexit?: string;
  /**
   * ### StartDateEntranceOrExit
   *
   * Datum en tijd van het begin van een periode waarin gegevens over een in- of uitgang van een parkeergebied of - faciliteit geldig zijn.
   *
   * **Type**: Text
   */
  startdateentranceorexit?: string;
  /**
   * ### VehicleEntrance
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voertuigingang is.
   *
   * **Type**: Number
   */
  vehicleentrance?: string;
  /**
   * ### VehicleExit
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voertuiguitgang is.
   *
   * **Type**: Number
   */
  vehicleexit?: string;
}

/**
 * Fieldnames for **ParkerenInUitgang**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Alias`` | ``alias`` | _Text_ |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddateentranceorexit`` | ``enddateentranceorexit`` | _Text_ |
 * | ``Entranceexitid`` | ``entranceexitid`` | _Number_ |
 * | ``Pedestrianentrance`` | ``pedestrianentrance`` | _Number_ |
 * | ``Pedestrianexit`` | ``pedestrianexit`` | _Number_ |
 * | ``Startdateentranceorexit`` | ``startdateentranceorexit`` | _Text_ |
 * | ``Vehicleentrance`` | ``vehicleentrance`` | _Number_ |
 * | ``Vehicleexit`` | ``vehicleexit`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Alias
   *
   * Alias of alternatieve omschrijving van een in- of uitgang van een parkeerfaciliteit.
   *
   * **Type**: Text
   */
  Alias: FieldObject<DataType.Text>;
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
   * ### EndDateEntranceOrExit
   *
   * Datum en tijd van het einde van een periode waarin gegevens over een in- of uitgang van een parkeergebied of - faciliteit geldig zijn.
   *
   * **Type**: Text
   */
  Enddateentranceorexit: FieldObject<DataType.Text>;
  /**
   * ### EntranceExitId
   *
   * Identificatiecode die in- en uitgangen van alle parkeergebieden onderscheidt.
   *
   * **Type**: Number
   */
  Entranceexitid: FieldObject<DataType.Number>;
  /**
   * ### PedestrianEntrance
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voetgangersingang is.
   *
   * **Type**: Number
   */
  Pedestrianentrance: FieldObject<DataType.Number>;
  /**
   * ### PedestrianExit
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voetgangersuitgang is.
   *
   * **Type**: Number
   */
  Pedestrianexit: FieldObject<DataType.Number>;
  /**
   * ### StartDateEntranceOrExit
   *
   * Datum en tijd van het begin van een periode waarin gegevens over een in- of uitgang van een parkeergebied of - faciliteit geldig zijn.
   *
   * **Type**: Text
   */
  Startdateentranceorexit: FieldObject<DataType.Text>;
  /**
   * ### VehicleEntrance
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voertuigingang is.
   *
   * **Type**: Number
   */
  Vehicleentrance: FieldObject<DataType.Number>;
  /**
   * ### VehicleExit
   *
   * Indicator die aangeeft of een in- of uitgang van een parkeerfaciliteit een voertuiguitgang is.
   *
   * **Type**: Number
   */
  Vehicleexit: FieldObject<DataType.Number>;
}

export const Fields: IFields = {
  Alias: Field("alias", DataType.Text),
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddateentranceorexit: Field("enddateentranceorexit", DataType.Text),
  Entranceexitid: Field("entranceexitid", DataType.Number),
  Pedestrianentrance: Field("pedestrianentrance", DataType.Number),
  Pedestrianexit: Field("pedestrianexit", DataType.Number),
  Startdateentranceorexit: Field("startdateentranceorexit", DataType.Text),
  Vehicleentrance: Field("vehicleentrance", DataType.Number),
  Vehicleexit: Field("vehicleexit", DataType.Number),
};

export const Info = {
  fields: [
    "Alias",
    "Areaid",
    "Areamanagerid",
    "Enddateentranceorexit",
    "Entranceexitid",
    "Pedestrianentrance",
    "Pedestrianexit",
    "Startdateentranceorexit",
    "Vehicleentrance",
    "Vehicleexit",
  ],
  dataset: "c653-u9z2",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: IN-UITGANG",
  provider_name: "ParkerenInUitgang",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-IN-UITGANG/c653-u9z2",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/c653-u9z2",
};

/**
 * ### Open Data Parkeren: IN-UITGANG
 * Tabel met informatie over een in- of uitgang (voor voertuigen of personen) van een parkeerfaciliteit.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-IN-UITGANG/c653-u9z2
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/c653-u9z2
 *
 * **Dataset ID:** c653-u9z2
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
