// *******************************************************
//
// Name: Open Data RDW: Keuringen
//
// Gegevens set met per kenteken de vervaldatum van de laatst uitgevoerde APK.
//
// Category: Keuringen
// Tags: keuringen
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc
// Permalink: https://opendata.rdw.nl/d/vkij-7mwc
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-05-24T19:58:17.000Z
// Structure last updated: 2025-03-26T00:32:19.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Keuringen
 */
export interface Keuringen_ResponseData {
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Vervaldatum keuring
   *
   * **Type**: Number
   */
  vervaldatum_keuring?: string;
  /**
   * ### Vervaldatum keuring DT
   *
   * **Type**: Calendar date
   */
  vervaldatum_keuring_dt?: string;
}

/**
 * Fieldnames for **Keuringen**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``VervaldatumKeuring`` | ``vervaldatum_keuring`` | _Number_ |
 * | ``VervaldatumKeuringDt`` | ``vervaldatum_keuring_dt`` | _Calendar date_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Kenteken: FieldObject<DataType.Text>;
  VervaldatumKeuring: FieldObject<DataType.Number>;
  VervaldatumKeuringDt: FieldObject<DataType.FloatingTimestamp>;
} = {
  /**
   * ### Kenteken
   *
   * **Type**: Text
   *
   * **Database Column Name**: `kenteken`
   */
  Kenteken: Field("kenteken", DataType.Text),
  /**
   * ### Vervaldatum keuring
   *
   * **Type**: Number
   *
   * **Database Column Name**: `vervaldatum_keuring`
   */
  VervaldatumKeuring: Field("vervaldatum_keuring", DataType.Number),
  /**
   * ### Vervaldatum keuring DT
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `vervaldatum_keuring_dt`
   */
  VervaldatumKeuringDt: Field("vervaldatum_keuring_dt", DataType.FloatingTimestamp),
};

/**
 * Dataset metadata for **Keuringen**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Kenteken",
    "VervaldatumKeuring",
    "VervaldatumKeuringDt",
  ],
  dataset: "vkij-7mwc",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Keuringen",
  provider_name: "Keuringen",
  url: "https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/vkij-7mwc",
  category: "Keuringen",
  tags: ["keuringen"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-05-24T19:58:17.000Z",
  metadata_updated_at: "2025-03-26T00:32:19.000Z",
} as const;

/**
 * ### Open Data RDW: Keuringen
 * Gegevens set met per kenteken de vervaldatum van de laatst uitgevoerde APK.
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/vkij-7mwc
 *
 * **Dataset ID:** vkij-7mwc
 *
 * **Category:** Keuringen
 *
 * **Tags:** keuringen
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-05-24T19:58:17.000Z
 *
 * **Structure last updated:** 2025-03-26T00:32:19.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Keuringen dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Kenteken, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<Keuringen_ResponseData> =>
  createQueryWithDataset<Keuringen_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Keuringen**
 * Gegevens set met per kenteken de vervaldatum van de laatst uitgevoerde APK.
 *
 * Provider for the Open Data RDW: Keuringen dataset. Bundles:
 * - {@link Keuringen.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link Keuringen.Fields} — the queryable field definitions
 * - {@link Keuringen.Info} — dataset metadata
 *
 * **Category:** Keuringen
 *
 * **Tags:** keuringen
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** vkij-7mwc
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc
 *
 * **Published:** 2024-05-24T19:58:17.000Z
 *
 * **Structure last updated:** 2025-03-26T00:32:19.000Z
 *
 * @example
 * ```ts
 * const { data } = await Keuringen.RDWQuery()
 *   .where(Where.like(Keuringen.Fields.Kenteken, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const Keuringen = {
  RDWQuery,
  Fields,
  Info,
};
