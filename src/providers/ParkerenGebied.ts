// *******************************************************
//
// Name: Open Data Parkeren: GEBIED
//
// Een benoemde ruimte met een gebruiksdoel waar een voertuig zich onder condities kan begeven of bevinden.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg
// Permalink: https://opendata.rdw.nl/d/adw6-9hsg
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: GEBIED
 */
export interface ResponseData {
  /**
   * ### AreaDesc
   *
   * Een omschrijving die aan een parkeergebied of -faciliteit is gegeven.
   *
   * **Type**: Text
   */
  areadesc?: string;
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
   * ### EndDateArea
   *
   * Datum waarop een parkeergebied of -faciliteit niet meer geldig is
   *
   * **Type**: Number
   */
  enddatearea?: string;
  /**
   * ### StartDateArea
   *
   * Datum vanaf wanneer een parkeergebied of -faciliteit geldig
   *
   * **Type**: Number
   */
  startdatearea?: string;
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een  parkeergebied of -faciliteit. Gebruiksdoelen kennen een hirarchie.
   *
   * **Type**: Text
   */
  usageid?: string;
}

/**
 * Fieldnames for **ParkerenGebied**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areadesc`` | ``areadesc`` | _Text_ |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatearea`` | ``enddatearea`` | _Number_ |
 * | ``Startdatearea`` | ``startdatearea`` | _Number_ |
 * | ``Usageid`` | ``usageid`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### AreaDesc
   *
   * Een omschrijving die aan een parkeergebied of -faciliteit is gegeven.
   *
   * **Type**: Text
   */
  Areadesc: FieldObject<DataType.Text>;
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
   * ### EndDateArea
   *
   * Datum waarop een parkeergebied of -faciliteit niet meer geldig is
   *
   * **Type**: Number
   */
  Enddatearea: FieldObject<DataType.Number>;
  /**
   * ### StartDateArea
   *
   * Datum vanaf wanneer een parkeergebied of -faciliteit geldig
   *
   * **Type**: Number
   */
  Startdatearea: FieldObject<DataType.Number>;
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een  parkeergebied of -faciliteit. Gebruiksdoelen kennen een hirarchie.
   *
   * **Type**: Text
   */
  Usageid: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areadesc: Field("areadesc", DataType.Text),
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddatearea: Field("enddatearea", DataType.Number),
  Startdatearea: Field("startdatearea", DataType.Number),
  Usageid: Field("usageid", DataType.Text),
};

export const Info = {
  fields: [
    "Areadesc",
    "Areaid",
    "Areamanagerid",
    "Enddatearea",
    "Startdatearea",
    "Usageid",
  ],
  dataset: "adw6-9hsg",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEBIED",
  provider_name: "ParkerenGebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/adw6-9hsg",
};

/**
 * ### Open Data Parkeren: GEBIED
 * Een benoemde ruimte met een gebruiksdoel waar een voertuig zich onder condities kan begeven of bevinden.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/adw6-9hsg
 *
 * **Dataset ID:** adw6-9hsg
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
