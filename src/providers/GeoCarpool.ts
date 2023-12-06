// *******************************************************
//
// Name: GEO Carpool
//
// GEO Data laag met Carpool locaties.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx
// Permalink: https://opendata.rdw.nl/d/9c54-cmfx
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for GEO Carpool
 */
export interface ResponseData {
  /**
   * ### Aantal laad punten
   *
   * **Type**: Number
   */
  aantal_laad_punten?: string;
  /**
   * ### Aantal parkeer plaatsen
   *
   * **Type**: Number
   */
  aantal_parkeer_plaatsen?: string;
  /**
   * ### AreaDesc
   *
   * **Type**: Text
   */
  areadesc?: string;
  /**
   * ### AreaId
   *
   * **Type**: Text
   */
  areaid?: string;
  /**
   * ### AreaManagerId
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDataArea
   *
   * **Type**: Number
   */
  enddataarea?: string;
  /**
   * ### Location
   *
   * **Type**: Point
   */
  location?: { latitude: string; longitude: string; human_address: null | string; };
  /**
   * ### Location (address)
   *
   * **Type**: Text
   */
  location_address?: string;
  /**
   * ### Location (city)
   *
   * **Type**: Text
   */
  location_city?: string;
  /**
   * ### Location (state)
   *
   * **Type**: Text
   */
  location_state?: string;
  /**
   * ### Location (zip)
   *
   * **Type**: Text
   */
  location_zip?: string;
  /**
   * ### Maximale doorrijhoogte
   *
   * **Type**: Text
   */
  maximale_inrij_hoogte?: string;
  /**
   * ### StartDataArea
   *
   * **Type**: Number
   */
  startdataarea?: string;
  /**
   * ### Toegankelijk voor gehandicapten
   *
   * **Type**: Number
   */
  toegankelijk_voor_gehandicapten?: string;
  /**
   * ### UsageId
   *
   * **Type**: Text
   */
  usageid?: string;
}

/**
 * Fieldnames for **GeoCarpool**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AantalLaadPunten`` | ``aantal_laad_punten`` | _Number_ |
 * | ``AantalParkeerPlaatsen`` | ``aantal_parkeer_plaatsen`` | _Number_ |
 * | ``Areadesc`` | ``areadesc`` | _Text_ |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddataarea`` | ``enddataarea`` | _Number_ |
 * | ``Location`` | ``location`` | _Point_ |
 * | ``LocationAddress`` | ``location_address`` | _Text_ |
 * | ``LocationCity`` | ``location_city`` | _Text_ |
 * | ``LocationState`` | ``location_state`` | _Text_ |
 * | ``LocationZip`` | ``location_zip`` | _Text_ |
 * | ``MaximaleInrijHoogte`` | ``maximale_inrij_hoogte`` | _Text_ |
 * | ``Startdataarea`` | ``startdataarea`` | _Number_ |
 * | ``ToegankelijkVoorGehandicapten`` | ``toegankelijk_voor_gehandicapten`` | _Number_ |
 * | ``Usageid`` | ``usageid`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Aantal laad punten
   *
   * **Type**: Number
   */
   AantalLaadPunten: FieldObject<DataType.Number>;
  /**
   * ### Aantal parkeer plaatsen
   *
   * **Type**: Number
   */
   AantalParkeerPlaatsen: FieldObject<DataType.Number>;
  /**
   * ### AreaDesc
   *
   * **Type**: Text
   */
   Areadesc: FieldObject<DataType.Text>;
  /**
   * ### AreaId
   *
   * **Type**: Text
   */
   Areaid: FieldObject<DataType.Text>;
  /**
   * ### AreaManagerId
   *
   * **Type**: Number
   */
   Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### EndDataArea
   *
   * **Type**: Number
   */
   Enddataarea: FieldObject<DataType.Number>;
  /**
   * ### Location
   *
   * **Type**: Point
   */
   Location: FieldObject<DataType.Point>;
  /**
   * ### Location (address)
   *
   * **Type**: Text
   */
   LocationAddress: FieldObject<DataType.Text>;
  /**
   * ### Location (city)
   *
   * **Type**: Text
   */
   LocationCity: FieldObject<DataType.Text>;
  /**
   * ### Location (state)
   *
   * **Type**: Text
   */
   LocationState: FieldObject<DataType.Text>;
  /**
   * ### Location (zip)
   *
   * **Type**: Text
   */
   LocationZip: FieldObject<DataType.Text>;
  /**
   * ### Maximale doorrijhoogte
   *
   * **Type**: Text
   */
   MaximaleInrijHoogte: FieldObject<DataType.Text>;
  /**
   * ### StartDataArea
   *
   * **Type**: Number
   */
   Startdataarea: FieldObject<DataType.Number>;
  /**
   * ### Toegankelijk voor gehandicapten
   *
   * **Type**: Number
   */
   ToegankelijkVoorGehandicapten: FieldObject<DataType.Number>;
  /**
   * ### UsageId
   *
   * **Type**: Text
   */
   Usageid: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  AantalLaadPunten: Field("aantal_laad_punten", DataType.Number),
  AantalParkeerPlaatsen: Field("aantal_parkeer_plaatsen", DataType.Number),
  Areadesc: Field("areadesc", DataType.Text),
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddataarea: Field("enddataarea", DataType.Number),
  Location: Field("location", DataType.Point),
  LocationAddress: Field("location_address", DataType.Text),
  LocationCity: Field("location_city", DataType.Text),
  LocationState: Field("location_state", DataType.Text),
  LocationZip: Field("location_zip", DataType.Text),
  MaximaleInrijHoogte: Field("maximale_inrij_hoogte", DataType.Text),
  Startdataarea: Field("startdataarea", DataType.Number),
  ToegankelijkVoorGehandicapten: Field("toegankelijk_voor_gehandicapten", DataType.Number),
  Usageid: Field("usageid", DataType.Text),
};

export const Info = {
  fields: [
    "AantalLaadPunten",
    "AantalParkeerPlaatsen",
    "Areadesc",
    "Areaid",
    "Areamanagerid",
    "Enddataarea",
    "Location",
    "LocationAddress",
    "LocationCity",
    "LocationState",
    "LocationZip",
    "MaximaleInrijHoogte",
    "Startdataarea",
    "ToegankelijkVoorGehandicapten",
    "Usageid",
  ],
  dataset: "9c54-cmfx",
  domain: "opendata.rdw.nl",
  full_name: "GEO Carpool",
  provider_name: "GeoCarpool",
  url: "https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/9c54-cmfx",
}

/**
 * ### GEO Carpool
 * GEO Data laag met Carpool locaties.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/9c54-cmfx
 *
 * **Dataset ID:** 9c54-cmfx
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
