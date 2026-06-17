// *******************************************************
//
// Name: Open Data RDW: Terugroep_actie_status
//
// Category: Terugroepacties
// Tags: terugroep, status, voertuigen, recall
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7
// Permalink: https://opendata.rdw.nl/d/t49b-isb7
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-10-02T11:43:44.000Z
// Structure last updated: 2026-01-08T13:33:57.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Terugroep_actie_status
 */
export interface TerugroepActieStatus_ResponseData {
  /**
   * ### Code Status
   *
   * De code van de status van het voertuig:
   * O= Openstaande terugroepactie
   * P= Producent heeft herstel gemeld
   *
   * **Type**: Text
   */
  code_status?: string;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Het wordt met 6 karakters zonder tussenliggende streepjes weergegeven.
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Referentiecode RDW
   *
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
  /**
   * ### Status
   *
   * De door de producent/distributeur doorgegeven status van het voertuig:
   * Openstaande terugroepactie= De producent/distributeur heeft de RDW genformeerd, dat het voertuig moet worden hersteld. (=0)
   * Producent heeft herstel gemeld= De producent/distributeur heeft de RDW genformeerd, dat het voertuig is hersteld. (=1)
   * Opmerking: er kunnen meer terugroepacties op een voertuig van toepassing zijn.
   *
   * **Type**: Text
   */
  status?: string;
}

/**
 * Fieldnames for **TerugroepActieStatus**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CodeStatus`` | ``code_status`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 * | ``Status`` | ``status`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  CodeStatus: FieldObject<DataType.Text>;
  Kenteken: FieldObject<DataType.Text>;
  ReferentiecodeRdw: FieldObject<DataType.Text>;
  Status: FieldObject<DataType.Text>;
} = {
  /**
   * ### Code Status
   *
   * De code van de status van het voertuig:
   * O= Openstaande terugroepactie
   * P= Producent heeft herstel gemeld
   *
   * **Type**: Text
   *
   * **Database Column Name**: `code_status`
   */
  CodeStatus: Field("code_status", DataType.Text),
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Het wordt met 6 karakters zonder tussenliggende streepjes weergegeven.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `kenteken`
   */
  Kenteken: Field("kenteken", DataType.Text),
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
   * ### Status
   *
   * De door de producent/distributeur doorgegeven status van het voertuig:
   * Openstaande terugroepactie= De producent/distributeur heeft de RDW genformeerd, dat het voertuig moet worden hersteld. (=0)
   * Producent heeft herstel gemeld= De producent/distributeur heeft de RDW genformeerd, dat het voertuig is hersteld. (=1)
   * Opmerking: er kunnen meer terugroepacties op een voertuig van toepassing zijn.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `status`
   */
  Status: Field("status", DataType.Text),
};

/**
 * Dataset metadata for **TerugroepActieStatus**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "CodeStatus",
    "Kenteken",
    "ReferentiecodeRdw",
    "Status",
  ],
  dataset: "t49b-isb7",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_actie_status",
  provider_name: "TerugroepActieStatus",
  url: "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/t49b-isb7",
  category: "Terugroepacties",
  tags: ["terugroep", "status", "voertuigen", "recall"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-10-02T11:43:44.000Z",
  metadata_updated_at: "2026-01-08T13:33:57.000Z",
} as const;

/**
 * ### Open Data RDW: Terugroep_actie_status
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/t49b-isb7
 *
 * **Dataset ID:** t49b-isb7
 *
 * **Category:** Terugroepacties
 *
 * **Tags:** terugroep, status, voertuigen, recall
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-10-02T11:43:44.000Z
 *
 * **Structure last updated:** 2026-01-08T13:33:57.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Terugroep_actie_status dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CodeStatus, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TerugroepActieStatus_ResponseData> =>
  createQueryWithDataset<TerugroepActieStatus_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Terugroep_actie_status**
 *
 * Provider for the Open Data RDW: Terugroep_actie_status dataset. Bundles:
 * - {@link TerugroepActieStatus.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TerugroepActieStatus.Fields} — the queryable field definitions
 * - {@link TerugroepActieStatus.Info} — dataset metadata
 *
 * **Category:** Terugroepacties
 *
 * **Tags:** terugroep, status, voertuigen, recall
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** t49b-isb7
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7
 *
 * **Published:** 2024-10-02T11:43:44.000Z
 *
 * **Structure last updated:** 2026-01-08T13:33:57.000Z
 *
 * @example
 * ```ts
 * const { data } = await TerugroepActieStatus.RDWQuery()
 *   .where(Where.like(TerugroepActieStatus.Fields.CodeStatus, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TerugroepActieStatus = {
  RDWQuery,
  Fields,
  Info,
};
