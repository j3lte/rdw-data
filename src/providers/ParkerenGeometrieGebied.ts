// *******************************************************
//
// Name: Open Data Parkeren: GEOMETRIE GEBIED
//
// Een overzicht van de geometrieën van parkeergebieden en -faciliteiten, in coördinatenstelsel WGS84 (EPSG: 4326).
//
// Category: Parkeren
// Tags: gebied, geometrie, parkeren
// License: Unknown
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7
// Permalink: https://opendata.rdw.nl/d/nsk3-v9n7
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2014-11-05T13:48:43.000Z
// Structure last updated: 2025-03-03T02:07:49.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: GEOMETRIE GEBIED
 */
export interface ParkerenGeometrieGebied_ResponseData {
  /**
   * ### GeoDataAsText
   *
   * Geometrie van een parkeergebied of -faciliteit, in cordinatenstelsel WGS84 (EPSG: 4326)
   *
   * **Type**: Text
   */
  areageometryastext?: string;
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
   * Datum waarop een parkeergebied of -faciliteit niet meer geldig is.
   *
   * **Type**: Calendar date
   */
  enddatearea?: string;
  /**
   * ### StartDateArea
   *
   * Datum vanaf wanneer een parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Calendar date
   */
  startdatearea?: string;
}

/**
 * Fieldnames for **ParkerenGeometrieGebied**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areageometryastext`` | ``areageometryastext`` | _Text_ |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatearea`` | ``enddatearea`` | _Calendar date_ |
 * | ``Startdatearea`` | ``startdatearea`` | _Calendar date_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areageometryastext: FieldObject<DataType.Text>;
  Areaid: FieldObject<DataType.Text>;
  Areamanagerid: FieldObject<DataType.Number>;
  Enddatearea: FieldObject<DataType.FloatingTimestamp>;
  Startdatearea: FieldObject<DataType.FloatingTimestamp>;
} = {
  /**
   * ### GeoDataAsText
   *
   * Geometrie van een parkeergebied of -faciliteit, in cordinatenstelsel WGS84 (EPSG: 4326)
   *
   * **Type**: Text
   *
   * **Database Column Name**: `areageometryastext`
   */
  Areageometryastext: Field("areageometryastext", DataType.Text),
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
   * Datum waarop een parkeergebied of -faciliteit niet meer geldig is.
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `enddatearea`
   */
  Enddatearea: Field("enddatearea", DataType.FloatingTimestamp),
  /**
   * ### StartDateArea
   *
   * Datum vanaf wanneer een parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `startdatearea`
   */
  Startdatearea: Field("startdatearea", DataType.FloatingTimestamp),
};

/**
 * Dataset metadata for **ParkerenGeometrieGebied**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areageometryastext",
    "Areaid",
    "Areamanagerid",
    "Enddatearea",
    "Startdatearea",
  ],
  dataset: "nsk3-v9n7",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEOMETRIE GEBIED",
  provider_name: "ParkerenGeometrieGebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/nsk3-v9n7",
  category: "Parkeren",
  tags: ["gebied", "geometrie", "parkeren"],
  license: "Unknown",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2014-11-05T13:48:43.000Z",
  metadata_updated_at: "2025-03-03T02:07:49.000Z",
} as const;

/**
 * ### Open Data Parkeren: GEOMETRIE GEBIED
 * Een overzicht van de geometrieën van parkeergebieden en -faciliteiten, in coördinatenstelsel WGS84 (EPSG: 4326).
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/nsk3-v9n7
 *
 * **Dataset ID:** nsk3-v9n7
 *
 * **Category:** Parkeren
 *
 * **Tags:** gebied, geometrie, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Published:** 2014-11-05T13:48:43.000Z
 *
 * **Structure last updated:** 2025-03-03T02:07:49.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: GEOMETRIE GEBIED dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areageometryastext, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenGeometrieGebied_ResponseData> =>
  createQueryWithDataset<ParkerenGeometrieGebied_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: GEOMETRIE GEBIED**
 * Een overzicht van de geometrieën van parkeergebieden en -faciliteiten, in coördinatenstelsel WGS84 (EPSG: 4326).
 *
 * Provider for the Open Data Parkeren: GEOMETRIE GEBIED dataset. Bundles:
 * - {@link ParkerenGeometrieGebied.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenGeometrieGebied.Fields} — the queryable field definitions
 * - {@link ParkerenGeometrieGebied.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** gebied, geometrie, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** nsk3-v9n7
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7
 *
 * **Published:** 2014-11-05T13:48:43.000Z
 *
 * **Structure last updated:** 2025-03-03T02:07:49.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenGeometrieGebied.RDWQuery()
 *   .where(Where.like(ParkerenGeometrieGebied.Fields.Areageometryastext, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenGeometrieGebied = {
  RDWQuery,
  Fields,
  Info,
};
