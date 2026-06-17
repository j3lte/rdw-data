// *******************************************************
//
// Name: Open Data RDW: Terugroep_voertuig_merk_type
//
// Category: Terugroepacties
// Tags: terugroep, voertuigen, merk, type, recall
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e
// Permalink: https://opendata.rdw.nl/d/mu2x-mu5e
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-10-02T11:25:59.000Z
// Structure last updated: 2026-04-29T12:27:56.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Terugroep_voertuig_merk_type
 */
export interface TerugroepVoertuigMerkType_ResponseData {
  /**
   * ### Merk
   *
   * Het merk waarvoor de terugroepactie is georganiseerd. Er kunnen meerdere merken van toepassing zijn.
   *
   * **Type**: Text
   */
  merk?: string;
  /**
   * ### Referentiecode RDW
   *
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
  /**
   * ### Type
   *
   * Het type, waarvoor de terugroepactie is georganiseerd. Na 1995 is de term type op het kentekenbewijs vervangen door handelsbenaming. Er kunnen meerdere types van toepassing zijn.
   *
   * **Type**: Text
   */
  type?: string;
}

/**
 * Fieldnames for **TerugroepVoertuigMerkType**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Merk`` | ``merk`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 * | ``Type`` | ``type`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Merk: FieldObject<DataType.Text>;
  ReferentiecodeRdw: FieldObject<DataType.Text>;
  Type: FieldObject<DataType.Text>;
} = {
  /**
   * ### Merk
   *
   * Het merk waarvoor de terugroepactie is georganiseerd. Er kunnen meerdere merken van toepassing zijn.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `merk`
   */
  Merk: Field("merk", DataType.Text),
  /**
   * ### Referentiecode RDW
   *
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `referentiecode_rdw`
   */
  ReferentiecodeRdw: Field("referentiecode_rdw", DataType.Text),
  /**
   * ### Type
   *
   * Het type, waarvoor de terugroepactie is georganiseerd. Na 1995 is de term type op het kentekenbewijs vervangen door handelsbenaming. Er kunnen meerdere types van toepassing zijn.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `type`
   */
  Type: Field("type", DataType.Text),
};

/**
 * Dataset metadata for **TerugroepVoertuigMerkType**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Merk",
    "ReferentiecodeRdw",
    "Type",
  ],
  dataset: "mu2x-mu5e",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_voertuig_merk_type",
  provider_name: "TerugroepVoertuigMerkType",
  url:
    "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/mu2x-mu5e",
  category: "Terugroepacties",
  tags: ["terugroep", "voertuigen", "merk", "type", "recall"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-10-02T11:25:59.000Z",
  metadata_updated_at: "2026-04-29T12:27:56.000Z",
} as const;

/**
 * ### Open Data RDW: Terugroep_voertuig_merk_type
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/mu2x-mu5e
 *
 * **Dataset ID:** mu2x-mu5e
 *
 * **Category:** Terugroepacties
 *
 * **Tags:** terugroep, voertuigen, merk, type, recall
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-10-02T11:25:59.000Z
 *
 * **Structure last updated:** 2026-04-29T12:27:56.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Terugroep_voertuig_merk_type dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Merk, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TerugroepVoertuigMerkType_ResponseData> =>
  createQueryWithDataset<TerugroepVoertuigMerkType_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Terugroep_voertuig_merk_type**
 *
 * Provider for the Open Data RDW: Terugroep_voertuig_merk_type dataset. Bundles:
 * - {@link TerugroepVoertuigMerkType.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TerugroepVoertuigMerkType.Fields} — the queryable field definitions
 * - {@link TerugroepVoertuigMerkType.Info} — dataset metadata
 *
 * **Category:** Terugroepacties
 *
 * **Tags:** terugroep, voertuigen, merk, type, recall
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** mu2x-mu5e
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e
 *
 * **Published:** 2024-10-02T11:25:59.000Z
 *
 * **Structure last updated:** 2026-04-29T12:27:56.000Z
 *
 * @example
 * ```ts
 * const { data } = await TerugroepVoertuigMerkType.RDWQuery()
 *   .where(Where.like(TerugroepVoertuigMerkType.Fields.Merk, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TerugroepVoertuigMerkType = {
  RDWQuery,
  Fields,
  Info,
};
