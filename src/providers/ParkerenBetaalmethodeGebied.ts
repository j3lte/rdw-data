// *******************************************************
//
// Name: Open Data Parkeren: BETAALMETHODE GEBIED
//
// Een mogelijke manier om te betalen voor het parkeren in een parkeergebied, -garage of -terrein.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5
// Permalink: https://opendata.rdw.nl/d/r3rs-ibz5
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data Parkeren: BETAALMETHODE GEBIED
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
   * ### EndDatePaymentMethod
   * 
   * Datum en tijd van het einde van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   */
  enddate?: string;
  /**
   * ### PaymentAtExit
   * 
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of -faciliteit zich bij de uitgang bevind.
   *
   * **Type**: Number
   */
  paymentatexit?: string;
  /**
   * ### PaymentAtPaystation
   * 
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of faciliteit beschikbaar is bij een verkooppunt.
   *
   * **Type**: Number
   */
  paymentatpaystation?: string;
  /**
   * ### PaymentMethod
   * 
   * Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  paymentmethod?: string;
  /**
   * ### StartDatePaymentMethod
   * 
   * Datum en tijd van het begin van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   */
  startdate?: string;
}

/**
 * Fieldnames for **ParkerenBetaalmethodeGebied**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddate`` | ``enddate`` | _Text_ |
 * | ``Paymentatexit`` | ``paymentatexit`` | _Number_ |
 * | ``Paymentatpaystation`` | ``paymentatpaystation`` | _Number_ |
 * | ``Paymentmethod`` | ``paymentmethod`` | _Text_ |
 * | ``Startdate`` | ``startdate`` | _Text_ |
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
   * ### EndDatePaymentMethod
   * 
   * Datum en tijd van het einde van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   */
   Enddate: FieldObject<DataType.Text>;
  /**
   * ### PaymentAtExit
   * 
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of -faciliteit zich bij de uitgang bevind.
   *
   * **Type**: Number
   */
   Paymentatexit: FieldObject<DataType.Number>;
  /**
   * ### PaymentAtPaystation
   * 
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of faciliteit beschikbaar is bij een verkooppunt.
   *
   * **Type**: Number
   */
   Paymentatpaystation: FieldObject<DataType.Number>;
  /**
   * ### PaymentMethod
   * 
   * Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
   Paymentmethod: FieldObject<DataType.Text>;
  /**
   * ### StartDatePaymentMethod
   * 
   * Datum en tijd van het begin van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   */
   Startdate: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddate: Field("enddate", DataType.Text),
  Paymentatexit: Field("paymentatexit", DataType.Number),
  Paymentatpaystation: Field("paymentatpaystation", DataType.Number),
  Paymentmethod: Field("paymentmethod", DataType.Text),
  Startdate: Field("startdate", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Enddate",
    "Paymentatexit",
    "Paymentatpaystation",
    "Paymentmethod",
    "Startdate",
  ],
  dataset: "r3rs-ibz5",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: BETAALMETHODE GEBIED",
  provider_name: "ParkerenBetaalmethodeGebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/r3rs-ibz5",
}

/**
 * ### Open Data Parkeren: BETAALMETHODE GEBIED
 * Een mogelijke manier om te betalen voor het parkeren in een parkeergebied, -garage of -terrein.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/r3rs-ibz5
 *
 * **Dataset ID:** r3rs-ibz5
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
