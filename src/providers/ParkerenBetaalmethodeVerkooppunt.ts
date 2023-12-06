// *******************************************************
//
// Name: Open Data Parkeren: BETAALMETHODE VERKOOPPUNT
//
// Een betaalmethode die gebruikt kan worden bij een bepaald verkooppunt of betaalautomaat van een parkeergebied, -garage of -terrein.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx
// Permalink: https://opendata.rdw.nl/d/j96a-7nhx
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: BETAALMETHODE VERKOOPPUNT
 */
export interface ResponseData {
  /**
   * ### EndDatePaymentMethod
   *
   * Einddatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.
   *
   * **Type**: Text
   */
  enddatepaymentmethod?: string;
  /**
   * ### PaymentMethod
   *
   * Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  paymentmethod?: string;
  /**
   * ### SellingPointNumber
   *
   * Identificatie van een verkooppunt.
   *
   * **Type**: Number
   */
  sellingpointnumber?: string;
  /**
   * ### StartDatePaymentMethod
   *
   * Begindatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.
   *
   * **Type**: Text
   */
  startdatepaymentmethod?: string;
}

/**
 * Fieldnames for **ParkerenBetaalmethodeVerkooppunt**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Enddatepaymentmethod`` | ``enddatepaymentmethod`` | _Text_ |
 * | ``Paymentmethod`` | ``paymentmethod`` | _Text_ |
 * | ``Sellingpointnumber`` | ``sellingpointnumber`` | _Number_ |
 * | ``Startdatepaymentmethod`` | ``startdatepaymentmethod`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### EndDatePaymentMethod
   *
   * Einddatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.
   *
   * **Type**: Text
   */
  Enddatepaymentmethod: FieldObject<DataType.Text>;
  /**
   * ### PaymentMethod
   *
   * Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  Paymentmethod: FieldObject<DataType.Text>;
  /**
   * ### SellingPointNumber
   *
   * Identificatie van een verkooppunt.
   *
   * **Type**: Number
   */
  Sellingpointnumber: FieldObject<DataType.Number>;
  /**
   * ### StartDatePaymentMethod
   *
   * Begindatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.
   *
   * **Type**: Text
   */
  Startdatepaymentmethod: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Enddatepaymentmethod: Field("enddatepaymentmethod", DataType.Text),
  Paymentmethod: Field("paymentmethod", DataType.Text),
  Sellingpointnumber: Field("sellingpointnumber", DataType.Number),
  Startdatepaymentmethod: Field("startdatepaymentmethod", DataType.Text),
};

export const Info = {
  fields: [
    "Enddatepaymentmethod",
    "Paymentmethod",
    "Sellingpointnumber",
    "Startdatepaymentmethod",
  ],
  dataset: "j96a-7nhx",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: BETAALMETHODE VERKOOPPUNT",
  provider_name: "ParkerenBetaalmethodeVerkooppunt",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/j96a-7nhx",
};

/**
 * ### Open Data Parkeren: BETAALMETHODE VERKOOPPUNT
 * Een betaalmethode die gebruikt kan worden bij een bepaald verkooppunt of betaalautomaat van een parkeergebied, -garage of -terrein.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/j96a-7nhx
 *
 * **Dataset ID:** j96a-7nhx
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
