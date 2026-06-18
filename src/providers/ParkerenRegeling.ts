// *******************************************************
//
// Name: Open Data Parkeren: REGELING
//
// Een regeling bevat alle condities die gelden wanneer iemand een recht voor een bepaald gebied verwerft.
//
// Category: Parkeren
// Tags: gebied, regeling, tariefdeel
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq
// Permalink: https://opendata.rdw.nl/d/yefi-qfiq
// Owner: Open data team RDW
// Creator: Open data team RDW
// Published: 2025-02-05T15:31:21.000Z
// Structure last updated: 2025-03-03T02:14:43.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: REGELING
 */
export interface ParkerenRegeling_ResponseData {
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateRegulation
   *
   * Datum van het einde van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   */
  enddateregulation?: string;
  /**
   * ### MaximumDayCharge
   *
   * Het maximale tarief, incl. BTW, dat voor een recht in een gebied dat valt onder de betreffende regeling verschuldigd is (in euro).
   *
   * **Type**: Number
   */
  maximumdaycharge?: string;
  /**
   * ### RegulationDesc
   *
   * Omschrijving van een gebied- of verblijfsregeling
   *
   * **Type**: Text
   */
  regulationdesc?: string;
  /**
   * ### RegulationId
   *
   * Identificatiecode een gebied- of verblijfsregeling.
   *
   * **Type**: Text
   */
  regulationid?: string;
  /**
   * ### RegulationType
   *
   * Code die aangeeft wat voor soort gebied- of verblijfsregeling van toepassing is bij een bepaalde regeling. B: Basisregeling; A: Aanvullende regeling.
   *
   * **Type**: Text
   */
  regulationtype?: string;
  /**
   * ### StartDateRegulation
   *
   * Datum van het begin van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   */
  startdateregulation?: string;
}

/**
 * Fieldnames for **ParkerenRegeling**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddateregulation`` | ``enddateregulation`` | _Text_ |
 * | ``Maximumdaycharge`` | ``maximumdaycharge`` | _Number_ |
 * | ``Regulationdesc`` | ``regulationdesc`` | _Text_ |
 * | ``Regulationid`` | ``regulationid`` | _Text_ |
 * | ``Regulationtype`` | ``regulationtype`` | _Text_ |
 * | ``Startdateregulation`` | ``startdateregulation`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areamanagerid: FieldObject<DataType.Number>;
  Enddateregulation: FieldObject<DataType.Text>;
  Maximumdaycharge: FieldObject<DataType.Number>;
  Regulationdesc: FieldObject<DataType.Text>;
  Regulationid: FieldObject<DataType.Text>;
  Regulationtype: FieldObject<DataType.Text>;
  Startdateregulation: FieldObject<DataType.Text>;
} = {
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
   * ### EndDateRegulation
   *
   * Datum van het einde van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `enddateregulation`
   */
  Enddateregulation: Field("enddateregulation", DataType.Text),
  /**
   * ### MaximumDayCharge
   *
   * Het maximale tarief, incl. BTW, dat voor een recht in een gebied dat valt onder de betreffende regeling verschuldigd is (in euro).
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximumdaycharge`
   */
  Maximumdaycharge: Field("maximumdaycharge", DataType.Number),
  /**
   * ### RegulationDesc
   *
   * Omschrijving van een gebied- of verblijfsregeling
   *
   * **Type**: Text
   *
   * **Database Column Name**: `regulationdesc`
   */
  Regulationdesc: Field("regulationdesc", DataType.Text),
  /**
   * ### RegulationId
   *
   * Identificatiecode een gebied- of verblijfsregeling.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `regulationid`
   */
  Regulationid: Field("regulationid", DataType.Text),
  /**
   * ### RegulationType
   *
   * Code die aangeeft wat voor soort gebied- of verblijfsregeling van toepassing is bij een bepaalde regeling. B: Basisregeling; A: Aanvullende regeling.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `regulationtype`
   */
  Regulationtype: Field("regulationtype", DataType.Text),
  /**
   * ### StartDateRegulation
   *
   * Datum van het begin van een periode waarin een gebied- of verblijfsregeling van kracht is.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `startdateregulation`
   */
  Startdateregulation: Field("startdateregulation", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenRegeling**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areamanagerid",
    "Enddateregulation",
    "Maximumdaycharge",
    "Regulationdesc",
    "Regulationid",
    "Regulationtype",
    "Startdateregulation",
  ],
  dataset: "yefi-qfiq",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: REGELING",
  provider_name: "ParkerenRegeling",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/yefi-qfiq",
  category: "Parkeren",
  tags: ["gebied", "regeling", "tariefdeel"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2025-02-05T15:31:21.000Z",
  metadata_updated_at: "2025-03-03T02:14:43.000Z",
} as const;

/**
 * ### Open Data Parkeren: REGELING
 * Een regeling bevat alle condities die gelden wanneer iemand een recht voor een bepaald gebied verwerft.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/yefi-qfiq
 *
 * **Dataset ID:** yefi-qfiq
 *
 * **Category:** Parkeren
 *
 * **Tags:** gebied, regeling, tariefdeel
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2025-02-05T15:31:21.000Z
 *
 * **Structure last updated:** 2025-03-03T02:14:43.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: REGELING dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areamanagerid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenRegeling_ResponseData> =>
  createQueryWithDataset<ParkerenRegeling_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: REGELING**
 * Een regeling bevat alle condities die gelden wanneer iemand een recht voor een bepaald gebied verwerft.
 *
 * Provider for the Open Data Parkeren: REGELING dataset. Bundles:
 * - {@link ParkerenRegeling.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenRegeling.Fields} — the queryable field definitions
 * - {@link ParkerenRegeling.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** gebied, regeling, tariefdeel
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** yefi-qfiq
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq
 *
 * **Published:** 2025-02-05T15:31:21.000Z
 *
 * **Structure last updated:** 2025-03-03T02:14:43.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenRegeling.RDWQuery()
 *   .where(Where.like(ParkerenRegeling.Fields.Areamanagerid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenRegeling = {
  RDWQuery,
  Fields,
  Info,
};
