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

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: GEBIED
 */
export interface ParkerenGebied_ResponseData {
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
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areadesc: FieldObject<DataType.Text>;
  Areaid: FieldObject<DataType.Text>;
  Areamanagerid: FieldObject<DataType.Number>;
  Enddatearea: FieldObject<DataType.Number>;
  Startdatearea: FieldObject<DataType.Number>;
} = {
  /**
   * ### AreaDesc
   *
   * Een omschrijving die aan een parkeergebied of -faciliteit is gegeven.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `areadesc`
   */
  Areadesc: Field("areadesc", DataType.Text),
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
   * **Type**: Number
   *
   * **Database Column Name**: `areamanagerid`
   */
  Areamanagerid: Field("areamanagerid", DataType.Number),
  /**
   * ### EndDateArea
   *
   * Datum waarop een parkeergebied of -faciliteit niet meer geldig is
   *
   * **Type**: Number
   *
   * **Database Column Name**: `enddatearea`
   */
  Enddatearea: Field("enddatearea", DataType.Number),
  /**
   * ### StartDateArea
   *
   * Datum vanaf wanneer een parkeergebied of -faciliteit geldig
   *
   * **Type**: Number
   *
   * **Database Column Name**: `startdatearea`
   */
  Startdatearea: Field("startdatearea", DataType.Number),
};

/**
 * Dataset metadata for **ParkerenGebied**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areadesc",
    "Areaid",
    "Areamanagerid",
    "Enddatearea",
    "Startdatearea",
  ],
  dataset: "adw6-9hsg",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEBIED",
  provider_name: "ParkerenGebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/adw6-9hsg",
} as const;

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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: GEBIED dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areadesc, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenGebied_ResponseData> =>
  createQueryWithDataset<ParkerenGebied_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: GEBIED**
 * Een benoemde ruimte met een gebruiksdoel waar een voertuig zich onder condities kan begeven of bevinden.
 *
 * Provider for the Open Data Parkeren: GEBIED dataset. Bundles:
 * - {@link ParkerenGebied.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenGebied.Fields} — the queryable field definitions
 * - {@link ParkerenGebied.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Dataset ID:** adw6-9hsg
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg
 *
 * @example
 * ```ts
 * const { data } = await ParkerenGebied.RDWQuery()
 *   .where(Where.like(ParkerenGebied.Fields.Areadesc, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenGebied = {
  RDWQuery,
  Fields,
  Info,
};
