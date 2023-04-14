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
 * Return Data for Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON
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
 *
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
   * **Type**: Text
   */
  Areamanagerid: FieldObject<DataType.Text>;
  /**
   * ### ContactPersonId
   *
   * Identificatiecode van de contactpersoon.
   *
   * **Type**: Text
   */
  Contactpersonid: FieldObject<DataType.Text>;
  /**
   * ### ValidityEndOfPeriod
   *
   * Datum en tijd van het einde van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   */
  Validityendofperiod: FieldObject<DataType.Text>;
  /**
   * ### ValidityStartOfPeriod
   *
   * Datum en tijd van het begin van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   */
  Validitystartofperiod: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Text),
  Contactpersonid: Field("contactpersonid", DataType.Text),
  Validityendofperiod: Field("validityendofperiod", DataType.Text),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
