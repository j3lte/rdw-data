// *******************************************************
//
// Name: Open Data Parkeren: GEBIED REGELING
//
// Regeling of regelingen die op een gebied van toepassing zijn. Op een bepaald moment is op één gebied maar één regeling van toepassing, maar de regeling die van toepassing is op een gebied, kan periodiek veranderen
//
// Category: Parkeren
// Tags: gebied, regeling, parkeren
// License: Unknown
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8
// Permalink: https://opendata.rdw.nl/d/qtex-qwd8
// Owner: Open data team RDW
// Creator: Open data team RDW
// Published: 2025-12-09T13:05:55.000Z
// Structure last updated: 2025-12-09T13:05:55.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: GEBIED REGELING
 */
export interface ParkerenGebiedRegeling_ResponseData {
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
   * ### EndDateAreaRegulation
   *
   * Einddatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een gebied.
   *
   * **Type**: Text
   */
  enddatearearegulation?: string;
  /**
   * ### RegulationId
   *
   * Identificatiecode van een regeling.
   *
   * **Type**: Text
   */
  regulationid?: string;
  /**
   * ### StartDateAreaRegulation
   *
   * Begindatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  startdatearearegulation?: string;
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een parkeergebied of -faciliteit. Gebruiksdoelen kennen een hierarchie.
   *
   * **Type**: Text
   */
  usageid?: string;
}

/**
 * Fieldnames for **ParkerenGebiedRegeling**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatearearegulation`` | ``enddatearearegulation`` | _Text_ |
 * | ``Regulationid`` | ``regulationid`` | _Text_ |
 * | ``Startdatearearegulation`` | ``startdatearearegulation`` | _Text_ |
 * | ``Usageid`` | ``usageid`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areaid: FieldObject<DataType.Text>;
  Areamanagerid: FieldObject<DataType.Number>;
  Enddatearearegulation: FieldObject<DataType.Text>;
  Regulationid: FieldObject<DataType.Text>;
  Startdatearearegulation: FieldObject<DataType.Text>;
  Usageid: FieldObject<DataType.Text>;
} = {
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
   * ### EndDateAreaRegulation
   *
   * Einddatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een gebied.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `enddatearearegulation`
   */
  Enddatearearegulation: Field("enddatearearegulation", DataType.Text),
  /**
   * ### RegulationId
   *
   * Identificatiecode van een regeling.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `regulationid`
   */
  Regulationid: Field("regulationid", DataType.Text),
  /**
   * ### StartDateAreaRegulation
   *
   * Begindatum en -tijd van de koppeling van een parkeer- of verblijfsregeling aan een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `startdatearearegulation`
   */
  Startdatearearegulation: Field("startdatearearegulation", DataType.Text),
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een parkeergebied of -faciliteit. Gebruiksdoelen kennen een hierarchie.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `usageid`
   */
  Usageid: Field("usageid", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenGebiedRegeling**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Enddatearearegulation",
    "Regulationid",
    "Startdatearearegulation",
    "Usageid",
  ],
  dataset: "qtex-qwd8",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEBIED REGELING",
  provider_name: "ParkerenGebiedRegeling",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/qtex-qwd8",
  category: "Parkeren",
  tags: ["gebied", "regeling", "parkeren"],
  license: "Unknown",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2025-12-09T13:05:55.000Z",
  metadata_updated_at: "2025-12-09T13:05:55.000Z",
} as const;

/**
 * ### Open Data Parkeren: GEBIED REGELING
 * Regeling of regelingen die op een gebied van toepassing zijn. Op een bepaald moment is op één gebied maar één regeling van toepassing, maar de regeling die van toepassing is op een gebied, kan periodiek veranderen
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/qtex-qwd8
 *
 * **Dataset ID:** qtex-qwd8
 *
 * **Category:** Parkeren
 *
 * **Tags:** gebied, regeling, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Published:** 2025-12-09T13:05:55.000Z
 *
 * **Structure last updated:** 2025-12-09T13:05:55.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: GEBIED REGELING dataset.
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenGebiedRegeling_ResponseData> =>
  createQueryWithDataset<ParkerenGebiedRegeling_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: GEBIED REGELING**
 * Regeling of regelingen die op een gebied van toepassing zijn. Op een bepaald moment is op één gebied maar één regeling van toepassing, maar de regeling die van toepassing is op een gebied, kan periodiek veranderen
 *
 * Provider for the Open Data Parkeren: GEBIED REGELING dataset. Bundles:
 * - {@link ParkerenGebiedRegeling.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenGebiedRegeling.Fields} — the queryable field definitions
 * - {@link ParkerenGebiedRegeling.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** gebied, regeling, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** qtex-qwd8
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8
 *
 * **Published:** 2025-12-09T13:05:55.000Z
 *
 * **Structure last updated:** 2025-12-09T13:05:55.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenGebiedRegeling.RDWQuery()
 *   .where(Where.like(ParkerenGebiedRegeling.Fields.Areaid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenGebiedRegeling = {
  RDWQuery,
  Fields,
  Info,
};
