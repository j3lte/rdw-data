// *******************************************************
//
// Name: Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON
//
// Informatie over de koppeling tussen een parkeergebied of -faciliteit en een contactpersoon
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283
// Permalink: https://opendata.rdw.nl/d/69hx-t283
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON
 */
export interface ParkerenParkeergebiedContactpersoon_ResponseData {
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
   * **Type**: Text
   */
  areamanagerid?: string;
  /**
   * ### ContactPersonId
   * 
   * Identificatiecode van de contactpersoon.
   *
   * **Type**: Text
   */
  contactpersonid?: string;
  /**
   * ### ValidityEndOfPeriod
   * 
   * Datum en tijd van het einde van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   */
  validityendofperiod?: string;
  /**
   * ### ValidityStartOfPeriod
   * 
   * Datum en tijd van het begin van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   */
  validitystartofperiod?: string;
}

/**
 * Fieldnames for **ParkerenParkeergebiedContactpersoon**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Text_ |
 * | ``Contactpersonid`` | ``contactpersonid`` | _Text_ |
 * | ``Validityendofperiod`` | ``validityendofperiod`` | _Text_ |
 * | ``Validitystartofperiod`` | ``validitystartofperiod`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### AreaId
  * 
  * Identificatiecode van een parkeergebied of - faciliteit.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `areaid`
  */
  Areaid: Field("areaid", DataType.Text),
  /**
  * ### AreaManagerId
  * 
  * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `areamanagerid`
  */
  Areamanagerid: Field("areamanagerid", DataType.Text),
  /**
  * ### ContactPersonId
  * 
  * Identificatiecode van de contactpersoon.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `contactpersonid`
  */
  Contactpersonid: Field("contactpersonid", DataType.Text),
  /**
  * ### ValidityEndOfPeriod
  * 
  * Datum en tijd van het einde van een periode waarin gegevens van
  * een contactpersoon geldig zijn.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `validityendofperiod`
  */
  Validityendofperiod: Field("validityendofperiod", DataType.Text),
  /**
  * ### ValidityStartOfPeriod
  * 
  * Datum en tijd van het begin van een periode waarin gegevens van
  * een contactpersoon geldig zijn.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `validitystartofperiod`
  */
  Validitystartofperiod: Field("validitystartofperiod", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Contactpersonid",
    "Validityendofperiod",
    "Validitystartofperiod",
  ],
  dataset: "69hx-t283",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON",
  provider_name: "ParkerenParkeergebiedContactpersoon",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/69hx-t283",
}

/**
 * ### Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON
 * Informatie over de koppeling tussen een parkeergebied of -faciliteit en een contactpersoon
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/69hx-t283
 *
 * **Dataset ID:** 69hx-t283
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areaid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenParkeergebiedContactpersoon_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenParkeergebiedContactpersoon = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
