// *******************************************************
//
// Name: Open Data Parkeren: GEBIEDSBEHEERDER
//
// Tabel met informatie over de rechtspersoon die zeggenschap heeft over het gebruiksdoel en de regeling van een gebied.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3
// Permalink: https://opendata.rdw.nl/d/2uc2-nnv3
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: GEBIEDSBEHEERDER
 */
export interface ResponseData {
  /**
   * ### AreaManagerDesc
   * 
   * Omschrijving van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Text
   */
  areamanagerdesc?: string;
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateAreaManagerId
   * 
   * Datum tot wanneer een bepaalde gebiedsbeheerder of parkeerexploitant  niet meer in het NPR opereert.
   *
   * **Type**: Number
   */
  enddateareamanagerid?: string;
  /**
   * ### StartDateAreaManagerId
   * 
   * Datum vanaf wanneer een bepaalde gebiedsbeheerder of parkeerexploitant in het NPR opereert.
   *
   * **Type**: Number
   */
  startdateareamanagerid?: string;
  /**
   * ### URL
   * 
   * Een web-adres dat verwijst naar de website van een gebiedbeheerder (of beheerder van een parkeerterrein of -garage)
   *
   * **Type**: Text
   */
  url?: string;
}

/**
 * Fieldnames for **ParkerenGebiedsbeheerder**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerdesc`` | ``areamanagerdesc`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddateareamanagerid`` | ``enddateareamanagerid`` | _Number_ |
 * | ``Startdateareamanagerid`` | ``startdateareamanagerid`` | _Number_ |
 * | ``Url`` | ``url`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### AreaManagerDesc
   * 
   * Omschrijving van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Text
   */
   Areamanagerdesc: FieldObject<DataType.Text>;
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
   Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### EndDateAreaManagerId
   * 
   * Datum tot wanneer een bepaalde gebiedsbeheerder of parkeerexploitant  niet meer in het NPR opereert.
   *
   * **Type**: Number
   */
   Enddateareamanagerid: FieldObject<DataType.Number>;
  /**
   * ### StartDateAreaManagerId
   * 
   * Datum vanaf wanneer een bepaalde gebiedsbeheerder of parkeerexploitant in het NPR opereert.
   *
   * **Type**: Number
   */
   Startdateareamanagerid: FieldObject<DataType.Number>;
  /**
   * ### URL
   * 
   * Een web-adres dat verwijst naar de website van een gebiedbeheerder (of beheerder van een parkeerterrein of -garage)
   *
   * **Type**: Text
   */
   Url: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  Areamanagerdesc: Field("areamanagerdesc", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddateareamanagerid: Field("enddateareamanagerid", DataType.Number),
  Startdateareamanagerid: Field("startdateareamanagerid", DataType.Number),
  Url: Field("url", DataType.Text),
};

export const Info = {
  fields: [
    "Areamanagerdesc",
    "Areamanagerid",
    "Enddateareamanagerid",
    "Startdateareamanagerid",
    "Url",
  ],
  dataset: "2uc2-nnv3",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEBIEDSBEHEERDER",
  provider_name: "ParkerenGebiedsbeheerder",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/2uc2-nnv3",
}

/**
 * ### Open Data Parkeren: GEBIEDSBEHEERDER
 * Tabel met informatie over de rechtspersoon die zeggenschap heeft over het gebruiksdoel en de regeling van een gebied.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/2uc2-nnv3
 *
 * **Dataset ID:** 2uc2-nnv3
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
