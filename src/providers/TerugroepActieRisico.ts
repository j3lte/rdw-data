// *******************************************************
//
// Name: Open Data RDW: Terugroep_actie_risico
//
// Category: Terugroepacties
// Tags: terugroep, voertuigen, risico, recall
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf
// Permalink: https://opendata.rdw.nl/d/9ihi-jgpf
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-10-02T11:24:02.000Z
// Structure last updated: 2026-04-29T12:32:24.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Terugroep_actie_risico
 */
export interface TerugroepActieRisico_ResponseData {
  /**
   * ### Code mogelijk gevaar
   *
   * De code voor het mogelijke gevaar:
   * ONG= Een (verkeers)ongeval met letselschade
   * TEL= Verhoogde kans op letsel bij een ongeval
   * BRA= Brand met letselschade
   * MIL= Het belasten van het milieu
   *
   * **Type**: Text
   */
  code_mogelijk_gevaar?: string;
  /**
   * ### Mogelijk gevaar
   *
   * Uitleg over wat het gevaar van het defect is voor de bestuurder van het voertuig en eventueel de medeweggebruikers. Er kunnen meer gevaren van toepassing zijn.
   *
   * **Type**: Text
   */
  mogelijk_gevaar?: string;
  /**
   * ### Referentiecode RDW
   *
   * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
}

/**
 * Fieldnames for **TerugroepActieRisico**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CodeMogelijkGevaar`` | ``code_mogelijk_gevaar`` | _Text_ |
 * | ``MogelijkGevaar`` | ``mogelijk_gevaar`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  CodeMogelijkGevaar: FieldObject<DataType.Text>;
  MogelijkGevaar: FieldObject<DataType.Text>;
  ReferentiecodeRdw: FieldObject<DataType.Text>;
} = {
  /**
   * ### Code mogelijk gevaar
   *
   * De code voor het mogelijke gevaar:
   * ONG= Een (verkeers)ongeval met letselschade
   * TEL= Verhoogde kans op letsel bij een ongeval
   * BRA= Brand met letselschade
   * MIL= Het belasten van het milieu
   *
   * **Type**: Text
   *
   * **Database Column Name**: `code_mogelijk_gevaar`
   */
  CodeMogelijkGevaar: Field("code_mogelijk_gevaar", DataType.Text),
  /**
   * ### Mogelijk gevaar
   *
   * Uitleg over wat het gevaar van het defect is voor de bestuurder van het voertuig en eventueel de medeweggebruikers. Er kunnen meer gevaren van toepassing zijn.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `mogelijk_gevaar`
   */
  MogelijkGevaar: Field("mogelijk_gevaar", DataType.Text),
  /**
   * ### Referentiecode RDW
   *
   * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `referentiecode_rdw`
   */
  ReferentiecodeRdw: Field("referentiecode_rdw", DataType.Text),
};

/**
 * Dataset metadata for **TerugroepActieRisico**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "CodeMogelijkGevaar",
    "MogelijkGevaar",
    "ReferentiecodeRdw",
  ],
  dataset: "9ihi-jgpf",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_actie_risico",
  provider_name: "TerugroepActieRisico",
  url: "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/9ihi-jgpf",
  category: "Terugroepacties",
  tags: ["terugroep", "voertuigen", "risico", "recall"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-10-02T11:24:02.000Z",
  metadata_updated_at: "2026-04-29T12:32:24.000Z",
} as const;

/**
 * ### Open Data RDW: Terugroep_actie_risico
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/9ihi-jgpf
 *
 * **Dataset ID:** 9ihi-jgpf
 *
 * **Category:** Terugroepacties
 *
 * **Tags:** terugroep, voertuigen, risico, recall
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-10-02T11:24:02.000Z
 *
 * **Structure last updated:** 2026-04-29T12:32:24.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Terugroep_actie_risico dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CodeMogelijkGevaar, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<TerugroepActieRisico_ResponseData> =>
  createQueryWithDataset<TerugroepActieRisico_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Terugroep_actie_risico**
 *
 * Provider for the Open Data RDW: Terugroep_actie_risico dataset. Bundles:
 * - {@link TerugroepActieRisico.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link TerugroepActieRisico.Fields} — the queryable field definitions
 * - {@link TerugroepActieRisico.Info} — dataset metadata
 *
 * **Category:** Terugroepacties
 *
 * **Tags:** terugroep, voertuigen, risico, recall
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** 9ihi-jgpf
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf
 *
 * **Published:** 2024-10-02T11:24:02.000Z
 *
 * **Structure last updated:** 2026-04-29T12:32:24.000Z
 *
 * @example
 * ```ts
 * const { data } = await TerugroepActieRisico.RDWQuery()
 *   .where(Where.like(TerugroepActieRisico.Fields.CodeMogelijkGevaar, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const TerugroepActieRisico = {
  RDWQuery,
  Fields,
  Info,
};
