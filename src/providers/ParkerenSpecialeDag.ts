// *******************************************************
//
// Name: Open Data Parkeren: SPECIALE DAG
//
// Een door de gebiedsbeheerder benoemd etmaal waarop afwijkende tarieven gelden (lokale feestdagen, evenementen, koopzondagen, etc.).
//
// Category: Parkeren
// Tags: parkeren, speciale dag, tabel
// License: Unknown
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq
// Permalink: https://opendata.rdw.nl/d/hpi4-mynq
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2025-02-05T15:33:19.000Z
// Structure last updated: 2025-03-03T02:14:59.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: SPECIALE DAG
 */
export interface ParkerenSpecialeDag_ResponseData {
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### DateSpecialDay
   *
   * Datum van een speciaal etmaal (dag).
   *
   * **Type**: Number
   */
  datespecialday?: string;
  /**
   * ### NameSpecialDay
   *
   * Naam van een speciaal etmaal (dag), bv. Marktdag, Koopzondag, AutoRAI of Sinterklaasintocht die op een bepaalde datum voor een gebiedsbeheerder van toepassing is.
   *
   * **Type**: Text
   */
  namespecialday?: string;
}

/**
 * Fieldnames for **ParkerenSpecialeDag**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Datespecialday`` | ``datespecialday`` | _Number_ |
 * | ``Namespecialday`` | ``namespecialday`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areamanagerid: FieldObject<DataType.Number>;
  Datespecialday: FieldObject<DataType.Number>;
  Namespecialday: FieldObject<DataType.Text>;
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
   * ### DateSpecialDay
   *
   * Datum van een speciaal etmaal (dag).
   *
   * **Type**: Number
   *
   * **Database Column Name**: `datespecialday`
   */
  Datespecialday: Field("datespecialday", DataType.Number),
  /**
   * ### NameSpecialDay
   *
   * Naam van een speciaal etmaal (dag), bv. Marktdag, Koopzondag, AutoRAI of Sinterklaasintocht die op een bepaalde datum voor een gebiedsbeheerder van toepassing is.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `namespecialday`
   */
  Namespecialday: Field("namespecialday", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenSpecialeDag**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areamanagerid",
    "Datespecialday",
    "Namespecialday",
  ],
  dataset: "hpi4-mynq",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: SPECIALE DAG",
  provider_name: "ParkerenSpecialeDag",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/hpi4-mynq",
  category: "Parkeren",
  tags: ["parkeren", "speciale dag", "tabel"],
  license: "Unknown",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2025-02-05T15:33:19.000Z",
  metadata_updated_at: "2025-03-03T02:14:59.000Z",
} as const;

/**
 * ### Open Data Parkeren: SPECIALE DAG
 * Een door de gebiedsbeheerder benoemd etmaal waarop afwijkende tarieven gelden (lokale feestdagen, evenementen, koopzondagen, etc.).
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/hpi4-mynq
 *
 * **Dataset ID:** hpi4-mynq
 *
 * **Category:** Parkeren
 *
 * **Tags:** parkeren, speciale dag, tabel
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Published:** 2025-02-05T15:33:19.000Z
 *
 * **Structure last updated:** 2025-03-03T02:14:59.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: SPECIALE DAG dataset.
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
): SodaQuery<ParkerenSpecialeDag_ResponseData> =>
  createQueryWithDataset<ParkerenSpecialeDag_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: SPECIALE DAG**
 * Een door de gebiedsbeheerder benoemd etmaal waarop afwijkende tarieven gelden (lokale feestdagen, evenementen, koopzondagen, etc.).
 *
 * Provider for the Open Data Parkeren: SPECIALE DAG dataset. Bundles:
 * - {@link ParkerenSpecialeDag.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenSpecialeDag.Fields} — the queryable field definitions
 * - {@link ParkerenSpecialeDag.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** parkeren, speciale dag, tabel
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** hpi4-mynq
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq
 *
 * **Published:** 2025-02-05T15:33:19.000Z
 *
 * **Structure last updated:** 2025-03-03T02:14:59.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenSpecialeDag.RDWQuery()
 *   .where(Where.like(ParkerenSpecialeDag.Fields.Areamanagerid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenSpecialeDag = {
  RDWQuery,
  Fields,
  Info,
};
