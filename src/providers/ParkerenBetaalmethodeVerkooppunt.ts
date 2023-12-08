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

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: BETAALMETHODE VERKOOPPUNT
 */
export interface ParkerenBetaalmethodeVerkooppunt_ResponseData {
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
export const Fields = {
  /**
  * ### EndDatePaymentMethod
  * 
  * Einddatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `enddatepaymentmethod`
  */
  Enddatepaymentmethod: Field("enddatepaymentmethod", DataType.Text),
  /**
  * ### PaymentMethod
  * 
  * Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `paymentmethod`
  */
  Paymentmethod: Field("paymentmethod", DataType.Text),
  /**
  * ### SellingPointNumber
  * 
  * Identificatie van een verkooppunt.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `sellingpointnumber`
  */
  Sellingpointnumber: Field("sellingpointnumber", DataType.Number),
  /**
  * ### StartDatePaymentMethod
  * 
  * Begindatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `startdatepaymentmethod`
  */
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
}

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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: BETAALMETHODE VERKOOPPUNT dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Enddatepaymentmethod, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenBetaalmethodeVerkooppunt_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenBetaalmethodeVerkooppunt = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
